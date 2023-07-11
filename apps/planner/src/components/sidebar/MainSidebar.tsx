import StoreProvider from "@/redux/StoreProvider";
import Link from "next/link";
import UserButton from "../auth/UserButton";
import Navigation from "./Navigation";

const MainSidebar = () => {
    return (
        <section className="p-8 flex flex-col gap-10 h-full bg-purple-50 overflow-y-auto">
            <header>
                <Link href={"/"}>Logo</Link>
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
