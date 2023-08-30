"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiNews } from "react-icons/bi";
import {
    BsBox2Heart,
    BsCalendar2Event,
    BsFillChatLeftTextFill,
} from "react-icons/bs";
import { TbBuildingCommunity } from "react-icons/tb";

const links = [
    { label: "Publications", path: "/", exact: true, Icon: BiNews },
    {
        label: "Modèle d'invitations",
        path: "/design",
        exact: false,
        Icon: BsBox2Heart,
    },
    {
        label: "Salle de céremonie",
        path: "/room",
        exact: false,
        Icon: TbBuildingCommunity,
    },
    {
        label: "Évenemment",
        path: "/event",
        exact: false,
        Icon: BsCalendar2Event,
    },
    {
        label: "Discussion",
        path: "/chat",
        exact: false,
        Icon: BsFillChatLeftTextFill,
    },
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
                        } hover-degrade transition-colors !duration-500 rounded-r-full rounded-l-full text-white`}
                    >
                        <Link
                            href={link.path}
                            className="w-full h-full flex gap-4 items-center px-4 py-3 "
                        >
                            <span className="text-2xl">
                                <link.Icon />
                            </span>
                            <span>{link.label}</span>
                        </Link>
                    </button>
                );
            })}
        </>
    );
};

export default Navigation;
