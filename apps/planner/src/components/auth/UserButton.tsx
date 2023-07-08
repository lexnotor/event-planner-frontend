"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

const UserButton = () => {
    const { account } = useAuth();

    return account.data ? (
        <div className="flex items-center gap-2">
            <div className="inline-block w-9 h-9 rounded-full bg-purple-400"></div>
            <div className="flex flex-col justify-center gap-0">
                <span>{`${account.data?.firstname} ${account.data?.lastname}`}</span>
                <span className="text-neutral-500">
                    @{`${account.data?.username}`}
                </span>
            </div>
        </div>
    ) : (
        <div>
            <Link href={"/signup"}>Signup</Link>/
            <Link href={"/login"}>Login</Link>
        </div>
    );
};

export default UserButton;
