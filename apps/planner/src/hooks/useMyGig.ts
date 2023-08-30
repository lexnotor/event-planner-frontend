"use client";
import { getMyGig } from "@/redux/gig/gig.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useMyGig = () => {
    const dispatch = useAppDispatch();
    const { myGigList, thread } = useAppSelector((state) => state.gig);

    const isAllReadyLoad = useMemo(
        () => thread.some((task) => task.action == "LOAD_MY_GIG"),
        [thread]
    );

    useEffect(() => {
        if (!isAllReadyLoad) dispatch(getMyGig());
    }, [dispatch, isAllReadyLoad]);

    return { myGigList };
};
export default useMyGig;
