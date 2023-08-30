import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GigInfo } from "..";
import { gigService } from "./gig.service";

interface EventState {
    myGigList: GigInfo[];
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
    myGigList: [],
    thread: [],
};

const getMyGig = createAsyncThunk("gig/getMyGig", gigService.getMyGig);

const gigSlice = createSlice({
    initialState,
    name: "gig",
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getMyGig.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_EVENTS",
                    status: "LOADING",
                });
            })
            .addCase(getMyGig.fulfilled, (state, { meta, payload }) => {
                state.myGigList = payload;
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getMyGig.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            }),
});

export default gigSlice.reducer;

// sync
export {};

// async
export { getMyGig };
