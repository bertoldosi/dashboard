/* eslint-disable import/no-anonymous-default-export */
import { BsEnvelope, BsGraphUp, BsCalendar4, BsBoxSeam } from "../../../icons";

export default [
  {
    title: "main",
    id: "main",
    menus: [
      {
        id: "dashboard",
        title: "Dashboard",
        href: "/",
        icon: <BsGraphUp />,
        submenus: [],
      },
      {
        id: "calendar",
        title: "Calendar",
        icon: <BsCalendar4 />,
        href: "/page",
        submenus: [],
      },
      {
        id: "email",
        title: "Email",
        icon: <BsEnvelope />,
        submenus: [
          { title: "Inbox", href: "inbox" },
          { title: "Email Read", href: "emailread" },
          { title: "Chat Compose", href: "chatcompose" },
        ],
      },
    ],
  },

  {
    title: "components",
    id: "components",
    menus: [
      {
        id: "uielements",
        title: "UI Elements",
        icon: <BsBoxSeam />,
        submenus: [
          { title: "Elementos 01", href: "/element01" },
          { title: "Elementos 02", href: "/element02" },
          { title: "Elementos 03", href: "/element03" },
        ],
      },
    ],
  },
];
