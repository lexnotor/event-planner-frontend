import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listPost: [],
};

const postSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {},
});

export default postSlice.reducer;
