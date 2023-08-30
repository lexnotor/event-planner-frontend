"use client";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import useEvent from "@/hooks/useEvent";
import useEventGig from "@/hooks/useEventGig";
import { getOneEvent } from "@/redux/event/event.slice";
import { Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { AntConfig, Button } from "ui";
import { GigDetails } from "./gigs";
import NewServiceModal from "./NewServiceModal";

const EventDetails = ({ id }: { id?: string }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { listeEvents } = useEvent();
    const { eventGig } = useEventGig(id);

    const event = useMemo(() => {
        if (!id) return null;
        return listeEvents?.find((event) => event.id == id);
    }, [listeEvents, id]);

    useEffect(() => {
        if (id) dispatch(getOneEvent(id));
    }, [dispatch, id]);

    return (
        <AntConfig>
            <div>
                <div className="w-full mb-4">
                    <Image
                        alt="wedding"
                        width={1000}
                        height={1000}
                        className="w-full max-h-56 object-cover rounded-lg"
                        src="https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_960_720.jpg"
                    />
                </div>
                <h2 className="mb-4 flex justify-between">
                    <span className="font-bold text-xl mb-4">
                        {event?.title}
                    </span>
                    <span>
                        <Button size="small" onClick={() => router.back()}>
                            Retour
                        </Button>
                    </span>
                </h2>

                <section className="mb-8 p-4 flex flex-col gap-4 border-[#37448a]/50 border rounded-lg">
                    <h3 className="font-bold text-lg">Détail</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <p className="bg-[#6b718d]/10 p-4 rounded-xl relative">
                            <span className="absolute top-1 right-1 text-lg hover:text-green-500 duration-500 cursor-pointer">
                                <AiFillEdit />
                            </span>
                            <span className="text-sm text-primary-200">
                                {event?.text}{" "}
                            </span>
                        </p>

                        <div className="p-4 rounded-xl bg-[#6b718d]/10">
                            <div className="flex gap-2 items-center text-primary-200">
                                <BiCurrentLocation
                                    style={{ verticalAlign: "middle" }}
                                />
                                <span className="text-lg font-bold">
                                    {event?.location ?? "Non specifié"}
                                </span>
                            </div>
                            <p className="text-right">Lieu</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#6b718d]/10">
                            <div className="flex gap-2 items-center text-primary-200">
                                <BsCalendar3
                                    style={{ verticalAlign: "middle" }}
                                />
                                <span className="text-lg font-bold text-primary-200">
                                    {new Date(event?.date).toDateString()}
                                </span>
                            </div>
                            <p className="text-right">Date</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8 p-4 flex flex-col gap-4 border-[#37448a]/50 border rounded-lg">
                    <h3 className="font-bold text-lg">Actions</h3>
                    <div className="mb-8 flex gap-2">
                        <Button size="small">Supprimer</Button>
                        <Button size="small">Modifier</Button>
                        <NewServiceModal id={event?.id} />
                    </div>
                </section>

                <Divider orientation="left" orientationMargin={0}>
                    Services ({eventGig?.length})
                </Divider>

                <section className="grid grid-cols-2 gap-4">
                    {eventGig.map((item) => (
                        <GigDetails key={item?.id} eventGig={item} />
                    ))}
                </section>
            </div>
        </AntConfig>
    );
};

export default EventDetails;
