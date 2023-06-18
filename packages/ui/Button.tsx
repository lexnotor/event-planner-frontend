"use client";

import * as React from "react";

export const Button = ({
    children,
    center = false,
    active = false,
    size = "large",
}: {
    children: React.ReactNode;
    center?: boolean;
    active?: boolean;
    size?: "small" | "middle" | "large";
}) => {
    return (
        <button
            onClick={() => alert("boop")}
            style={{ textAlign: center ? "center" : "left" }}
            className={` ${
                size == "small" ? "py-1" : size == "large" ? "py-3" : "py-2"
            } px-4 ${
                active ? "bg-purple-300" : "bg-purple-200"
            } hover:bg-purple-300 transition-colors !duration-500 rounded-r-full rounded-l-full`}
        >
            {children}
        </button>
    );
};
