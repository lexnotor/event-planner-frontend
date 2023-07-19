"use client";
import usePost from "@/hooks/usePost";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SpinLoader } from "ui";
import Post from "./Post";
import Comment from "./Comment";
import RightSidebar from "../sidebar/RightSidebar";

const PostDetails = () => {
    const [postId, setPostId] = useState(null);

    const searchParams = useSearchParams();

    const { post, comments, isPostCommentLoading } = usePost(postId);

    useEffect(() => {
        setPostId(searchParams.get("post"));
    }, [searchParams]);

    return post ? (
        <div className="w-full flex">
            <div className="w-full">
                <Post postData={post} />
                <Comment
                    postComment={comments}
                    isLoading={isPostCommentLoading}
                />
            </div>
            <aside className="sticky shrink-0 top-0 w-72">
                <RightSidebar />
            </aside>
        </div>
    ) : (
        <SpinLoader />
    );
};

export default PostDetails;
