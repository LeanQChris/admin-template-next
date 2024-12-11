"use client"

import * as React from "react"

const NextThemesProvider = dynamic(
    () => import('next-themes').then((e) => e.ThemeProvider),
    { ssr: false, }
)

import dynamic from 'next/dynamic'


export function ThemeProvider({
    children,
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
    >{children}</NextThemesProvider>
}
