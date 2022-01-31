import CardItem from "@Common/CardItem";
import { Container } from "./styles";

import {
  BiDownArrowAlt,
  BiReceipt,
  BiRightArrowAlt,
  BiUpArrowAlt,
} from "react-icons/bi";

function Dashboard() {
  return (
    <Container>
      <CardItem
        title="ORDERS"
        icon={<BiReceipt size={20} />}
        value="1,685"
        valueTag="+12"
        colorTag="#02A499"
      />

      <CardItem
        title="REVENUE"
        icon={<BiReceipt size={20} />}
        value="52,368"
        valueTag="-12"
        colorTag="#EC4561"
      />

      <CardItem
        title="AVERAGE PRICE"
        icon={<BiReceipt size={20} />}
        value="15,8"
        valueTag="00"
        colorTag="#38A4F8"
      />

      <CardItem
        title="PRODUCT SOLD"
        icon={<BiReceipt size={20} />}
        value="2436"
        valueTag="+84"
        colorTag="#F8B425"
      />
    </Container>
  );
}

export default Dashboard;
