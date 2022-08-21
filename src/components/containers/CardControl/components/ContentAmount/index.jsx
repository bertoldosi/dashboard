import React from "react";
import { Scontent } from "./styles";

function ContentAmount() {
  return (
    <td colSpan={4}>
      <Scontent>
        <header>
          <span>Valor por pessoa</span>
          <span>(R$)</span>
        </header>

        <span>
          <p>matheus</p>
          <p>R$ 19,90</p>
        </span>
        <span>
          <p>matheus</p>
          <p>R$ 19,90</p>
        </span>

        <span>
          <p>matheus</p>
          <p>R$ 19,90</p>
        </span>

        <footer>
          <span>Valor total</span>
          <span>R$ 7.000,00</span>
        </footer>
      </Scontent>
    </td>
  );
}

export default ContentAmount;
