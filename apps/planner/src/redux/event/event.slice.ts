import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventInfo } from "..";
import { EventServices } from "./event.service";

interface EventState {
    listeEvents: EventInfo[];
    thread: {
        id: string;
        action:
            | "LOAD_EVENTS"
            | "DELETE_EVENT"
            | "UPDATE_EVENT"
            | "CREATE_EVENT";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
}

const initialState: EventState = {
    listeEvents: [],
    thread: [],
};

const getEvents = createAsyncThunk("event/getEvents", EventServices.getEvents);
const createEvent = createAsyncThunk(
    "event/createEvent",
    EventServices.createEvent
);
const deleteEvent = createAsyncThunk(
    "event/deleteEvent",
    EventServices.deleteEvent
);
const updateEvent = createAsyncThunk(
    "event/updateEvent",
    EventServices.updateEvent
);

const EventSlice = createSlice({
    initialState,
    name: "events",
    reducers: {},
    extraReducers: (builder) =>
        builder
            // getEvents
            .addCase(getEvents.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_EVENTS",
                    status: "LOADING",
                });
            })
            .addCase(getEvents.fulfilled, (state, { payload, meta }) => {
                state.listeEvents.push(...payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getEvents.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // createEvent
            .addCase(createEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "CREATE_EVENT",
                    status: "LOADING",
                });
            })
            .addCase(createEvent.fulfilled, (state, { payload, meta }) => {
                state.listeEvents.unshift(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(createEvent.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // deleteEvent
            .addCase(deleteEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "DELETE_EVENT",
                    status: "LOADING",
                });
            })
            .addCase(deleteEvent.fulfilled, (state, { payload, meta }) => {
                const index = state.listeEvents.findIndex(
                    (item) => item.id == payload
                );
                if (index != -1) state.listeEvents.splice(index, 1);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(deleteEvent.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // updateEvent
            .addCase(updateEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "UPDATE_EVENT",
                    status: "LOADING",
                });
            })
            .addCase(updateEvent.fulfilled, (state, { payload, meta }) => {
                const index = state.listeEvents.findIndex(
                    (item) => item.id == payload?.id
                );
                if (index != -1) state.listeEvents.splice(index, 1, payload);
                else state.listeEvents.unshift(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(updateEvent.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            }),
});

// reducer
export default EventSlice.reducer;

// async
export { getEvents, createEvent, deleteEvent, updateEvent };

// sync
