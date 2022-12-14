import Router from "next/router";
import NProgress from "nprogress";
import client from "@/apollo-client";
import { ApolloProvider } from "@apollo/client";

import type { AppProps } from "next/app";

import Head from "next/head";
import Layout from "@/components/layouts/Layout";

import "../../styles/globals.css";
import "../../styles/nprogress.css";

//////////////////////////////////

//--------------NProgress-----------
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//////////////////////

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Ovamann</title>
        <meta
          name="description"
          content="Ovamann Pumps Limited is a technology-driven Organization that specializes in the sales, distribution, installation, and maintenance of all forms of pumps..."
        />
        {/* <meta property="og:image" content="%PUBLIC_URL%/image_path" /> */}
        <meta property="og:title" content="Ovamann" />
        <meta property="og:site_name" content="Ovamann" />
        <meta
          property="og:description"
          content="Ovamann Pumps Limited is a technology-driven Organization that specializes in the sales, distribution, installation, and maintenance of all forms of pumps..."
        />
        <meta name="theme-color" content="#08408D" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ovamann-favico.png"
        />
      </Head>

      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
