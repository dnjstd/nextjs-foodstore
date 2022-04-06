import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FOOD STORE</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
