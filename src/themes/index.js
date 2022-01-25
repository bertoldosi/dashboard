import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "@Contexts/AppProvider";

import { variables as darkTheme } from "./dark";
import { variables as defaultTheme } from "./default";

const Theme = ({ children }) => {
  const { theme } = useContext(AppContext);

  if (theme === "default") {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
  } else {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
  }
};

export default Theme;
