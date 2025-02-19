import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { RootState } from "@/store/types";

export const homeDomains = {
  root: (state: RootState) => state.home || initialState,
  exampleProperty: (state: RootState) =>
    state.home?.exampleProperty || initialState.exampleProperty,
};

export const homeSelectors = {
  root: createSelector([homeDomains.root], (homeState) => homeState),
  exampleProperty: createSelector(
    [homeDomains.exampleProperty],
    (exampleProperty) => exampleProperty
  ),
};
