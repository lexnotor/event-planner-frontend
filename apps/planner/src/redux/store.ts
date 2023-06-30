import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modals/modal.slice";
import postReducer from "./post/post.slice";

const store = configureStore({
    reducer: {
        modalmanager: modalReducer,
        posts: postReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatcher = typeof store.dispatch;
