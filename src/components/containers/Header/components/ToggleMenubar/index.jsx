import React from "react";
import { StyleToggleHideMenu } from "./styles";

function ToggleMenubar({ onToggleHideMenu }) {
  return (
    <>
      <StyleToggleHideMenu onClick={onToggleHideMenu}>
        <div />
        <div />
        <div />
      </StyleToggleHideMenu>
    </>
  );
}

export default ToggleMenubar;
