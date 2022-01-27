import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "@Icons";
import { StyleContainer, StyleContent, StyleHeader } from "./styles";

function Dropdown({ label, icon, elements, hideChevronIcon }) {
  const [isVisible, setIsVisible] = useState(false);

  const RenderIcon = ({ isVisible }) =>
    isVisible ? <BsChevronUp /> : <BsChevronDown />;

  return (
    <StyleContainer isVisible={isVisible}>
      <StyleHeader onClick={() => setIsVisible(!isVisible)}>
        {icon}
        <span>{label}</span>

        {!hideChevronIcon && <RenderIcon isVisible={isVisible} />}
      </StyleHeader>

      <StyleContent isVisible={isVisible}>{elements}</StyleContent>
    </StyleContainer>
  );
}

export default Dropdown;
