import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DesignInfo } from "..";
import { designService } from "./design.service";

type DesignState = {
    listDesign: DesignInfo[];
    thread: {
        id: string;
        action: "LOAD_DESIGN" | "DELETE_DESIGN" | "CREATE_DESIGN";
        status: "LOADING" | "FULLFILLED" | "ERROR";
        message?: string;
    }[];
};

const getDesigns = createAsyncThunk(
    "design/getDesigns",
    designService.getDesigns
);

const getOneDesign = createAsyncThunk(
    "design/getOneDesign",
    designService.getOneDesign
);

const createDesign = createAsyncThunk(
    "design/createDesign",
    designService.createDesign
);

const initialState: DesignState = {
    listDesign: [],
    thread: [],
};

const designSlice = createSlice({
    name: "design",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getDesigns.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_DESIGN",
                    status: "LOADING",
                });
            })
            .addCase(getDesigns.fulfilled, (state, { payload, meta }) => {
                state.listDesign.push(...payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getDesigns.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })

            .addCase(getOneDesign.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "LOAD_DESIGN",
                    status: "LOADING",
                });
            })
            .addCase(getOneDesign.fulfilled, (state, { payload, meta }) => {
                state.listDesign.push(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(getOneDesign.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            })

            .addCase(createDesign.pending, (state, { meta }) => {
                state.thread.push({
                    id: meta.requestId,
                    action: "CREATE_DESIGN",
                    status: "LOADING",
                });
            })
            .addCase(createDesign.fulfilled, (state, { payload, meta }) => {
                state.listDesign.push(payload);

                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "FULLFILLED";
            })
            .addCase(createDesign.rejected, (state, { meta }) => {
                const tasks = state.thread.find(
                    (task) => task.id == meta.requestId
                );
                if (tasks) tasks.status = "ERROR";
            }),
});

// async actions
export { getDesigns, getOneDesign, createDesign };

export default designSlice.reducer;
