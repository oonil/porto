// import "tailwindcss/tailwind.css";
import "../styles/globals.css"; //have tailwind in this

import Layout from "./layout";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //if there is error in something we will show this _error page
  if (router.route == "/_error") {
    return <Component {...pageProps} />;
  }

  //only return if not in _error page
  return (
    // <Layout>
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
    // </Layout>
  );
}

export default MyApp;
