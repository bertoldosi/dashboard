import React from "react";
import { ThemeProvider } from "styled-components";
import { variables } from "./dark";

const Theme = ({ children }) => (
  <ThemeProvider theme={variables}>{children}</ThemeProvider>
);

export default Theme;
