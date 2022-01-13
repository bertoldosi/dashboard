import React from "react";
import styles from "./styles.module.scss";

const iconChevronDown = "bi bi-chevron-down";
const iconChevronUp = "bi bi-chevron-up";

export const MenuSidebar = ({ menu }) => {
  const [menuToggle, setMenuTogggle] = React.useState({
    lastIcon: iconChevronDown,
    openSubMenu: false,
  });

  const toggleSubMenu = (menu) => {
    if (menu.sub_menus.length > 0) {
      setMenuTogggle({
        ...menu,
        openSubMenu: !menuToggle.openSubMenu,
      });
    }
  };
  return (
    <li key={menu.id} className={styles.Item}>
      <a
        className={styles.ItemTag}
        onClick={() => {
          toggleSubMenu(menu);
        }}
      >
        <i className={menu.icon}>
          <span>{menu.label}</span>
        </i>
        {menu.sub_menus.length > 0 && (
          <i
            className={menuToggle.openSubMenu ? iconChevronUp : iconChevronDown}
          />
        )}
      </a>

      <ul
        className={
          menuToggle.openSubMenu ? styles.ItemSubMenuActive : styles.ItemSubMenu
        }
      >
        {menu.sub_menus.map((subMenu, index) => (
          <li key={index}>
            <a href={subMenu.href}>{subMenu.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};
