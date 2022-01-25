import React from "react";
import { StyleToggleHideMenu, StyleToggleHideMenuVisible } from "./styles";

export const ToggleMenubar = ({ onToggleHideMenu }) => (
  <>
    <StyleToggleHideMenu onClick={onToggleHideMenu}>
      <div />
      <div />
      <div />
    </StyleToggleHideMenu>

    <StyleToggleHideMenuVisible>
      <div />
      <div />
      <div />
    </StyleToggleHideMenuVisible>
  </>
);
