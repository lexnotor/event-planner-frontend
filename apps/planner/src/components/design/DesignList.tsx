"use client";
import React from "react";

const DesignList = () => {
    return (
        <div className="flex flex-wrap justify-between gap-2 [&>div]:h-36 [&>div]:max-w-[50%]  [&>div]:min-w-[20%] [&>div]:grow [&>div]:shrink-0 [&>div]:rounded-lg [&>div]:bg-neutral-300">
            <div className="w-8"></div>
            <div className="w-20"></div>
            <div className="w-16"></div>
            <div className="w-11"></div>
            <div className="w-16"></div>
            <div className="w-16"></div>
            <div className="w-11"></div>
            <div className="w-9"></div>
            <div className="w-16"></div>
            <div className="w-11"></div>
            <div className="w-16"></div>
            <div className="w-14"></div>
            <div className="w-11"></div>
        </div>
    );
};

export default DesignList;
