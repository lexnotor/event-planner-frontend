"use client";
import { RootState } from "@/redux/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const usePost = () => {
    const posts = useSelector((state: RootState) => state.posts);
    const isPostLoading = useMemo(() => {
        return posts.thread.find(
            (task) => task.action == "LOAD_POST" && task.status == "LOADING"
        );
    }, [posts.thread]);
    return { posts, isPostLoading };
};

export default usePost;
