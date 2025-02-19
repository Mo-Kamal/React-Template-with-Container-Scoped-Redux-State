import { GlobalState } from "@/containers/global/types";
import { HomeState } from "@/containers/home/types";

export interface RootState {
  home: HomeState;
  global: GlobalState;
}
