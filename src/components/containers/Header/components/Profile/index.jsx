import Image from "next/image";
import { StyleProfile, StyleHederProfile } from "./styles";

import { BsPersonCircle, GiExitDoor } from "@Icons";
import perfil from "@Assets/img/perfil.jpg";

export const ProfileContent = () => {
  return (
    <StyleProfile>
      <li>
        <BsPersonCircle size={20} />
        <a href="http://">Profile</a>
      </li>

      <li>
        <GiExitDoor size={20} />
        <a href="http://">Logout</a>
      </li>
    </StyleProfile>
  );
};

export const HederProfile = () => (
  <StyleHederProfile>
    <Image src={perfil} height={30} width={30} alt="eua" />
  </StyleHederProfile>
);
