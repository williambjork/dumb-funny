import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { SnipcartProvider } from 'use-snipcart';
import NavBar from "../components/Footer/Footer";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {


  

  return (
    <div className="">
      <SnipcartProvider>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </SnipcartProvider>
      
    </div>
  );
}

export default MyApp;
