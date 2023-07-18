"use client";
import { getPostComment, getPosts } from "@/redux/post/post.slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const usePost = (id?: string) => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.posts);
    const isPostLoading: boolean = useMemo(() => {
        return !!posts.thread.find(
            (task) => task.action == "LOAD_POST" && task.status == "LOADING"
        );
    }, [posts.thread]);

    const isPostCommentLoading: boolean = useMemo(() => {
        return !!posts.thread.find(
            (task) =>
                task.action == "LOAD_POST_COMMENT" && task.status == "LOADING"
        );
    }, [posts.thread]);
    useEffect(() => {
        // if no post and there is no current loading post
        if (
            posts.listPost.length == 0 &&
            !posts.thread.find((task) => task.action == "LOAD_POST")
        ) {
            dispatch(getPosts());
        }

        // if provide id and no comments found
        if (
            id &&
            !posts.comment[id] &&
            !posts.thread.find((task) => task.action == "LOAD_POST_COMMENT")
        ) {
            dispatch(getPostComment(id));
        }
    }, [dispatch, posts, id]);

    if (!!id)
        return {
            isPostLoading,
            post: posts.listPost.find((post) => post.id == id),
            comments: posts.comment[id],
            isPostCommentLoading,
        };
    return { posts, isPostLoading };
};

export default usePost;
