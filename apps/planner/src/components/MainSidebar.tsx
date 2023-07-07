import { Button } from "ui";
import UserButton from "./auth/UserButton";
import StoreProvider from "@/redux/StoreProvider";

const MainSidebar = () => {
    return (
        <section className="p-8 flex flex-col gap-10 h-full bg-purple-50">
            <header>Logo</header>
            <nav className="flex flex-col gap-4">
                <Button active>Publications</Button>
                <Button>Modèle d invitations</Button>
                <Button>Salle de céremonie</Button>
                <Button>Évenemment</Button>
                <Button>Discussion</Button>
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
