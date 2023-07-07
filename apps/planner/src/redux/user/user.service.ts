"use client";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios from "axios";
import { authUrl } from "../helper.api";

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

export const userServices = { signupUser, loginUser };
