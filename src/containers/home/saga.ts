import { takeLatest } from "redux-saga/effects";
import { homeActions } from "./slice";

export function* setExampleProperty(
  action: ReturnType<typeof homeActions.setExampleProperty>
) {
  console.log("setExampleProperty");
}

export function* homeSaga() {
  yield takeLatest(homeActions.setExampleProperty.type, setExampleProperty);
}
