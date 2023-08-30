import StoreProvider from "@/redux/StoreProvider";
import Link from "next/link";
import UserButton from "../auth/UserButton";
import Navigation from "./Navigation";
import Image from "next/image";
import logo from "../../assert/logo.svg";

// bg-purple-50
const MainSidebar = () => {
    return (
        <section className="p-8 !pt-4 flex flex-col gap-10 h-full bg-[#12162d] overflow-y-auto">
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
        </section>
    );
};

export default MainSidebar;
