import { createSlice } from "@reduxjs/toolkit";

const showReducerSlice = createSlice({
  name: "show",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount(state, action) {
      state.count++;
    },
    decreaseCount(state, action) {
      const is = action.payload;
      state.count--;
    },
  },
});

export const showREducerSliceActions = showReducerSlice.actions;

export default showReducerSlice;
