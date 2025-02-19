import { PageLoading } from "../../components/full-height-loading";
import { lazyLoad } from "../../lazy-load";

export const NotFound = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  { fallback: <PageLoading /> }
);
