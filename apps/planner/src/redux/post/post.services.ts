import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, PostInfo } from "..";
import { postUrl } from "../helper.api";

const getPosts: AsyncThunkPayloadCreator<any> = async () => {
    try {
        const res: AxiosResponse<
            ApiResponse<PostInfo[]>,
            number
        > = await axios.get(postUrl.getPosts);
        return res.data.data;
    } catch (error) {}
};

export const postServices = {
    getPosts,
};
