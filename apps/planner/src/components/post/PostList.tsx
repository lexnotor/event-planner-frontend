"use client";
import React, { useEffect } from "react";
import Post from "../Post";
import { useDispatch } from "react-redux";
import usePost from "@/hooks/usePost";
import { getPosts } from "@/redux/post/post.slice";
import { Dispatcher } from "@/redux/store";

const PostList = () => {
    const dispatch = useDispatch<Dispatcher>();
    const { posts, isPostLoading } = usePost();
    useEffect(() => {
        // if no post and there is current loading post
        if (
            posts.listPost.length == 0 &&
            !posts.thread.find((task) => task.action == "LOAD_POST")
        ) {
            dispatch(getPosts());
        }
    }, [dispatch, posts]);
    return (
        <div className="grow flex flex-col gap-8">
            {posts.listPost.map((post) => (
                <Post key={post.id} postData={post} />
            ))}
            {isPostLoading && (
                <span className="w-4 h-4 inline-block animate-spin border border-transparent border-t-neutral-200 rounded-full" />
            )}
        </div>
    );
};

export default PostList;
