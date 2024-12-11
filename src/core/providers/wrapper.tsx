"use client"
import React from "react";
import TanstackQueryProvider from "./tanstack-query.provider";
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'

export default function ProviderWrappers({
    children, session
}: {
    children: React.ReactNode,
    session: Session | null
}) {
    return (
        <SessionProvider session={session}>
            <TanstackQueryProvider>
                {children}
            </TanstackQueryProvider >
        </SessionProvider>
    );
}
