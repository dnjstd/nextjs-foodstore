import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import Footer from "../src/component/Footer";
import Header from "../src/component/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>AWESOME FOOD STORE</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
