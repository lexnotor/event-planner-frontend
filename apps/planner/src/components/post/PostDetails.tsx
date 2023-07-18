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

    const { post, comments, isPostCommentLoading } = usePost(postId);

    useEffect(() => {
        setPostId(searchParams.get("post"));
    }, [searchParams]);

    return post ? (
        <div className="w-full">
            <Post postData={post} />
            <Comment postComment={comments} isLoading={isPostCommentLoading} />
        </div>
    ) : (
        <SpinLoader />
    );
};

export default PostDetails;
