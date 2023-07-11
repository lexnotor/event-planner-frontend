"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Publications", path: "/", exact: true },
    { label: "Modèle d invitations", path: "/te", exact: false },
    { label: "Salle de céremoni", path: "/ro", exact: false },
    { label: "Évenemment", path: "/ev", exact: false },
    { label: "Discussion", path: "/di", exact: false },
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
                            isActive ? "bg-purple-300" : "bg-purple-200"
                        } hover:bg-purple-300 transition-colors !duration-500 rounded-r-full rounded-l-full`}
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

export default Navigation;
