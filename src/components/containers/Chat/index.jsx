import Card from "@Common/Card";

import { StyleContainer, StyleInputMessege, StyleMessege } from "./styles";
import SenderMessage from "@Common/SenderMessage";
import RecipientMessage from "@Common/RecipientMessage";
import sender from "@Assets/img/perfil.jpg";
import recipient from "@Assets/img/recipient.jpg";

function Chat() {
  return (
    <StyleContainer>
      <Card title="Chat">
        <StyleMessege>
          <SenderMessage
            nameSender="Matheus"
            timeSender="10:01"
            photoSender={sender}
            messegeSender="Olá!"
          />
          <RecipientMessage
            nameRecipient="Fran"
            timeRecipient="10:02"
            photoRecipient={recipient}
            messegeRecipient="Olá! Tudo bem ?"
          />
          <SenderMessage
            nameSender="Matheus"
            timeSender="10:03"
            photoSender={sender}
            messegeSender="Tudo ótimo! E com você ?"
          />
          <SenderMessage
            nameSender="Matheus"
            timeSender="10:04"
            photoSender={sender}
            messegeSender="Me tira uma dúvida ?"
          />
          <RecipientMessage
            nameRecipient="Fran"
            timeRecipient="10:05"
            photoRecipient={recipient}
            messegeRecipient="Que bom! Tiro sim, pode falar."
          />
        </StyleMessege>
        <StyleInputMessege>
          <input type="text" placeholder="Enter your text" />
          <button>Send</button>
        </StyleInputMessege>
      </Card>
    </StyleContainer>
  );
}

export default Chat;
