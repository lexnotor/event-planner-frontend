"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Mon compte", path: "/account", exact: true },
    { label: "Mes services", path: "/gig", exact: false },
    { label: "Securité", path: "/security", exact: false },
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
                            isActive ? "bg-neutral-600" : "bg-neutral-400"
                        } hover:bg-neutral-600 transition-colors !duration-500 rounded-r-full rounded-l-full text-white`}
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
        <div>
            <nav className="flex flex-col gap-4">
                <Navigation />
            </nav>
        </div>
    );
};

export default Sidebar;
