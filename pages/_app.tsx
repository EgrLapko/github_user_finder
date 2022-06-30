import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/styles.css";
import { Provider } from "react-redux";

import { setupStore } from "store/store";
import Container from "components/common/Container";

function MyApp({ Component, pageProps }: AppProps) {
  const store = setupStore();
  return (
    <>
      <Head>
        <title>Github User Finder</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </Provider>
    </>
  );
}

export default MyApp;
