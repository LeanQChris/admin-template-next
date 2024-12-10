"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSidebar } from "../base/sidebar"

export function CustomTrigger() {
    const { toggleSidebar, open } = useSidebar()
    return <button onClick={toggleSidebar}>{!open ? <ChevronRight /> : <ChevronLeft />}</button>
}
