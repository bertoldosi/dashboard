import "../styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

import Head from "next/head";

import styles from "./styles.module.scss";

import Header from "../components/containers/Header";
import Sidebar from "../components/containers/Sidebar";

const Html = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossOrigin="anonymous"
    />
  </Head>
);

function MyApp({ Component, pageProps }) {
  return (
    <main className={styles.Main}>
      <Sidebar />
      <div className={styles.MainContainer}>
        <Html />
        <Header />
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
