import { useState, createContext, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children, initialData }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const value = useMemo(() => ({ showSidebar, setShowSidebar }), [showSidebar]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
