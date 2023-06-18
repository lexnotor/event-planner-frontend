import React from "react";
import { Button } from "ui";

const MainSidebar = () => {
    return (
        <section className="p-8 flex flex-col gap-10 h-full bg-purple-50">
            <header>Logo</header>
            <nav className="flex flex-col gap-4">
                <Button>Publications</Button>
                <Button active>Modèle d'invitations</Button>
                <Button>Salle de céremonie</Button>
                <Button>Évenemment</Button>
                <Button>Discussion</Button>
            </nav>
            <footer className="mt-auto">Signin/Login</footer>
        </section>
    );
};

export default MainSidebar;
