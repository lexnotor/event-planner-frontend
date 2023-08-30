"use client";
import useEvent from "@/hooks/useEvent";
import Link from "next/link";
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";

const SideBarListEvent = () => {
    const { listeEvents } = useEvent();

    return (
        <div className="px-2 rounded-lg overflow-y-auto max-h-[calc(100vh-5rem)] bg-[#6b718d]/10">
            <ul className="flex flex-col gap-1">
                {listeEvents.map((event) => {
                    return (
                        <>
                            <Link
                                key={event.id}
                                href={`/event/p/?id=${event.id}`}
                            >
                                <li className="px-2 py-2 rounded-md  cursor-pointer hover:bg-[#6b718d]/50">
                                    <span className="block font-bold overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                                        {event.title}
                                    </span>
                                    <p className="flex gap-2 items-center text-xs">
                                        <span>
                                            <BsCalendar3
                                                style={{
                                                    verticalAlign: "middle",
                                                }}
                                            />
                                        </span>
                                        <span>
                                            {new Date(
                                                event.date
                                            ).toDateString()}
                                        </span>
                                    </p>
                                    <p className="flex gap-2 items-center text-xs">
                                        <span>
                                            <BiCurrentLocation
                                                style={{
                                                    verticalAlign: "middle",
                                                }}
                                            />
                                        </span>
                                        <span>
                                            {event.location ?? "Inconnu"}
                                        </span>
                                    </p>
                                </li>
                            </Link>
                            <hr />
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBarListEvent;
