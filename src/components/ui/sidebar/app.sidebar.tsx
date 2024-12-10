"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/base/sidebar"
import { Calendar, Search, Settings, Home } from "lucide-react"
import { ModeToggle } from "../mode-toogle"
import { Suspense } from "react"
import { Separator } from "../base/separator"


const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Suspense>
            <Sidebar>
                <SidebarHeader className="py-4 px-4 text-xl" >Admin</SidebarHeader>
                <Separator />
                <SidebarContent className="px-2 pt-5">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter className="flex flex-row-reverse">
                    <ModeToggle />
                </SidebarFooter>
            </Sidebar>
        </Suspense>
    )
}