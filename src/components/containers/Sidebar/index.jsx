import React, { useContext } from "react";
import { useRouter } from "next/router";
import itemsSidebar from "./itemsSidebar";
import { AppContext } from "../../../contexts/AppProvider";

import {
  StyleContainer,
  StyleTitle,
  StyleMenuTitle,
  StyleSubMenu,
} from "./styles";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Sidebar() {
  const router = useRouter();
  const { toggleHideMenubar } = useContext(AppContext);

  const [dataSidebar, setDataSidebar] = React.useState(
    itemsSidebar.map((item) => {
      return {
        ...item,
        menus: item.menus.map((menu) => ({
          ...menu,
          showTitle: false,
          showSubmenus: false,
          isSubmenus: menu.submenus.length > 0,
        })),
      };
    })
  );

  const submenusExpanded = (itemId) => {
    setDataSidebar(
      dataSidebar.map((item) => {
        return {
          ...item,
          menus: item.menus.map((menu) => {
            if (itemId === menu.id) {
              return { ...menu, showSubmenus: !menu.showSubmenus };
            } else {
              return menu;
            }
          }),
        };
      })
    );
  };

  const redirectPage = (href) => {
    router.push(href);
  };

  return (
    <StyleContainer hideSidebar={toggleHideMenubar}>
      {dataSidebar.map(({ menus, title }) => (
        <ul key={title}>
          <StyleTitle>{title}</StyleTitle>
          {menus.map((menu) => (
            <ul key={menu.id}>
              <StyleMenuTitle
                onClick={() =>
                  menu.isSubmenus
                    ? submenusExpanded(menu.id)
                    : redirectPage(menu?.href)
                }
              >
                {menu.icon}
                <span>{menu.title}</span>
                {menu.isSubmenus &&
                  (menu.showSubmenus ? <BsChevronUp /> : <BsChevronDown />)}
              </StyleMenuTitle>

              {menu.showSubmenus &&
                menu.submenus.map((submenu) => (
                  <StyleSubMenu key={submenu.title}>
                    <li>
                      <a href="#">{submenu.title}</a>
                    </li>
                  </StyleSubMenu>
                ))}
            </ul>
          ))}
        </ul>
      ))}
    </StyleContainer>
  );
}

export default Sidebar;
