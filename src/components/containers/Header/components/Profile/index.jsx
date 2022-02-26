import { StyleProfile } from "./styles";

import { BsPersonCircle, GiExitDoor } from "@Icons";
import profile from "@Assets/img/perfil.jpg";
import ImageRadio from "@Common/ImageRadio";

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
  <ImageRadio src={profile} height={30} width={30} alt="Photo to profile" />
);
