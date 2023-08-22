import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, EventInfo } from "..";
import { eventUrl } from "../helper.api";
import { RootState } from "../store";
import { CreateEventDto, UpdateEventDto } from ".";

const getEvents: AsyncThunkPayloadCreator<EventInfo[]> = async (
    _,
    thunkAPI
) => {
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventInfo[]>> = await axios.get(
            eventUrl.getEvents,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "FAIL_TO_GET_EVENTS");
    }
};

const createEvent: AsyncThunkPayloadCreator<EventInfo, CreateEventDto> = async (
    payload,
    thunkAPI
) => {
    const { text, title, tags, location, date } = payload;

    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventInfo>> = await axios.post(
            eventUrl.createEvent,
            { text, title, tags, location, date },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "FAIL_TO_GET_EVENTS");
    }
};

const updateEvent: AsyncThunkPayloadCreator<EventInfo, UpdateEventDto> = async (
    payload,
    thunkAPI
) => {
    const { eventId, title, date, location, text } = payload;
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventInfo>> = await axios.put(
            `${eventUrl.updateEvent(eventId)}`,
            { title, date, location, text },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message ?? "FAIL_TO_UPDATE_EVENT"
        );
    }
};

const deleteEvent: AsyncThunkPayloadCreator<string, string> = async (
    eventId,
    thunkAPI
) => {
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<string>> = await axios.put(
            `${eventUrl.deleteEvent(eventId)}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message ?? "FAIL_TO_DELETE_EVENT"
        );
    }
};

export const EventServices = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
};
