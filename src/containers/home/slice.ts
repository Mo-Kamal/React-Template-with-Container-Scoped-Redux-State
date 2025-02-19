import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "./types";

// The initial state of the Home container
export const initialState: HomeState = {
  exampleProperty: "",
};

// The slice for the Home container
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setExampleProperty(state, action: PayloadAction<string>) {
      state.exampleProperty = action.payload;
    },
  },
});

export const {
  actions: homeActions,
  reducer: homeReducer,
  name: sliceKey,
} = homeSlice;
