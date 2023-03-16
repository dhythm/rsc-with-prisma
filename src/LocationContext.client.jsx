import { createContext, useContext } from "react";

/**
 *  interface Location {
 *    selectedId: string | null
 *    isEditing: boolean;
 *    searchText: string;
 *  }
 */
export const LocationContext = createContext(null)

export const useLocation = () => {
  return useContext(LocationContext)
}
