import { SidebarProvider } from '@/components/ui/base/sidebar'
import { AppSidebar } from '@/components/ui/sidebar/app.sidebar'
import { CustomTrigger } from '@/components/ui/sidebar/trigger'
import { LogOutIcon } from 'lucide-react'
import React from 'react'

export default function SidebarRootLayout({ children }: { children: React.ReactNode }) {
    return (
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
    )
}
