import SidebarRootLayout from "@/components/layouts/sidebar-layout";
import { getSession } from "@/core/auth/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "",
}
export default async function ProtectedRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();

    if (session === null) {
        return redirect("/login")
    }

    return (
        <SidebarRootLayout>
            {children}
        </SidebarRootLayout>
    );
}
