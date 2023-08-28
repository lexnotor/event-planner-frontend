"use client";
import { EventInfo } from "@/redux";
import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { Button } from "ui";

const EventCard = ({ event }: { event?: EventInfo }) => {
    return (
        <article className="flex flex-col gap-2 max-w-xs w-full bg-white duration-500 transition-colors p-4 rounded-md border border-primary-500">
            <header>
                <h3
                    title={event?.title ?? "INCONNUE"}
                    className="font-medium text-lg overflow-hidden text-ellipsis whitespace-nowrap"
                >
                    {event?.title ?? "INCONNUE"}
                </h3>
            </header>
            <hr />
            <section className="mb-auto">
                <span className="text-xs font-thin text-primary-700">
                    {new Date(event?.date).toDateString()}
                </span>
                <p title={event?.text}>
                    {event?.text.substring(0, 250) +
                        (event?.text.length > 250 ? "..." : "")}
                </p>
            </section>
            <hr />
            <footer className="flex justify-between">
                <div className="flex gap-2 items-center text-primary-700">
                    <BiCurrentLocation style={{ verticalAlign: "middle" }} />
                    <span className="text-xs font-thin">
                        {event?.location ?? "INCONNUE"}
                    </span>
                </div>
                <div>
                    <Link href={`/event/p?id=${event?.id}`}>
                        {" "}
                        <Button size="small" style={{ fontSize: "80%" }}>
                            Plus
                        </Button>
                    </Link>
                </div>
            </footer>
        </article>
    );
};

export default EventCard;
