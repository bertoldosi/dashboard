import React, { useContext } from "react";
import { useRouter } from "next/router";
import itemsSidebar from "./itemsSidebar";
import { AppContext } from "../../../contexts/AppProvider";
import useListaSidebar from "../../../hooks/useListaSidebar";

import {
  StyleContainer,
  StyleTitle,
  StyleMenuTitle,
  StyleSubMenu,
} from "./styles";

import { BsChevronDown, BsChevronUp } from "../../../icons";

function Sidebar() {
  const router = useRouter();
  const [listaSidebar, submenusExpanded] = useListaSidebar(itemsSidebar);
  const { toggleHideMenubar } = useContext(AppContext);

  const redirectPage = (href) => {
    router.push(href);
  };

  const RenderMenuTitle = ({ firstIcon, title, isSubmenus, showSubmenus }) => (
    <>
      {firstIcon}
      <span>{title}</span>
      {isSubmenus && (showSubmenus ? <BsChevronUp /> : <BsChevronDown />)}
    </>
  );

  const RenderSubmenu = ({ submenu }) => (
    <StyleSubMenu>
      <li>
        <a href={submenu.href}>{submenu.title}</a>
      </li>
    </StyleSubMenu>
  );

  const RenderMenu = ({ menu }) => (
    <ul>
      <StyleMenuTitle
        onClick={() =>
          menu.isSubmenus ? submenusExpanded(menu.id) : redirectPage(menu?.href)
        }
      >
        <RenderMenuTitle
          title={menu.title}
          isSubmenus={menu.isSubmenus}
          showSubmenus={menu.showSubmenus}
          firstIcon={menu.icon}
        />
      </StyleMenuTitle>

      {menu.showSubmenus &&
        menu.submenus.map((submenu) => (
          <RenderSubmenu key={submenu.title} submenu={submenu} />
        ))}
    </ul>
  );

  return (
    <StyleContainer hideSidebar={toggleHideMenubar}>
      {listaSidebar.map(({ menus, title }) => (
        <ul key={title}>
          <StyleTitle>{title}</StyleTitle>
          {menus.map((menu) => (
            <RenderMenu menu={menu} key={menu.id} />
          ))}
        </ul>
      ))}
    </StyleContainer>
  );
}

export default Sidebar;
