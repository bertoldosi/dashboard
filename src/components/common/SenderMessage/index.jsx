import ImageRadio from "@Common/ImageRadio";
import { StyleSender, StyleSenderBody, StyleSenderHeader } from "./styles";

function SenderMessage({ nameSender, timeSender, photoSender, messegeSender }) {
  return (
    <StyleSender>
      <StyleSenderHeader>
        <ImageRadio
          src={photoSender}
          height={35}
          width={35}
          alt="Photo to profile"
        />
        <span>{timeSender}</span>
      </StyleSenderHeader>

      <StyleSenderBody>
        <span>{nameSender}</span>
        <p>{messegeSender}</p>
      </StyleSenderBody>
    </StyleSender>
  );
}

export default SenderMessage;
