import GlobalStyle from "../styles/globalStyles";
import Theme from "../themes";
import { Container } from "./style";

import { AppProvider } from "@Contexts/AppProvider";
import Sidebar from "@Containers/Sidebar";
import Header from "@Containers/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <AppProvider initialData={pageProps?.initialData}>
        <main>
          <Header />
          <Container>
            <Sidebar />
            <Component {...pageProps} />
          </Container>
        </main>
      </AppProvider>
    </Theme>
  );
}

export default MyApp;
