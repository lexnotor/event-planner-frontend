import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postServices } from "./post.service";
import type { CommentInfo, PostInfo } from "..";

type PostState = {
    listPost: PostInfo[];
    comment: Record<string, CommentInfo[]>;
    thread: {
        id: string;
        action:
            | "LOAD_POST"
            | "DELETE_POST"
            | "CREATE_POST"
            | "CREATE_POST_COMMENT"
            | "LOAD_POST_COMMENT";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
};

const initialState: PostState = {
    listPost: [],
    comment: {},
    thread: [],
};

const getPosts = createAsyncThunk("post/getPosts", postServices.getPosts);
const createPost = createAsyncThunk("post/createPost", postServices.createPost);
const getPostComment = createAsyncThunk(
    "post/getPostComment",
    postServices.getPostComment
);
const createPostComment = createAsyncThunk(
    "post/createPostComment",
    postServices.createPostComment
);

const postSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {},
    extraReducers: (builder) =>
        builder
            // getPost
            .addCase(getPosts.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_POST",
                    status: "LOADING",
                });
            })
            .addCase(getPosts.fulfilled, (state, { payload, meta }) => {
                state.listPost.push(...payload);
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getPosts.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // createPost
            .addCase(createPost.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "CREATE_POST",
                    status: "LOADING",
                });
            })
            .addCase(createPost.fulfilled, (state, { payload, meta }) => {
                state.listPost.unshift(payload);
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(createPost.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // getPostComment
            .addCase(getPostComment.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_POST_COMMENT",
                    status: "LOADING",
                });
            })
            .addCase(getPostComment.fulfilled, (state, { payload, meta }) => {
                if (!state.comment[meta.arg]) state.comment[meta.arg] = [];
                state.comment[meta.arg].push(...payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getPostComment.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // createPostComment
            .addCase(createPostComment.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "CREATE_POST_COMMENT",
                    status: "LOADING",
                });
            })
            .addCase(
                createPostComment.fulfilled,
                (state, { payload, meta }) => {
                    if (!state.comment[meta.arg.postId])
                        state.comment[meta.arg.postId] = [];
                    state.comment[meta.arg.postId].unshift(payload);

                    const tasks = state.thread.find(
                        (task) => task.id == meta.requestId
                    );
                    if (tasks) tasks.status = "FULLFILLED";
                }
            )
            .addCase(createPostComment.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            }),
});

// sync actions

// async actions
export { getPosts, createPost, getPostComment, createPostComment };

export default postSlice.reducer;
