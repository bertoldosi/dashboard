import Header from "@Containers/Header";
import RightBar from "@Containers/RightBar";
import Sidebar from "@Containers/Sidebar";
import { AppProvider } from "@Contexts/AppProvider";
import GlobalStyle from "src/styles/globalStyles";
import Theme from "src/themes";
import { StyleContainer, StylePage } from "./styles";

export const Layout = ({ children }) => (
  <AppProvider>
    <Theme>
      <GlobalStyle />
      <main>
        <Header />
        <StyleContainer>
          <Sidebar />
          <StylePage>{children}</StylePage>
          <RightBar />
        </StyleContainer>
      </main>
    </Theme>
  </AppProvider>
);
