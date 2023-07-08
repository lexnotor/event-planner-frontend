import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, PostInfo } from "..";
import { postUrl } from "../helper.api";

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

export const postServices = {
    getPosts,
};
