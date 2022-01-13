import { useContext } from "react";
import { AppContext } from "../../../../../contexts/AppProvider";

import styles from "./styles.module.scss";

export const ToggleBar = () => {
  const { showSidebar, setShowSidebar } = useContext(AppContext);

  const handleOnSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={styles.Container} onClick={handleOnSidebar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
