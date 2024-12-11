import SidebarRootLayout from "@/components/layouts/sidebar-layout";

export default function ProtectedRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarRootLayout>
            {children}
        </SidebarRootLayout>
    );
}
