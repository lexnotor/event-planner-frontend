"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StoreProvider from "@/redux/StoreProvider";
import UserButton from "../auth/UserButton";
import Image from "next/image";
import logo from "../../assert/logo.svg";

const links = [
    { label: "Mon compte", path: "/account", exact: true },
    { label: "Mes services", path: "/gig", exact: false },
    { label: "Securité", path: "/security", exact: false },
    { label: "Acceuil", path: "/", exact: true },
];

const Navigation = () => {
    const pathname = usePathname();
    return (
        <>
            {links.map((link, i) => {
                const isActive = link.exact
                    ? pathname == link.path
                    : pathname.startsWith(link.path);
                return (
                    <button
                        key={i}
                        style={{ textAlign: "start" }}
                        className={`p-0 ${
                            isActive ? "degrade font-bold" : ""
                        } hover-degrade  transition-colors !duration-500 rounded-r-full rounded-l-full text-white`}
                    >
                        <Link
                            href={link.path}
                            className="w-full h-full inline-block px-4 py-3"
                        >
                            {link.label}
                        </Link>
                    </button>
                );
            })}
        </>
    );
};

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-10 h-full">
            <header>
                <Link href={"/"}>
                    <Image
                        src={logo}
                        width={500}
                        height={500}
                        alt="logo"
                        className="max-w-[10vw] mx-auto"
                    />
                </Link>
            </header>
            <nav className="flex flex-col gap-4">
                <Navigation />
            </nav>
            <footer className="mt-auto">
                <StoreProvider>
                    <UserButton />
                </StoreProvider>
            </footer>
        </div>
    );
};

export default Sidebar;
