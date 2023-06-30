import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listPost: [],
};

const postSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {},
    extraReducers: (builder) => {},
});

export default postSlice.reducer;
