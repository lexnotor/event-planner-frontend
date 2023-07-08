"use client";
import { Dispatcher, RootState } from "@/redux/store";
import { getMe, loadUserData, loadUserToken } from "@/redux/user/user.slice";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
    const dispatch = useDispatch<Dispatcher>();
    const account = useSelector((state: RootState) => state.user);

    const isPendindLogin = useMemo(() => {
        return !!account.thread.find(
            (task) => task.action == "LOGIN" && task.status == "LOADING"
        );
    }, [account.thread]);

    useEffect(() => {
        const userData = localStorage.getItem("session_data");
        if (userData && !account.data && account.token)
            dispatch(loadUserData(JSON.parse(userData)));
        else if (!account.data && account.token) dispatch(getMe());
    }, [dispatch, account.data, account.token]);

    useEffect(() => {
        const token = localStorage.getItem("session_token");
        if (!account.token && token) dispatch(loadUserToken(token));
    }, [dispatch, account.token]);

    return { account, isPendindLogin };
};

export default useAuth;
