import styles from "./styles.module.scss";

export const MenuSidebar = ({ menu }) => {
  return (
    <li key={menu.id} className={styles.Item}>
      <a className={styles.ItemTag} onClick={() => showMenus(menu.id)}>
        <i className={menu.icon}>
          <span>{menu.label}</span>
        </i>
        <i className={menu.icon}></i>
      </a>

      <ul className={styles.ItemSubMenu}>
        {menu.sub_menus.map((subMenu, index) => (
          <li key={index}>
            <a href={subMenu.href}>{subMenu.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};
