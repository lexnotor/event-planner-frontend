import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modals/modal.slice";

const store = configureStore({
    reducer: {
        modalmanager: modalReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatcher = typeof store.dispatch;
