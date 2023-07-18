"use client";
import { getPosts } from "@/redux/post/post.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const usePost = (id?: string) => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.posts);
    const isPostLoading = useMemo(() => {
        return posts.thread.find(
            (task) => task.action == "LOAD_POST" && task.status == "LOADING"
        );
    }, [posts.thread]);
    useEffect(() => {
        // if no post and there is current loading post
        if (
            posts.listPost.length == 0 &&
            !posts.thread.find((task) => task.action == "LOAD_POST")
        ) {
            dispatch(getPosts());
        }
    }, [dispatch, posts]);

    if (!!id)
        return {
            isPostLoading,
            post: posts.listPost.find((post) => post.id == id),
            comment: posts.comment[id],
        };
    return { posts, isPostLoading };
};

export default usePost;
