import { takeEvery } from "redux-saga/effects";
import { globalActions } from "./slice";

export function* setGlobalProperty(
  action: ReturnType<typeof globalActions.setGlobalProperty>
) {}

export function* globalSaga() {
  yield takeEvery(globalActions.setGlobalProperty.type, setGlobalProperty);
}
