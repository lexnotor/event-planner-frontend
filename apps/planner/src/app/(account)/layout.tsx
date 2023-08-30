import React from "react";
import { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/account/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body className="">
                <div className="flex h-screen">
                    <header className="w-80 bg-[#35354bec] text-white p-4 h-full">
                        <Sidebar />
                    </header>
                    <main className="grow h-full overflow-y-auto">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
};

export const metadata: Metadata = {
    title: "Account Settings",
    description: "Configuration de compte",
};

export default layout;
