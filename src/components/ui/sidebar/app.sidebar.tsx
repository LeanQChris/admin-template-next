"use client"

import { usePathname } from "next/navigation" // Import for path-based active item detection
import { Calendar, Search, Settings, Home, User } from "lucide-react"

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

import { ModeToggle } from "../mode-toogle"
import { Separator } from "../base/separator"
import Link from "next/link"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Calendar",
        url: "#calendar",
        icon: Calendar,
    },
    {
        title: "Users",
        url: "/users",
        icon: User,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    const pathname = usePathname() // Get the current path
    return (
        <Sidebar collapsible="icon">
            {/* Sidebar Header */}
            <SidebarHeader className="py-4 px-4 text-xl truncate line-clamp-1">
            </SidebarHeader>
            <SidebarContent className=" pt-5">
                <SidebarGroupContent>
                    <SidebarMenu >
                        {items.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <SidebarMenuItem
                                    key={item.title}
                                    className={`group flex items-center gap-3 p-2 rounded-md transition ${isActive
                                        ? "bg-gray-100  dark:bg-gray-800"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="flex items-center gap-2"
                                        >
                                            <item.icon
                                                className={`h-5 w-5 `}
                                            />
                                            <span className="text-sm">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
            <Separator />
            <SidebarFooter className="flex flex-row-reverse ">
                <ModeToggle />
            </SidebarFooter>
        </Sidebar>
    )
}
