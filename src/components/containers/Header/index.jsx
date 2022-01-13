import { ToggleBar } from "./components";

import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.Container}>
      <div className={styles.ContainerLogo} />

      <div className={styles.ContainerHeader}>
        <div className={styles.ContainerHeaderLeft}>
          <ToggleBar />
        </div>
        <div className={styles.ContainerHeaderRigth}></div>
      </div>
    </header>
  );
}

export default Header;
