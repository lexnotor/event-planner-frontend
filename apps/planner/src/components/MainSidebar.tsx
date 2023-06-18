import React from "react";
import { Button } from "ui";

const MainSidebar = () => {
    return (
        <div className="p-4">
            <nav className="flex flex-col gap-4">
                <Button>Zert</Button>
                <Button active>Zert</Button>
                <Button>Zert</Button>
                <Button>Zert</Button>
            </nav>
        </div>
    );
};

export default MainSidebar;
