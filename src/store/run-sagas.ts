import { globalSaga } from "@/containers/global/saga";
import { homeSaga } from "@/containers/home/saga";
import { runSaga } from "@/store/configure-store";

export const runSagas = () => {
  runSaga(globalSaga);
  runSaga(homeSaga);
};
