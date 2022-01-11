import React from "react";
import styles from "./styles.module.scss";
import itemsSidebar from "./items";
import { ItemSidebar } from "./components";

const iconChevronDown = "bi bi-chevron-down";
const iconChevronUp = "bi bi-chevron-up";

function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <header className={styles.SidebarHeader}>Veltrix</header>

      <ul className={styles.SidebarContent}>
        {itemsSidebar.map((item, key) => (
          <ItemSidebar item={item} key={key} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
