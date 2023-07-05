import MainSidebar from "@/components/MainSidebar";
import ModalManager from "@/components/modals/ModalManager";
import StoreProvider from "@/redux/StoreProvider";
import "../globals.css";

export const metadata = {
    title: "Logo - ",
    description: "Créez un compte",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body>
                <div className="flex h-screen max-w-[1500px] mx-auto">
                    <main className="grow">{children}</main>
                </div>
                <StoreProvider>
                    <ModalManager />
                </StoreProvider>
            </body>
        </html>
    );
}
