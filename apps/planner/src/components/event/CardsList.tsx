import React from "react";
import EventCard from "./EventCard";

const CardsList = () => {
    return (
        <div className="w-full flex gap-4 flex-wrap [&>*]:basis-auto">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    );
};

export default CardsList;
