import { getDesigns } from "@/redux/design/design.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useDesign = () => {
    const dispatch = useAppDispatch();
    const designs = useAppSelector((state) => state.design);

    const isDesignLoading = useMemo(() => {
        return !!designs.thread.find(
            (task) => task.action == "LOAD_DESIGN" && task.status == "LOADING"
        );
    }, [designs.thread]);

    useEffect(() => {
        if (!isDesignLoading && designs.listDesign.length == 0)
            dispatch(getDesigns());
    }, [dispatch, designs.listDesign.length, isDesignLoading]);

    return { designs, isDesignLoading };
};

export default useDesign;
