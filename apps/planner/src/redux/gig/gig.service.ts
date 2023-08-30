import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, GigInfo } from "..";
import { gigUrl } from "../helper.api";
import { RootState } from "../store";

const getMyGig: AsyncThunkPayloadCreator<GigInfo[], any> = async (
    _,
    thunkAPI
) => {
    const {
        user: {
            token,
            data: { id: userId },
        },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<GigInfo[]>> = await axios.get(
            gigUrl.getMyGig(userId),
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message ?? "FAIL_TO_GET_USER_GIG"
        );
    }
};

type createGigPayload = {
    type: string;
    title: string;
    text?: string;
    tags?: string;
};

const createMyGig: AsyncThunkPayloadCreator<GigInfo, createGigPayload> = async (
    payload,
    thunkAPI
) => {
    const { title, type, tags, text } = payload;

    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<GigInfo>> = await axios.post(
            gigUrl.createMyGig,
            { title, type, tags, text },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "FAIL_TO_CREATE_GIG");
    }
};

export const gigService = { getMyGig, createMyGig };
