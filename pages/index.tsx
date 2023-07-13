import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { title } from "process";

import { useContext } from "react";
import ProductList from "../components/ProductList";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { homedir } from "os";
import Link from "next/link";

interface HomeProps {
  home: {
    heroLink: string;
    heroText: string;
    heroTitle: string;
    name: string;
    id: string;
    slug: string;
    heroBackground: {
      width: number;
      url: string;
      height: number;
    };
  }
}

const Home: NextPage<HomeProps> = ({ home }) => {
  


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dumb Funny</title>
        <link rel="icon" href="/dumbfunny-favi.png" />
      </Head>

      <p className="font-spacemono pb-6">{home.heroText}</p>
      <Link className="text-emerald-500 shop hover:text-black p-3" href="/store">shop</Link>

      
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
 

  return {
    props: {
      home
    },
  };
}

export default Home;
