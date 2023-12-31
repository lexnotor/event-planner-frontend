"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userServices } from "./user.service";

type Status = "LOADING" | "ERROR" | "FULLFILED";
interface UserState {
    data: {
        id: string;
        firstname: string;
        lastname: string;
        username: string;
        email: string;
        description: string;
        types: string;
    };
    thread: {
        id: string;
        action: "LOGIN" | "GET_ME" | "SIGNUP";
        status: Status;
        payload?: object;
        message?: { content: string; display: boolean };
    }[];
    token: string;
}

const initialState: UserState = {
    token: null,
    data: null,
    thread: [],
};

const signupUser = createAsyncThunk("user/signupUser", userServices.signupUser);

const loginUser = createAsyncThunk("user/loginUser", userServices.loginUser);

const getMe = createAsyncThunk("user/getMyInfo", userServices.getMyInfo);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        removeUserData: (state) => {
            state.data = null;
        },
        logoutUser: (state) => {
            localStorage.removeItem("session_data");
            localStorage.removeItem("session_token");
            state.token = null;
            state.data = null;
            window.location.href == "/"
                ? window.location.reload()
                : (window.location.href = "/");
        },
        loadUserToken: (state, { payload }: { payload: string }) => {
            state.token = payload;
        },
        loadUserData: (
            state,
            { payload }: { payload: typeof initialState.data }
        ) => {
            state.data = payload;
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
                if (tasks) tasks.status = "FULLFILED";
            })
            .addCase(loginUser.rejected, (state, { meta }) => {
                localStorage.removeItem("session_token");
                state.token = null;
                const tasks = state.thread.find((task) => {
                    return task.id == meta.requestId;
                });
                if (tasks) tasks.status = "ERROR";
            })

            .addCase(signupUser.pending, (state, { meta }) => {
                state.thread.push({
                    action: "SIGNUP",
                    id: meta.requestId,
                    status: "LOADING",
                });
            })
            .addCase(signupUser.fulfilled, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILED";
            })
            .addCase(signupUser.rejected, (state, { meta }) => {
                const tasks = state.thread.find((task) => {
                    return task.id == meta.requestId;
                });
                if (tasks) tasks.status = "ERROR";
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
                if (tasks) tasks.status = "FULLFILED";
                state.data = payload;
            })
            .addCase(getMe.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            }),
});

// sync actions
export const { removeUserData, loadUserData, loadUserToken, logoutUser } =
    userSlice.actions;
// async actions
export { getMe, loginUser, signupUser };
// reducer
export default userSlice.reducer;
