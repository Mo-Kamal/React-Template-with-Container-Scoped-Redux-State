import { RootState } from "@/store/types";
import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

export const GlobalDomains = {
  root: (state: RootState) => state.global || initialState,
  globalProperty: (state: RootState) =>
    state.global?.globalProperty || initialState.globalProperty,
};

export const GlobalSelectors = {
  root: createSelector([GlobalDomains.root], (root) => root),
  globalProperty: createSelector(
    [GlobalDomains.globalProperty],
    (globalProperty) => globalProperty
  ),
};
