import { useRef, useCallback } from "react";
import type { Store } from "./types";

export function useStoreData(): {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
} {
  const store = useRef({
    first: "",
    last: "",
  });

  const get = useCallback(() => store.current, []);

  const subscribers = useRef<Set<() => void>>(new Set());

  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store.current, ...value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return { get, set, subscribe };
}
