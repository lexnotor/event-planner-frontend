import MainSidebar from "@/components/MainSidebar";
import "../globals.css";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body>
                <div className="flex h-screen">
                    <div className="w-60 overflow-y-auto">
                        <MainSidebar />
                    </div>
                    <main className="grow">{children}</main>
                </div>
            </body>
        </html>
    );
}
