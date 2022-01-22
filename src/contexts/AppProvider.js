import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleHideMenubar, setToggleHideMenubar] = useState(false);

  const onToggleHideMenu = () => {
    setToggleHideMenubar(!toggleHideMenubar);
  };

  const value = {
    toggleHideMenubar,
    onToggleHideMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
