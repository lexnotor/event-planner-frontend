import MainSidebar from "@/components/sidebar/MainSidebar";
import ModalManager from "@/components/modals/ModalManager";
import StoreProvider from "@/redux/StoreProvider";
import "../globals.css";
import AuthManager from "@/components/auth/AuthManager";

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
            <body className="text-neutral-700 bg-neutral-200">
                <div className="flex justify-center h-screen max-w-[1200px] mx-auto">
                    <div className="w-72 overflow-y-auto shrink-0">
                        <MainSidebar />
                    </div>
                    <main className="grow">{children}</main>
                </div>
                <StoreProvider>
                    <ModalManager />
                    <AuthManager />
                </StoreProvider>
            </body>
        </html>
    );
}
