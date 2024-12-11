"use client"

import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { getQueryClient } from "../lib/get-query-client";


export default function TanstackQueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}
