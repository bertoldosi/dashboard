import { useContext } from "react";

import { AppContext } from "@Contexts/AppProvider";
import Dropdown from "@Common/Dropdown";
import Image from "next/image";
import br from "@Assets/img/br.jpg";

import {
  ToggleMenubar,
  HederProfile,
  ProfileContent,
  LanguagesContent,
  FullScreen,
  Search,
} from "./components";

import { BsGear } from "@Icons";

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
            label="Português"
            icon={<Image src={br} height={17} width={25} alt="eua" />}
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
