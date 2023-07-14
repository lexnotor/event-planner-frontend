"use client";
import usePost from "@/hooks/usePost";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SpinLoader } from "ui";
import Post from "./Post";
import Comment from "./Comment";

const PostDetails = () => {
    const [postId, setPostId] = useState(null);

    const searchParams = useSearchParams();

    const { post } = usePost(postId);

    useEffect(() => {
        setPostId(searchParams.get("post"));
    }, [searchParams]);

    return post ? (
        <div>
            <Post postData={post} />
            <Comment postData={post} />
        </div>
    ) : (
        <SpinLoader />
    );
};

export default PostDetails;
