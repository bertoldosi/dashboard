import Card from "@Common/Card";
import {
  StyleContainer,
  StyleContent,
  StyleTimeLine,
  StyleLabel,
} from "./styles";

const activitys = [
  {
    title: "JAN 22",
    text: "Responded to need “Volunteer Activities”",
  },
  {
    title: "JAN 20",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui deleniti atque...Read more”",
  },
  {
    title: "JAN 19",
    text: "Joined the group “Boardsmanship Forum”",
  },
  {
    title: "JAN 17",
    text: "Responded to need “In-Kind Opportunity””",
  },
  {
    title: "JAN 16",
    text: "Sed ut perspiciatis unde omnis iste natus error sit rem.",
  },
];

function Activity() {
  return (
    <Card title="Activity">
      <StyleContainer>
        {activitys.map((activity, i) => (
          <StyleContent key={i}>
            <StyleTimeLine>
              <div />
              <div />
            </StyleTimeLine>

            <StyleLabel>
              <span>{activity.title}</span>
              <p>{activity.text}</p>
            </StyleLabel>
          </StyleContent>
        ))}
      </StyleContainer>
    </Card>
  );
}

export default Activity;
