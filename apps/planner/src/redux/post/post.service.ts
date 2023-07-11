import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, PostInfo } from "..";
import { postUrl } from "../helper.api";
import { RootState } from "../store";

const getPosts: AsyncThunkPayloadCreator<PostInfo[]> = async (_, thunkAPI) => {
    try {
        const res: AxiosResponse<
            ApiResponse<PostInfo[]>,
            number
        > = await axios.get(postUrl.getPosts);
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error || "FAILLED_TO_LOAD_POSTS");
    }
};

const createPost: AsyncThunkPayloadCreator<PostInfo, PostInfo> = async (
    payload,
    thunkAPI
) => {
    try {
        const { user } = thunkAPI.getState() as RootState;

        const res: AxiosResponse<ApiResponse<PostInfo>> = await axios.postForm(
            postUrl.createPost,
            payload,
            { headers: { Authorization: `Bearer ${user.token}` } }
        );
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "FAIL_TO_CREATE_POST");
    }
};

export const postServices = {
    getPosts,
    createPost,
};
