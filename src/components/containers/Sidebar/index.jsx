import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../../contexts/AppProvider";

import {
  StyleContainer,
  StyleTitle,
  StyleMenuTitle,
  StyleSubMenu,
} from "./styles";

import {
  BsChevronDown,
  BsChevronUp,
  BsEnvelope,
  BsCalendar,
  BsGraphUp,
} from "react-icons/bs";

const sidebar = [
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
];

function Sidebar() {
  const router = useRouter();
  const { toggleHideMenubar } = useContext(AppContext);

  const [dataSidebar, setDataSidebar] = React.useState(
    sidebar.map((item) => {
      return {
        ...item,
        showTitle: false,
        showSubmenus: false,
        isSubmenus: item.submenus.length > 0,
      };
    })
  );

  const submenusExpanded = (itemId) => {
    setDataSidebar(
      dataSidebar.map((item) => {
        if (itemId === item.id) {
          return { ...item, showSubmenus: !item.showSubmenus };
        } else {
          return item;
        }
      })
    );
  };

  const redirectPage = (href) => {
    router.push(href);
  };

  return (
    <StyleContainer hideSidebar={toggleHideMenubar}>
      <StyleTitle>Main</StyleTitle>

      {dataSidebar.map((item) => (
        <ul key={item.id}>
          <StyleMenuTitle
            onClick={() =>
              item.isSubmenus
                ? submenusExpanded(item.id)
                : redirectPage(item?.href)
            }
          >
            {item.icon}
            <span>{item.title}</span>
            {item.isSubmenus &&
              (item.showSubmenus ? <BsChevronUp /> : <BsChevronDown />)}
          </StyleMenuTitle>

          {item.showSubmenus &&
            item.submenus.map((submenu) => (
              <StyleSubMenu key={submenu.title}>
                <li>
                  <a href="">{submenu.title}</a>
                </li>
              </StyleSubMenu>
            ))}
        </ul>
      ))}
    </StyleContainer>
  );
}

export default Sidebar;
