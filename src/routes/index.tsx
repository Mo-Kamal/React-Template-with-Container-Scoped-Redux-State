import { Home } from "@/containers/home/Loadable";
import { AppRoutesUrl, IRoute } from "./types";

export const APP_ROUTES: Array<IRoute> = [
  {
    key: "home-route",
    title: "Home",
    path: AppRoutesUrl.RootPage,
    enabled: true,
    component: Home,
  },
];
