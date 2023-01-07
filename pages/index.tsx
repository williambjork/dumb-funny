import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { title } from "process";
import { DumbFunnyContext } from "../context/DumbFunnyContext";
import { useContext } from "react";
import ProductList from "../components/ProductList";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { homedir } from "os";

const Home: NextPage = ({ home }) => {
  const {  products } = useContext(DumbFunnyContext);

  console.log( products);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dumb Funny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{home.heroText}</p>

      
    </div>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
    query PageHome {
      page(where: {slug: "home"}) {
        heroLink
        heroText
        heroTitle
        name
        id
        slug
        heroBackground {
          width
          url
          height
        }
      }
    }`
  })

  const home = data.data.page;
  console.log(home)

  return {
    props: {
      home
    },
  };
}

export default Home;
