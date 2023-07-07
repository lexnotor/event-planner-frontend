"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const useAuth = () => {
    const account = useSelector((state: RootState) => state.user);

    return { account };
};

export default useAuth;
