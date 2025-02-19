import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "./types";

export const initialState: GlobalState = {
  globalProperty: "",
};

// global slice
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalProperty(state, action: PayloadAction<string>) {
      state.globalProperty = action.payload;
    },
  },
});

export const { actions: globalActions, reducer: globalReducer } = globalSlice;
