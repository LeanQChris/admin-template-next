"use client"
import React from "react";
import { SidebarProvider } from "@/components/ui/base/sidebar";
import { AppSidebar } from "@/components/ui/sidebar/app.sidebar";
import { ThemeProvider } from "./theme.provider";
import { CustomTrigger } from "@/components/ui/sidebar/trigger";
import { LogOutIcon } from "lucide-react";

export default function ProviderWrappers({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full h-screen px-8 py-4">
                    <div className="w-full flex py-2 justify-between">
                        <CustomTrigger />
                        <button>
                            <LogOutIcon />
                        </button>
                    </div>
                    <section>
                        {children}
                    </section>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    );
}
