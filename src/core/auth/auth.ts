import { AuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { baseUrl, endpoints } from "../constants/endpoints";

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch(baseUrl + endpoints.login, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const response = await res.json()
                if (response.statusCode === 200) {
                    return response.data
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        // Called when a user signs in
        async signIn({ user, account, profile }) {
            return true;
        },

        // Handle JWT token creation and updates
        async jwt({ token, user, account }: any) {
            // Add user and accessToken on first sign-in
            if (user) {
                token.id = user.user.id;
                token.email = user.user.email;
                token.user = user.user;
                token.accessToken = user.accessToken; // Access token from your API
            }

            return token;
        },

        // Pass data from the JWT token to the session
        async session({ session, token }: any) {
            session.user = token.user
            session.accessToken = token.accessToken
            return session;
        },

        // Customize the redirect URL
        async redirect({ url, baseUrl }) {
            console.log(url, baseUrl)
            if (url.includes("/login")) {
                return "/";
            }
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },

}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }