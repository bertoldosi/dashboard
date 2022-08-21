import React from "react";

function Thead({ listTitle }) {
  return (
    <thead>
      <tr>
        {listTitle.map((title, i) => (
          <th key={i}>{title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Thead;
