import { createSlice } from "@reduxjs/toolkit";

const initialState = { modal_id: null, thread: [], payload: null };

const modalSlice = createSlice({
    initialState,
    name: "modalmanager",
    reducers: {
        openModal: (state, { payload }) => {
            if (state.modal_id) state.thread.push(payload);
            else {
                state.modal_id = payload.modal_id;
                state.payload = payload.payload;
            }
        },
        closeModal: (state) => {
            const current = state.thread.shift();
            state.modal_id = null;
            state.payload = null;
            if (current) {
                state.modal_id = current.modal_id;
                state.payload = current.payload;
            }
        },
    },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
