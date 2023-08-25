"use client";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getOneEvent } from "@/redux/event/event.slice";
import { useEffect, useMemo } from "react";

const EventDetails = ({ id }: { id?: string }) => {
    const dispatch = useAppDispatch();
    const { listeEvents } = useAppSelector((state) => state.event);
    const event = useMemo(() => {
        if (!id) return null;

        return listeEvents?.find((event) => event.id == id);
    }, [listeEvents, id]);

    useEffect(() => {
        if (id) dispatch(getOneEvent(id));
    }, [dispatch, id]);

    return <div>{event?.title}</div>;
};

export default EventDetails;
