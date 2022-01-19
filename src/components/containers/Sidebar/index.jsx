import React /*{ useContext }*/ from "react";
// import { AppContext } from "../../../contexts/AppProvider";

import { Container, Title, MenuTitle, MenuSub } from "./style";

import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";

function Sidebar() {
  // const { showSidebar } = useContext(AppContext);

  return (
    <Container>
      <Title>Main</Title>

      <ul>
        <MenuTitle href="#">
          <AiOutlineHome />
          <span>Email</span>
        </MenuTitle>

        <MenuSub id="teste">
          <li>
            <a href="email-inbox.html">Inbox</a>
          </li>
          <li>
            <a href="email-read.html">Email Read</a>
          </li>
          <li>
            <a href="email-compose.html">Email Compose</a>
          </li>
        </MenuSub>
      </ul>

      {/* <ul>
        <MenuTitle href="#">
          <AiOutlineMail />
          <span>Email</span>
        </MenuTitle>

        <MenuSub id="teste">
          <li>
            <a href="email-inbox.html">1</a>
          </li>
          <li>
            <a href="email-read.html">2</a>
          </li>
          <li>
            <a href="email-compose.html">3</a>
          </li>
        </MenuSub>
      </ul> */}
    </Container>
  );
}

export default Sidebar;
