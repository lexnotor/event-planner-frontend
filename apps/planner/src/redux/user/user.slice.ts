"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userServices } from "./user.service";

type Status = "LOADING" | "ERROR" | "FULLFILED";
interface UserState {
    data: any;
    thread: {
        id: string;
        action: string;
        status: Status;
        payload?: object;
        message?: { content: string; display: boolean };
    }[];
    token: string;
}

const initialState: UserState = {
    token:
        typeof window == "undefined"
            ? null
            : localStorage.getItem("session_token"),
    data: JSON.parse(
        typeof window == "undefined"
            ? null
            : localStorage.getItem("session_data")
    ),
    thread: [],
};

const loginUser = createAsyncThunk("user/loginUser", userServices.loginUser);

const getMe = createAsyncThunk("user/getMyInfo", userServices.getMyInfo);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        removeUserData: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loginUser.pending, (state, { meta }) => {
                state.thread.push({
                    action: "LOGIN",
                    id: meta.requestId,
                    status: "LOADING",
                });
            })
            .addCase(loginUser.fulfilled, (state, { payload, meta }) => {
                localStorage.setItem("session_token", payload);
                state.token = payload;
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status == "FULLFILED";
            })
            .addCase(loginUser.rejected, (state, { meta }) => {
                localStorage.removeItem("session_token");
                state.token = null;
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status == "ERROR";
            })

            .addCase(getMe.pending, (state, { meta }) => {
                state.thread.push({
                    action: "GET_ME",
                    id: meta.requestId,
                    status: "LOADING",
                });
            })
            .addCase(getMe.fulfilled, (state, { payload, meta }) => {
                localStorage.setItem("session_data", JSON.stringify(payload));
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status == "FULLFILED";
                state.data = payload;
            })
            .addCase(getMe.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status == "ERROR";
            }),
});

// sync actions
export const { removeUserData } = userSlice.actions;
// async actions
export { loginUser, getMe };
// reducer
export default userSlice.reducer;
