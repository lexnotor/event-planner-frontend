import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, EventGigInfo, EventInfo } from "..";
import { eventUrl } from "../helper.api";
import { RootState } from "../store";
import {
    AddGigToEventType,
    CreateEventType,
    UpdateEventGigType,
    UpdateEventType,
} from ".";

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

const getOneEvent: AsyncThunkPayloadCreator<EventInfo, string> = async (
    id,
    thunkAPI
) => {
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventInfo>> = await axios.get(
            eventUrl.getOneEvent(id),
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message ?? "FAIL_TO_GET_ONE_EVENT"
        );
    }
};

const createEvent: AsyncThunkPayloadCreator<
    EventInfo,
    CreateEventType
> = async (payload, thunkAPI) => {
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

const updateEvent: AsyncThunkPayloadCreator<
    EventInfo,
    UpdateEventType
> = async (payload, thunkAPI) => {
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

// ----------- GIG -----------
const addGigToEvent: AsyncThunkPayloadCreator<
    EventGigInfo,
    AddGigToEventType
> = async (payload, thunkAPI) => {
    const { eventId, title, details, gigId } = payload;
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventGigInfo>> = await axios.post(
            eventUrl.addGigToEvent,
            { eventId, title, details, gigId },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "FAIL_TO_ADD_GIG");
    }
};

const updateGigEvent: AsyncThunkPayloadCreator<
    EventGigInfo,
    UpdateEventGigType
> = async (payload, thunkAPI) => {
    const { title, details, gigId, eventGigId } = payload;
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventGigInfo>> = await axios.put(
            eventUrl.updateGigEvent(eventGigId),
            { title, details, gigId },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "FAIL_TO_UPDATE_GIG");
    }
};

const removeGigFromEvent: AsyncThunkPayloadCreator<string, string> = async (
    eventGigId,
    thunkAPI
) => {
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<string>> = await axios.delete(
            eventUrl.delteGigFromEvent(eventGigId),
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message ?? "FAIL_TO_DELETE_GIG");
    }
};

const getEventGigs: AsyncThunkPayloadCreator<EventGigInfo[], string> = async (
    eventId,
    thunkAPI
) => {
    const {
        user: { token },
    } = thunkAPI.getState() as RootState;

    try {
        const res: AxiosResponse<ApiResponse<EventGigInfo[]>> = await axios.get(
            eventUrl.getEventGigs(eventId),
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.message ?? "FAIL_TO_LOAD_EVENT_GIG"
        );
    }
};

export const EventServices = {
    getEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    addGigToEvent,
    updateGigEvent,
    removeGigFromEvent,
    getEventGigs,
};
