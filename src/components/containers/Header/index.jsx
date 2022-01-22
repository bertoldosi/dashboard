import { useContext } from "react";

import ToggleMenubar from "./components/ToggleMenubar";
import { AppContext } from "../../../contexts/AppProvider";

import {
  StyleContainer,
  StyleContainerLogo,
  StyleMenuBar,
  StyleMenuContent,
} from "./style";

function Header() {
  const { onToggleHideMenu } = useContext(AppContext);

  return (
    <StyleContainer>
      <StyleContainerLogo>VELTRIX</StyleContainerLogo>

      <StyleMenuBar>
        <ToggleMenubar onToggleHideMenu={onToggleHideMenu} />
        <StyleMenuContent />
      </StyleMenuBar>
    </StyleContainer>
  );
}

export default Header;
