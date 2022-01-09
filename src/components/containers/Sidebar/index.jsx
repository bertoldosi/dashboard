import styles from "./styles.module.scss";

const Menu = ({ menus }) => {};
const MenuItem = ({ menuItems }) => {};
const MenuItemSubMenu = ({ subMenus }) => {};

function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <header className={styles.SidebarHeader}>Veltrix</header>

      <ul className={styles.SidebarContent}>
        <div className={styles.SidebarContentMenu}>
          <li className={styles.SidebarContentMenuTitle}>MAIN</li>

          <li className={styles.SidebarContentMenuItem}>
            <a className={styles.ContainerMenuCardItemTag}>
              <i className="bi bi-graph-up"></i>
              <span>Dashboard</span>
              <i className="bi bi-chevron-down"></i>
            </a>
          </li>

          <li className={styles.SidebarContentMenuItem}>
            <a className={styles.ContainerMenuCardItemTag}>
              <i className="bi bi-calendar4"></i>
              <span>Calendar</span>
              <i className="bi bi-chevron-down"></i>
            </a>
          </li>

          <li className={styles.SidebarContentMenuItem}>
            <a className={styles.ContainerMenuCardItemTag}>
              <i className="bi bi-envelope"></i>
              <span>Email</span>
              <i className="bi bi-chevron-down"></i>
            </a>

            <ul className={styles.SidebarContentMenuItemSubMenu}>
              <li>
                <a href="#">Inbox</a>
              </li>
              <li>
                <a href="#">Email Read</a>
              </li>
              <li>
                <a href="#">Email Compose</a>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
