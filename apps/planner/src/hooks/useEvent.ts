import { getEvents } from "@/redux/event/event.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import useAuth from "./useAuth";

const useEvent = () => {
    const { listeEvents, thread } = useAppSelector((state) => state.event);
    const { isLogin } = useAuth();
    const dispatch = useAppDispatch();

    const isAllReadyLoad = useMemo(
        () => thread.some((task) => task.action == "LOAD_EVENTS"),
        [thread]
    );

    useEffect(() => {
        if (!isAllReadyLoad && isLogin) dispatch(getEvents());
    }, [dispatch, thread, isAllReadyLoad, isLogin]);

    return { listeEvents };
};

export default useEvent;
