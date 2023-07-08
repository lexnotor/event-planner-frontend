"use client";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios from "axios";
import { authUrl, userUrl } from "../helper.api";
import { RootState } from "../store";
import { loginUser as loginUserAction } from "./user.slice";

const signupUser: AsyncThunkPayloadCreator<any, any> = async (
    payload: {
        firstname: string;
        lastname: string;
        email: string;
        secret: string;
        username: string;
    },
    thunkAPI
) => {
    const { firstname, lastname, email, secret, username } = payload;
    try {
        const res = await axios.post(
            authUrl.signup,
            {
                firstname,
                lastname,
                email,
            },
            { auth: { username, password: secret } }
        );
        thunkAPI.dispatch(loginUserAction({ secret, username }));
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "SIGNUP_FAILED");
    }
};

const loginUser: AsyncThunkPayloadCreator<string, any> = async (
    payload: {
        secret: string;
        username: string;
    },
    thunkAPI
) => {
    const { secret, username } = payload;
    try {
        const res = await axios.post(
            authUrl.login,
            {},
            { auth: { username, password: secret } }
        );
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "SIGNUP_FAILED");
    }
};

const getMyInfo: AsyncThunkPayloadCreator<any, void> = async (_, thunkAPI) => {
    try {
        const { user } = thunkAPI.getState() as RootState;
        const res = await axios.get(userUrl.getMe, {
            headers: { Authorization: `Bearer ${user.token}` },
        });
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "FAILL_TO_GET");
    }
};

export const userServices = { signupUser, loginUser, getMyInfo };
