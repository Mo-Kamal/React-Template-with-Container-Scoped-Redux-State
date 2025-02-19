import { PageLoading } from "@/components/full-height-loading";
import { lazyLoad } from "@/lazy-load";

export const Home = lazyLoad(
  () => import("./index"),
  (module) => module.Home,
  { fallback: <PageLoading /> }
);
