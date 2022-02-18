import React, { useContext } from "react";
import { useRouter } from "next/router";
import itemsSidebar from "./itemsSidebar";

import useListaSidebar from "@Hooks/useListaSidebar";
import { AppContext } from "@Contexts/AppProvider";

import {
  StyleContainer,
  StyleTitle,
  StyleMenuTitle,
  StyleSubMenu,
} from "./styles";

import { BsChevronDown, BsChevronUp } from "@Icons";

function Sidebar() {
  const router = useRouter();
  const [listaSidebar, submenusExpanded] = useListaSidebar(itemsSidebar);
  const { toggleHideMenubar } = useContext(AppContext);
  const [pathName, setPathName] = React.useState(() => {
    if (typeof window !== "undefined") {
      window.location.pathname;
    }
  });

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
        isActive={pathName === menu?.href}
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

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setPathName(window.location.pathname);
      console.log(pathName);
    }
  }, [typeof window !== "undefined" && window.location.pathname, pathName]);

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
