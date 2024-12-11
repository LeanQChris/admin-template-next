import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl; // Extract the current path
    const token = req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token");

    // Pages that do not require authentication
    const publicPaths = ["/login"];

    // Allow the request to continue for authenticated users
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)" // Exclude static files and assets
    ],
};
