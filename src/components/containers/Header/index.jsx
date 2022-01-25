import { useContext } from "react";
import Image from "next/image";

import { AppContext } from "../../../contexts/AppProvider";

import {
  ToggleMenubar,
  HederProfile,
  ProfileContent,
  LanguagesContent,
  LanguagesHeader,
} from "./components";
import Dropdown from "../../common/Dropdown";
import Search from "../../common/Search";

import { BsGear } from "../../../icons";

import {
  StyleContainer,
  StyleContainerLogo,
  StyleMenuBar,
  StyleMenuContent,
} from "./style";
import FullScreen from "./components/FullScreen";

function Header() {
  const { onToggleHideMenu } = useContext(AppContext);

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
          <BsGear size={20} />
        </StyleMenuContent>
      </StyleMenuBar>
    </StyleContainer>
  );
}

export default Header;
