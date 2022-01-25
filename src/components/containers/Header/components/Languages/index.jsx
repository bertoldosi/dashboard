import Image from "next/image";
import { StyleLanguages } from "./styles";

import italia from "../../../../../assets/img/italia.png";
import eua from "../../../../../assets/img/us_flag.jpg";
import br from "../../../../../assets/img/br.jpg";

export const LanguagesContent = () => {
  return (
    <StyleLanguages>
      <li>
        <Image src={eua} height={17} width={25} alt="pt-br" />
        <a href="http://">English</a>
      </li>

      <li>
        <Image src={italia} height={17} width={25} alt="pt-br" />
        <a href="http://">Italian</a>
      </li>
    </StyleLanguages>
  );
};

export const LanguagesHeader = () => (
  <>
    <Image src={br} height={17} width={25} alt="eua" />
    <span>Português</span>
  </>
);
