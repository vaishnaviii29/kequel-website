import type { AppProps } from "next/app";
import "../app/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/montserrat/400.css";
import Header from "@/components/Header";

import '../app/globals.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
