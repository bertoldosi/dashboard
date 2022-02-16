/* eslint-disable import/no-anonymous-default-export */
import {
  BiPieChart,
  BsGraphUp,
  BsHouseDoor,
  BsBoxSeam,
  BiStats,
  BiSpreadsheet,
  BiMessageDetail,
} from "@Icons";

export default [
  {
    title: "containers",
    id: "containers",
    menus: [
      {
        id: "dashboard",
        title: "Dashboard",
        href: "/",
        icon: <BsHouseDoor />,
        submenus: [],
      },
      {
        id: "chart",
        title: "Chart",
        icon: <BsGraphUp />,
        href: "/chart",
        submenus: [],
      },
      {
        id: "salesReport",
        title: "Sales Report",
        icon: <BiPieChart />,
        href: "/sales-report",
        submenus: [],
      },
      {
        id: "activity",
        title: "Activity",
        icon: <BiStats />,
        href: "/activity",
        submenus: [],
      },
      {
        id: "table",
        title: "Table",
        icon: <BiSpreadsheet />,
        href: "/table",
        submenus: [],
      },
      {
        id: "chat",
        title: "Chat",
        icon: <BiMessageDetail />,
        href: "/chat",
        submenus: [],
      },
    ],
  },

  {
    title: "small components",
    id: "components",
    menus: [
      {
        id: "uielements",
        title: "UI Elements",
        icon: <BsBoxSeam />,
        submenus: [
          { title: "Check-out", href: "/checkout" },
          { title: "Comment", href: "/comment" },
        ],
      },
    ],
  },
];
