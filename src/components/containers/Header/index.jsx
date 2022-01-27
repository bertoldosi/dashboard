import { useContext } from "react";

import { AppContext } from "@Contexts/AppProvider";
import Dropdown from "@Common/Dropdown";
import br from "@Assets/img/br.jpg";
import Image from "next/image";

import {
  ToggleMenubar,
  HederProfile,
  ProfileContent,
  LanguagesContent,
  Search,
  Config,
} from "./components";

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
          <Dropdown
            hideChevronIcon
            icon={<HederProfile />}
            elements={<ProfileContent />}
          />

          <Config />
        </StyleMenuContent>
      </StyleMenuBar>
    </StyleContainer>
  );
}

export default Header;
