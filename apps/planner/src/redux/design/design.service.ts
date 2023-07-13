import axios, { AxiosResponse } from "axios";
import { ApiResponse, DesignInfo } from "..";
import { designUrl } from "../helper.api";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getDesigns: AsyncThunkPayloadCreator<DesignInfo[]> = async (
    _,
    thunkAPI
) => {
    try {
        const res: AxiosResponse<ApiResponse<DesignInfo[]>> = await axios.get(
            designUrl.getDesigns
        );
        return res.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message || "FAIL_TO_GET_DESIGNS");
    }
};

const getOneDesign: AsyncThunkPayloadCreator<DesignInfo, string> = async (
    designId,
    thunkAPI
) => {
    try {
        const res: AxiosResponse<ApiResponse<DesignInfo>> = await axios.get(
            `${designUrl.getOneDesign}/${designId}`
        );
        return res.data.data;
    } catch (error) {
        thunkAPI;
    }
};

const createDesign: AsyncThunkPayloadCreator<DesignInfo, DesignInfo> = async (
    payload,
    thunkAPI
) => {
    const { user } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<DesignInfo>> =
            await axios.postForm(designUrl.createDesign, payload, {
                headers: { Authorization: `Bearer ${user.token}` },
            });
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message || "FAIL_TO_SEND_DESIGN_DATA"
        );
    }
};

export const designService = { getDesigns, createDesign, getOneDesign };
