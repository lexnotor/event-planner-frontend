"use client";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Button } from "ui";
import { useNewEventContext } from "./context/NewEventContext";
import { addGigToEvent, createEvent } from "@/redux/event/event.slice";
import { EventInfo } from "@/redux";

const SubmitNewEvent = () => {
    const dispatch = useAppDispatch();

    const context = useNewEventContext();
    const submit = async () => {
        const lieu = context.LocationRef.current.value;
        const date = context.dateRef.current.value;
        const description = context.descriptionRef.current.value;
        const title = context.titleRef.current.value;
        const services = context.services;

        const event = await dispatch(
            createEvent({ title, date, text: description, location: lieu })
        );

        if ((event.payload as EventInfo)?.id) {
            const eventId = (event.payload as EventInfo).id;
            await Promise.all(
                services.map((gig) => {
                    const { supplier, details, type } = gig;
                    return dispatch(
                        addGigToEvent({
                            eventId,
                            title: `${supplier}/${type}`,
                            details,
                        })
                    );
                })
            );
        }
    };
    return (
        <Button onClick={submit} active>
            Enregister
        </Button>
    );
};

export default SubmitNewEvent;
