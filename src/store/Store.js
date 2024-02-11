import { configureStore } from "@reduxjs/toolkit";
import showReducerSlice from "./ShowReducer";

const store = configureStore({
  reducer: {
    show: showReducerSlice.reducer,
  },
});

export default store;
