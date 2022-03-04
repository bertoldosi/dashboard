import CardItem from "@Common/CardItem";
import {
  StyleContainer,
  StyleCard,
} from "./styles";

import cardItems from "./cardItems";

function Dashboard() {
  return (
    <StyleContainer>
      <StyleCard>
        {cardItems.map(({ title, value, valueTag, colorTag }) => (
          <CardItem
            key={title}
            title={title}
            value={value}
            valueTag={valueTag}
            colorTag={colorTag}
          />
        ))}
      </StyleCard>
    </StyleContainer>
  );
}

export default Dashboard;
