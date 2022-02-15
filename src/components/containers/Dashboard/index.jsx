import CardItem from "@Common/CardItem";
import {
  StyleContainer,
  StyleCard,
  StyleChartEarning,
  StylAnalytic,
  StyleChart,
  StyleAreaChartFillByValue,
  StyleAreaChartFillByValueLabel,
} from "./styles";

import cardItems from "./cardItems";
import { Chart } from "@Common/Chart";
import { PieChart } from "@Common/Chart";
import Card from "@Common/Card";
import AreaChartFillByValue from "@Common/AreaChartFillByValue";

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

      <StyleChart>
        <Card title="Monthly Earning">
          <StyleChartEarning>
            <Chart />
            <PieChart />
          </StyleChartEarning>
        </Card>

        <Card title="Sales Analytics">
          <StylAnalytic>
            <StyleAreaChartFillByValue>
              <StyleAreaChartFillByValueLabel>
                <span>Online</span>
                <strong>1,542</strong>
              </StyleAreaChartFillByValueLabel>

              <AreaChartFillByValue />
            </StyleAreaChartFillByValue>

            <StyleAreaChartFillByValue>
              <StyleAreaChartFillByValueLabel>
                <span>Online</span>
                <strong>1,542</strong>
              </StyleAreaChartFillByValueLabel>

              <AreaChartFillByValue />
            </StyleAreaChartFillByValue>

            <StyleAreaChartFillByValue>
              <StyleAreaChartFillByValueLabel>
                <span>Online</span>
                <strong>1,542</strong>
              </StyleAreaChartFillByValueLabel>

              <AreaChartFillByValue />
            </StyleAreaChartFillByValue>
          </StylAnalytic>
        </Card>
      </StyleChart>
    </StyleContainer>
  );
}

export default Dashboard;
