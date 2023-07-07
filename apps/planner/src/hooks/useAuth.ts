"use client";
import { Dispatcher, RootState } from "@/redux/store";
import { getMe } from "@/redux/user/user.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
    const dispatch = useDispatch<Dispatcher>();
    const account = useSelector((state: RootState) => state.user);
    useEffect(() => {
        if (!account.data) dispatch(getMe());
    }, [dispatch, account]);
    return { account };
};

export default useAuth;
