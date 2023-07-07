import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modals/modal.slice";
import postReducer from "./post/post.slice";
import userReducer from "./user/user.slice";

const store = configureStore({
    reducer: {
        modalmanager: modalReducer,
        posts: postReducer,
        user: userReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatcher = typeof store.dispatch;
