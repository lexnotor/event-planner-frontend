"use client";
import React from "react";
import EventCard from "./EventCard";
import useEvent from "@/hooks/useEvent";

const CardsList = () => {
    const { listeEvents } = useEvent();
    return (
        <div className="w-full flex gap-4 flex-wrap [&>*]:basis-auto">
            {listeEvents.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default CardsList;
