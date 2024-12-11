"use client"
import React from "react";
import TanstackQueryProvider from "./tanstack-query.provider";

export default function ProviderWrappers({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <TanstackQueryProvider>
            {children}
        </TanstackQueryProvider >
    );
}
