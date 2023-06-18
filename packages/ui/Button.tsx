"use client";

import * as React from "react";

export const Button = ({
    children,
    center = false,
    active = false,
}: {
    children: React.ReactNode;
    center?: boolean;
    active?: boolean;
}) => {
    return (
        <button
            onClick={() => alert("boop")}
            style={{ textAlign: center ? "center" : "left" }}
            className={` py-3 px-4 ${
                active ? "bg-purple-300" : "bg-purple-200"
            } hover:bg-purple-300 transition-colors !duration-500 rounded-r-full rounded-l-full`}
        >
            {children}
        </button>
    );
};
