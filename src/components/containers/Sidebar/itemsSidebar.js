/* eslint-disable import/no-anonymous-default-export */
import { BsCalendar, BsEnvelope, BsGraphUp } from "react-icons/bs";

export default [
  {
    title: "main",
    id: "main",
    menus: [
      {
        id: "dashboard",
        title: "Dashboard",
        icon: <BsGraphUp />,
        submenus: [
          { title: "Inbox" },
          { title: "Email Read" },
          { title: "Chat Compose" },
        ],
      },

      {
        id: "email",
        title: "Email",
        icon: <BsEnvelope />,
        submenus: [
          { title: "item01" },
          { title: "item02 item" },
          { title: "item03 item item" },
        ],
      },

      {
        id: "semsub",
        title: "Sem sub",
        icon: <BsCalendar />,
        href: "/page",
        submenus: [],
      },
    ],
  },
];
