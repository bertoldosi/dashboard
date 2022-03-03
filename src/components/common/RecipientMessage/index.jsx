import ImageRadio from "@Common/ImageRadio";
import {
  StyleRecipient,
  StyleRecipientBody,
  StyleRecipientHeader,
} from "./styles";

function RecipientMessage({
  nameRecipient,
  timeRecipient,
  photoRecipient,
  messegeRecipient,
}) {
  return (
    <StyleRecipient>
      <StyleRecipientBody>
        <span>{nameRecipient}</span>
        <p>{messegeRecipient}</p>
      </StyleRecipientBody>

      <StyleRecipientHeader>
        <ImageRadio
          src={photoRecipient}
          height={35}
          width={35}
          alt="Photo to profile"
        />
        <span>{timeRecipient}</span>
      </StyleRecipientHeader>
    </StyleRecipient>
  );
}

export default RecipientMessage;
