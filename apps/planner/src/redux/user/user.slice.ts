import { createSlice } from "@reduxjs/toolkit";

type Status = "LOADING" | "ERROR" | "FULLFILED";
type UserState = {
    data: any;
    thread: {
        id: string;
        action: string;
        status: Status;
        payload?: object;
        message?: { content: string; display: boolean };
    }[];
};

const initialState: UserState = {
    data: null,
    thread: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        removeUserData: (state) => {
            state.data = null;
        },
    },
});

export const { removeUserData } = userSlice.actions;

export default userSlice.reducer;
