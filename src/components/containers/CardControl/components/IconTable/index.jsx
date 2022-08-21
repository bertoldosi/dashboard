import React from "react";

import { Scontent } from "./styles";

import { BsChevronDown, BsChevronUp } from "@Icons";

function IconTable({ item, submenusExpanded }) {
  return item.showSubmenus ? (
    <Scontent>
      <BsChevronUp
        className="BsChevronUp"
        onClick={() => {
          submenusExpanded(item.id);
        }}
      />{" "}
      {item.institution}
    </Scontent>
  ) : (
    <Scontent>
      <BsChevronDown
        className="BsChevronDown"
        onClick={() => {
          submenusExpanded(item.id);
        }}
      />{" "}
      {item.institution}
    </Scontent>
  );
}

export default IconTable;
