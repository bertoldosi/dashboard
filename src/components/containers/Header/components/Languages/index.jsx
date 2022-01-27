import Image from "next/image";
import { StyleLanguagesContent } from "./styles";

import italia from "@Assets/img/italia.png";
import eua from "@Assets/img/us_flag.jpg";

export const LanguagesContent = () => {
  return (
    <StyleLanguagesContent>
      <li>
        <Image src={eua} height={17} width={25} alt="pt-br" />
        <a href="http://">English</a>
      </li>

      <li>
        <Image src={italia} height={17} width={25} alt="pt-br" />
        <a href="http://">Italian</a>
      </li>
    </StyleLanguagesContent>
  );
};
