import Router from "next/router";
import NProgress from "nprogress";
import { QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";

import Head from "next/head";
import Layout from "@/components/layouts/Layout";

import "../../styles/globals.css";
import "../../styles/nprogress.css";
import queryClient from "@/lib/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <meta name="theme-color" content="#041e42" />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
      </Head>

      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
