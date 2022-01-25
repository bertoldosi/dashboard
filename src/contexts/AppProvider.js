import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleHideMenubar, setToggleHideMenubar] = useState(false);
  const [isVisibleRightBar, setIsVisibleRightBar] = useState(false);
  const [theme, setTheme] = useState("default");

  const onToggleHideMenu = () => {
    setToggleHideMenubar(!toggleHideMenubar);
  };

  const onToggleRightBar = () => {
    setIsVisibleRightBar(!isVisibleRightBar);
  };

  const value = {
    toggleHideMenubar,
    onToggleHideMenu,
    onToggleRightBar,
    isVisibleRightBar,
    setTheme,
    theme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
