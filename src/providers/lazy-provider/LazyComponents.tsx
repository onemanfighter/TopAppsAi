import * as React from "react";
import PageLoading from "../../component/page-loading/PageLoading";

export interface ILazyComponentProviderProps {
  children: React.ReactNode;
}

export default function LazyComponentProvider(
  props: ILazyComponentProviderProps
) {
  return (
    <React.Suspense fallback={<PageLoading />}>{props.children}</React.Suspense>
  );
}
