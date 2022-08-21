import React from "react";
import { Sinput } from "./styles";

function InputTable({ value }) {
  const [inputValue, setInputValue] = React.useState(value);

  return (
    <Sinput
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}

export default InputTable;
