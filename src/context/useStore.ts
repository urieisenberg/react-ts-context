import { useContext, useSyncExternalStore } from "react";
import type { Store } from "./types";
import { StoreContext } from "../context";

export interface StoreValue {
  value: "first" | "last";
}

export function useStore<SelectorOutput>(
  selector: (store: Store) => SelectorOutput
): [SelectorOutput, (value: Partial<Store>) => void] {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Store not found");
  }

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.get())
  );

  return [state, store.set];
}
