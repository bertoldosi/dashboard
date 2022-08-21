/* eslint-disable import/no-anonymous-default-export */
import {
  BsTable,
  BsHouseDoor,
  BsBoxSeam,
  BiStats,
  BiSpreadsheet,
  BiMessageDetail,
  MdTimeline,
} from "@Icons";
import { BsCartDash } from "react-icons/bs";

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
      {
        id: "timeline",
        title: "Timeline",
        icon: <MdTimeline />,
        href: "/timeline",
        submenus: [],
      },
      {
        id: "collapsibleTable",
        title: "Tabela colapsável",
        icon: <BsTable />,
        href: "/collapsible-table",
        submenus: [],
      },

      {
        id: "controlCard",
        title: "Controle de gastos",
        icon: <BsCartDash />,
        href: "/card-control",
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
        title: "100 DAYS CSS",
        icon: <BsBoxSeam />,
        submenus: [{ title: "Day 001", href: "/css-challenges/day001" }],
      },
    ],
  },
];
