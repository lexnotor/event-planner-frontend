"use client";
import React from "react";
import { LaunchServices } from "./gigs";
import { useNewEventContext } from "./context/NewEventContext";

const ListeServices = () => {
    const { services } = useNewEventContext();

    return (
        <div className="flex flex-wrap gap-4 mb-4">
            {services.map((item) => (
                <LaunchServices key={item.id} id={item.id} />
            ))}
        </div>
    );
};

export default ListeServices;
