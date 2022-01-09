import styles from "./styles.module.scss";

function Sidebar() {
  return (
    <aside className={styles.Container}>
      <header>Veltrix</header>

      <section className={styles.ContainerMenu}>
        <div className={styles.ContainerMenuCard}>
          <span className={styles.ContainerMenuCardTitle}>MAIN</span>

          <ul className={styles.ContainerMenuCardItem}>
            <div className={styles.ContainerMenuCardItemTitle}>
              <i className="bi bi-graph-up"></i>
              <span>Dashboard</span>
              <i className="bi bi-chevron-down"></i>
            </div>
          </ul>

          <ul className={styles.ContainerMenuCardItem}>
            <div className={styles.ContainerMenuCardItemTitle}>
              <i className="bi bi-calendar4"></i>
              <span>Calendar</span>
              <i className="bi bi-chevron-down"></i>
            </div>
          </ul>

          <ul className={styles.ContainerMenuCardItem}>
            <div className={styles.ContainerMenuCardItemTitle}>
              <i className="bi bi-envelope"></i>
              <span>Email</span>
              <i className="bi bi-chevron-down"></i>
            </div>

            <li>
              <a>Inbox</a>
              <a>Email Read</a>
              <a>Email Compose</a>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
