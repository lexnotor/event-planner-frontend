import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GigInfo } from "..";
import { gigService } from "./gig.service";

interface EventState {
    myGigList: GigInfo[];
    thread: {
        id: string;
        action: "LOAD_MY_GIG" | "CREATE_MY_GIG";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
}

const initialState: EventState = {
    myGigList: [],
    thread: [],
};

const getMyGig = createAsyncThunk("gig/getMyGig", gigService.getMyGig);
const createMyGig = createAsyncThunk("gig/createMyGig", gigService.createMyGig);

const gigSlice = createSlice({
    initialState,
    name: "gig",
    reducers: {},
    extraReducers: (builder) =>
        builder
            // get all my gig
            .addCase(getMyGig.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_MY_GIG",
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
            })
            // create one gig
            .addCase(createMyGig.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "CREATE_MY_GIG",
                    status: "LOADING",
                });
            })
            .addCase(createMyGig.fulfilled, (state, { meta, payload }) => {
                state.myGigList.unshift(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(createMyGig.rejected, (state, { meta }) => {
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
export { createMyGig, getMyGig };
