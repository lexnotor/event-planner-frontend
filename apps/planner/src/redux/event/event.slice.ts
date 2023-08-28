import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventGigInfo, EventInfo } from "..";
import { EventServices } from "./event.service";

interface EventState {
    listeEvents: EventInfo[];
    listeGigs: EventGigInfo[];
    thread: {
        id: string;
        action:
            | "LOAD_EVENTS"
            | "GET_ONE_EVENT"
            | "DELETE_EVENT"
            | "UPDATE_EVENT"
            | "CREATE_EVENT"
            // GIG
            | "UPDATE_EVENT_GIG"
            | "REMOVE_EVENT_GIG"
            | "GET_EVENT_GIG"
            | "ADD_GIG_TO_EVENT";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
}

const initialState: EventState = {
    listeEvents: [],
    listeGigs: [],
    thread: [],
};

const getEvents = createAsyncThunk("event/getEvents", EventServices.getEvents);

const getOneEvent = createAsyncThunk(
    "event/getOneEvent",
    EventServices.getOneEvent
);

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

// -------- GIG ---------
const addGigToEvent = createAsyncThunk(
    "event/addGigToEvent",
    EventServices.addGigToEvent
);
const updateGigEvent = createAsyncThunk(
    "event/updateGigEvent",
    EventServices.updateGigEvent
);
const removeGigFromEvent = createAsyncThunk(
    "event/removeGigFromEvent",
    EventServices.removeGigFromEvent
);
const getEventGigs = createAsyncThunk(
    "event/getEventGigs",
    EventServices.getEventGigs
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
                state.listeEvents = payload;

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
            // getOneEvent
            .addCase(getOneEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "GET_ONE_EVENT",
                    status: "LOADING",
                });
            })
            .addCase(getOneEvent.fulfilled, (state, { payload, meta }) => {
                const index = state.listeEvents.findIndex(
                    (event) => event.id == payload.id
                );

                if (index == -1) state.listeEvents.unshift(payload);
                else state.listeEvents.splice(index, 1, payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getOneEvent.rejected, (state, { meta }) => {
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
            })
            // addGigToEvent
            .addCase(addGigToEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "ADD_GIG_TO_EVENT",
                    status: "LOADING",
                });
            })
            .addCase(addGigToEvent.fulfilled, (state, { payload, meta }) => {
                state.listeGigs.unshift(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(addGigToEvent.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // updateGigEvent
            .addCase(updateGigEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "UPDATE_EVENT_GIG",
                    status: "LOADING",
                });
            })
            .addCase(updateGigEvent.fulfilled, (state, { payload, meta }) => {
                const index = state.listeGigs.findIndex(
                    (item) => item.id == payload?.id
                );
                if (index != -1) state.listeGigs.splice(index, 1, payload);
                else state.listeGigs.unshift(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(updateGigEvent.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // removeGigFromEvent
            .addCase(removeGigFromEvent.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "REMOVE_EVENT_GIG",
                    status: "LOADING",
                });
            })
            .addCase(
                removeGigFromEvent.fulfilled,
                (state, { payload, meta }) => {
                    const index = state.listeGigs.findIndex(
                        (item) => item.id == payload
                    );
                    if (index != -1) state.listeGigs.splice(index, 1);

                    const tasks = state.thread.find(
                        (task) => task.id == meta.requestId
                    );
                    if (tasks) tasks.status = "FULLFILLED";
                }
            )
            .addCase(removeGigFromEvent.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })
            // getEventGigs
            .addCase(getEventGigs.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "GET_EVENT_GIG",
                    status: "LOADING",
                });
            })
            .addCase(getEventGigs.fulfilled, (state, { payload, meta }) => {
                payload.forEach((gig) => {
                    const index = state.listeGigs.findIndex(
                        (item) => item.id == gig.id
                    );
                    index == -1
                        ? state.listeGigs.unshift(gig)
                        : state.listeGigs.splice(index, 1, gig);
                });

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getEventGigs.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            }),
});

// reducer
export default EventSlice.reducer;

// async
export {
    addGigToEvent,
    createEvent,
    deleteEvent,
    getEventGigs,
    getEvents,
    getOneEvent,
    removeGigFromEvent,
    updateEvent,
    updateGigEvent,
};

// sync
