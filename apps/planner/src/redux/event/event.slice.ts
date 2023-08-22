import { createSlice } from "@reduxjs/toolkit";
import { EventInfo } from "..";

interface EventState {
    listeEvents: EventInfo[];
    thread: {
        id: string;
        action: "LOAD_EVENT";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
}

const initialState: EventState = {
    listeEvents: [],
    thread: [],
};

const EventSlice = createSlice({
    initialState,
    name: "events",
    reducers: {},
    extraReducers: () => null,
});

export default EventSlice.reducer;
