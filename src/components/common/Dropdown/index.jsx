import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "@Icons";
import { StyleContainer, StyleElement } from "./styles";

function Dropdown({ elements, header, hideChevronIcon }) {
  const [isVisible, setIsVisible] = useState(false);

  const RenderIcon = ({ isVisible }) =>
    isVisible ? <BsChevronUp /> : <BsChevronDown />;

  return (
    <StyleContainer isVisible={isVisible}>
      <div onClick={() => setIsVisible(!isVisible)}>
        {header}
        {!hideChevronIcon && <RenderIcon isVisible={isVisible} />}
      </div>
      <StyleElement isVisible={isVisible}>{elements}</StyleElement>
    </StyleContainer>
  );
}

export default Dropdown;
