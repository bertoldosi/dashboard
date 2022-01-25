import { useContext } from "react";

import { AppContext } from "@Contexts/AppProvider";
import Dropdown from "@Common/Dropdown";
import Search from "@Common/Search";

import {
  ToggleMenubar,
  HederProfile,
  ProfileContent,
  LanguagesContent,
  LanguagesHeader,
  FullScreen,
} from "./components";

import { BsGear } from "../../../icons";

import {
  StyleContainer,
  StyleContainerLogo,
  StyleMenuBar,
  StyleMenuContent,
} from "./style";

function Header() {
  const { onToggleHideMenu, onToggleRightBar } = useContext(AppContext);

  return (
    <StyleContainer>
      <StyleContainerLogo />

      <StyleMenuBar>
        <ToggleMenubar onToggleHideMenu={onToggleHideMenu} />

        <StyleMenuContent>
          <Search />
          <Dropdown
            header={<LanguagesHeader />}
            elements={<LanguagesContent />}
          />
          <FullScreen />
          <Dropdown
            hideChevronIcon
            header={<HederProfile />}
            elements={<ProfileContent />}
          />
          <BsGear cursor="pointer" size={20} onClick={onToggleRightBar} />
        </StyleMenuContent>
      </StyleMenuBar>
    </StyleContainer>
  );
}

export default Header;
