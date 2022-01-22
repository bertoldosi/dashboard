import { AppProvider } from "../contexts/AppProvider";
import GlobalStyle from "../styles/globalStyles";
import Theme from "../themes";

import { Container, Content } from "./style";

import Header from "../components/containers/Header";
import Sidebar from "../components/containers/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <AppProvider initialData={pageProps?.initialData}>
        <Container>
          <Header />
          <Content>
            <Sidebar />
            <Component {...pageProps} />
          </Content>
        </Container>
      </AppProvider>
    </Theme>
  );
}

export default MyApp;
