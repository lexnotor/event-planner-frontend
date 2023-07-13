import { getDesigns } from "@/redux/design/design.slice";
import { Dispatcher, RootState } from "@/redux/store";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const useDesign = () => {
    const dispatch = useDispatch<Dispatcher>();
    const designs = useSelector((state: RootState) => state.design);

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
