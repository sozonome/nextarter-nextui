import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import Layout from "lib/layout";
import { customTheme } from "lib/styles/theme";
import "lib/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
