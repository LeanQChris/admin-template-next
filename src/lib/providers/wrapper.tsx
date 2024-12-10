"use client"
import React from "react";
import { SidebarProvider } from "@/components/ui/base/sidebar";
import { AppSidebar } from "@/components/ui/sidebar/app.sidebar";
import { ThemeProvider } from "./theme.provider";
import { CustomTrigger } from "@/components/ui/sidebar/trigger";

export default function ProviderWrappers({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full h-screen px-8 bg-green-500 py-4">
                    <header className="w-full py-2">
                        <CustomTrigger />
                    </header>
                    <section>
                        {children}
                    </section>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    );
}
