"use client";
import { PostInfo } from "@/redux";
import React from "react";

const Comment = ({ postData }: { postData?: PostInfo }) => {
    postData;
    return (
        <ul className="py-4 px-8 bg-white rounded-xl flex flex-col gap-4 max-w-[38rem] w-full mx-auto border"></ul>
    );
};

export default Comment;
