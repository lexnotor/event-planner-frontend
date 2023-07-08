import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postServices } from "./post.services";
import type { PostInfo } from "..";

type PostState = {
    listPost: PostInfo[];
    thread: {
        id: string;
        action: "LOAD_POST" | "DELETE_POST";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
};

const initialState: PostState = {
    listPost: [],
    thread: [],
};

const getPosts = createAsyncThunk("post/getPosts", postServices.getPosts);

const postSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {},
    extraReducers: (builder) =>
        builder
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
            }),
});

// sync actions

// async actions
export { getPosts };

export default postSlice.reducer;
