import { configureStore } from "@reduxjs/toolkit";
import calcSliceReducer from "./calcSlice";

const store = configureStore({
  reducer: { calc: calcSliceReducer },
});

export default store;
