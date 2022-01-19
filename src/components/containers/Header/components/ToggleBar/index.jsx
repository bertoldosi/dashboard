import { useContext } from "react";
import { AppContext } from "../../../../../contexts/AppProvider";

import { Container, Trace } from "./style";

export const ToggleBar = () => {
  const { showSidebar, setShowSidebar } = useContext(AppContext);

  const handleOnSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container onClick={handleOnSidebar}>
      <Trace></Trace>
      <Trace></Trace>
      <Trace></Trace>
    </Container>
  );
};
