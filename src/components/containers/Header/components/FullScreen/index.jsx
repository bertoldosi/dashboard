import { useState } from "react";
import { Container } from "./styles";
import { AiOutlineExpand, BiExitFullscreen } from "../../../../../icons";

export const FullScreen = () => {
  const [elem] = useState(() => {
    if (typeof window !== "undefined") {
      return window.document.documentElement;
    }
  });

  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullscreen = () => {
    setIsFullScreen(true);
    if (elem?.requestFullscreen) {
      elem?.requestFullscreen();
    } else if (elem?.webkitRequestFullscreen) {
      /* Safari */
      elem?.webkitRequestFullscreen();
    } else if (elem?.msRequestFullscreen) {
      /* IE11 */
      elem?.msRequestFullscreen();
    }
  };

  /* Close fullscreen */
  const closeFullscreen = () => {
    setIsFullScreen(false);
    if (document?.exitFullscreen) {
      document?.exitFullscreen();
    } else if (document?.webkitExitFullscreen) {
      /* Safari */
      document?.webkitExitFullscreen();
    } else if (document?.msExitFullscreen) {
      /* IE11 */
      document?.msExitFullscreen();
    }
  };

  return (
    <Container>
      {isFullScreen ? (
        <BiExitFullscreen size={20} onClick={closeFullscreen} />
      ) : (
        <AiOutlineExpand size={20} onClick={openFullscreen} />
      )}
    </Container>
  );
};
