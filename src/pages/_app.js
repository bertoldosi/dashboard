import GlobalStyle from "../styles/globalStyles";
import Theme from "../themes";
import { Container } from "./style";

import { AppProvider } from "@Contexts/AppProvider";
import Sidebar from "@Containers/Sidebar";
import Header from "@Containers/Header";
import RightBar from "@Containers/RightBar";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider initialData={pageProps?.initialData}>
      <Theme>
        <GlobalStyle />
        <main>
          <Header />
          <Container>
            <Sidebar />
            <Component {...pageProps} />
            <RightBar />
          </Container>
        </main>
      </Theme>
    </AppProvider>
  );
}

export default MyApp;
