"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Publications", path: "/", exact: true },
    { label: "Modèle d'invitations", path: "/design", exact: false },
    { label: "Salle de céremonie", path: "/room", exact: false },
    { label: "Évenemment", path: "/event", exact: false },
    { label: "Discussion", path: "/chat", exact: false },
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
