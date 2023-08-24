import { getEvents } from "@/redux/event/event.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useEvent = () => {
    const { listeEvents, thread } = useAppSelector((state) => state.event);
    const dispatch = useAppDispatch();

    const isAllReadyLoad = useMemo(
        () => thread.some((task) => task.action == "LOAD_EVENTS"),
        [thread]
    );

    useEffect(() => {
        if (thread.length == 0 && !isAllReadyLoad) dispatch(getEvents());
    }, [dispatch, thread, isAllReadyLoad]);

    return { listeEvents };
};

export default useEvent;
