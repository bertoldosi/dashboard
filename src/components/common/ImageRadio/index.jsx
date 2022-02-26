import Image from "next/image";
import { StyleContainer } from "./styles";

function ImageRadio({ src, height, width, alt }) {
  return (
    <StyleContainer>
      <Image src={src} height={height} width={width} alt={alt} />
    </StyleContainer>
  );
}

export default ImageRadio;
