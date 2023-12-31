import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, CommentInfo, PostInfo } from "..";
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
        return thunkAPI.rejectWithValue(
            error?.message || "FAILLED_TO_LOAD_POSTS"
        );
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

const getPostComment: AsyncThunkPayloadCreator<CommentInfo[], string> = async (
    postId,
    thunkAPI
) => {
    try {
        const res: AxiosResponse<ApiResponse<CommentInfo[]>> = await axios.get(
            postUrl.getPostComment(postId)
        );
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message || "FAIL_TO_LOAD_COMMENT"
        );
    }
};

type PCComment = AsyncThunkPayloadCreator<
    CommentInfo,
    CommentInfo & { postId: string }
>;
const createPostComment: PCComment = async (payload, thunkAPI) => {
    const { user } = thunkAPI.getState() as RootState;
    const { postId, date, public: status, text } = payload;
    try {
        const res: AxiosResponse<ApiResponse<CommentInfo>> = await axios.post(
            postUrl.createPostComment(postId),
            {
                date,
                public: status,
                text,
            },
            { headers: { Authorization: `Bearer ${user.token}` } }
        );
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "FAIL_TO_ADD_COMMENT");
    }
};

export const postServices = {
    getPosts,
    createPost,
    getPostComment,
    createPostComment,
};
