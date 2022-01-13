import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../../contexts/AppProvider";

import { ItemSidebar } from "./components";
import itemsSidebar from "./items";

function Sidebar() {
  const { showSidebar } = useContext(AppContext);

  return (
    <aside className={showSidebar ? styles.SidebarShow : styles.Sidebar}>
      <ul className={styles.SidebarContent}>
        {itemsSidebar.map((item, key) => (
          <ItemSidebar item={item} key={key} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
