import { configureStore } from "@reduxjs/toolkit";
import designReducer from "./design/design.slice";
import modalReducer from "./modals/modal.slice";
import postReducer from "./post/post.slice";
import userReducer from "./user/user.slice";
import eventReducer from "./event/event.slice";

const store = configureStore({
    reducer: {
        modalmanager: modalReducer,
        posts: postReducer,
        user: userReducer,
        design: designReducer,
        event: eventReducer,
    },
});

// store
export default store;

// type
export type RootState = ReturnType<typeof store.getState>;
export type Dispatcher = typeof store.dispatch;
