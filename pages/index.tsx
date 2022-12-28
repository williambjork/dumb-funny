import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { title } from "process";
import { DumbFunnyContext } from "../context/DumbFunnyContext";
import { useContext } from "react";
import ProductList from "../components/ProductList";

const Home: NextPage = () => {
  const {  products } = useContext(DumbFunnyContext);

  console.log( products);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Home</p>

      
    </div>
  );
};

export default Home;
