import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav/Nav";
import { DumbFunnyProvider } from "../context/DumbFunnyContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <DumbFunnyProvider>
        <Nav />
        <Component {...pageProps} />
        
      </DumbFunnyProvider>
    </div>
  );
}

export default MyApp;
