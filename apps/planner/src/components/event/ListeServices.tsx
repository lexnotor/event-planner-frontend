import React from "react";
import { LaunchServices } from "./services";

const ListeServices = () => {
    return (
        <div className="flex flex-wrap gap-4 mb-4">
            <LaunchServices />
            <LaunchServices />
            <LaunchServices />
        </div>
    );
};

export default ListeServices;
