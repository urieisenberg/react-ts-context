import { createContext } from "react";
import { useStoreData } from "./useStoreData";

type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

export const StoreContext = createContext<UseStoreDataReturnType | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  );
}
