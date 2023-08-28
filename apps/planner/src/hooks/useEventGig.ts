"use client";
import { getEventGigs } from "@/redux/event/event.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useEventGig = (eventId: string) => {
    const dispatch = useAppDispatch();
    const { listeGigs } = useAppSelector((state) => state.event);

    const eventGig = useMemo(() => {
        return listeGigs.filter(
            (gig) => gig.event.id == eventId || gig.event == eventId
        );
    }, [listeGigs, eventId]);

    useEffect(() => {
        dispatch(getEventGigs(eventId));
    }, [eventId, dispatch]);

    return { eventGig };
};

export default useEventGig;
