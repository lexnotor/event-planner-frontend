"use client";
import React from "react";
import EventCard from "./EventCard";
import useEvent from "@/hooks/useEvent";
import useAuth from "@/hooks/useAuth";

const CardsList = () => {
    const { listeEvents } = useEvent();
    const { isLogin } = useAuth();
    if (!isLogin)
        return <div>Veillez vous connectez pour voir vos évenements</div>;
    if (listeEvents.length == 0) return <div>Aucun evenement actuellement</div>;

    return (
        <div className="w-full flex gap-4 flex-wrap [&>*]:basis-auto">
            {listeEvents.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default CardsList;
