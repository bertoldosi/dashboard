import { MenuSidebar } from "../../components";

import styles from "./styles.module.scss";

export const ItemSidebar = ({ item }) => {
  return (
    <div className={styles.Menu}>
      <li className={styles.MenuTitle}>{item.label}</li>

      {item.menus.map((menu) => (
        <MenuSidebar key={menu.id} menu={menu} />
      ))}
    </div>
  );
};
