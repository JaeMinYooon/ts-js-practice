import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
      </Head>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
