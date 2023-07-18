"use client";
import { RootState } from "@/redux/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const usePost = (id?: string) => {
    const posts = useSelector((state: RootState) => state.posts);
    const isPostLoading = useMemo(() => {
        return posts.thread.find(
            (task) => task.action == "LOAD_POST" && task.status == "LOADING"
        );
    }, [posts.thread]);
    if (!!id)
        return {
            isPostLoading,
            post: posts.listPost.find((post) => post.id == id),
            comment: posts.comment[id],
        };
    return { posts, isPostLoading };
};

export default usePost;
