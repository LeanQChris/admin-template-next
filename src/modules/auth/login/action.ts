"use server";

import { signIn } from "next-auth/react";

export async function handleLogin(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    await signIn("credentials", {
        email: email as string,
        password: password as string,
        redirect: false,
    })
}