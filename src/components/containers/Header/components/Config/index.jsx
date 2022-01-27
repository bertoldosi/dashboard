import { useContext } from "react";
import { Container } from "./styles";
import { AppContext } from "@Contexts/AppProvider";

import { BsGear } from "@Icons";

export const Config = () => {
  const { onToggleRightBar } = useContext(AppContext);

  return (
    <Container onClick={onToggleRightBar}>
      <BsGear cursor="pointer" size={20} />
    </Container>
  );
};
