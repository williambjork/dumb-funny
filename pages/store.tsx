import React from "react";
import ProductList from "../components/ProductList";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ProductCard from "../components/ProductCard";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";

interface ProductListProps {
  products: {
    price: number;
    slug: string;
    title: string;
    brand: string;
    image: {
      url: string;
    };
  }[];
}

export default function store({ products }: ProductListProps) {
  return (
    <>
      <Head>
        <title>CONSUME!!</title>
        <meta name="description" content={`dumb funny store`} />
      </Head>

      <div className="">
        <h2 className="text-2xl flex justify-center m-auto font-bold font-spacemono mt-10 mb-6">Clothing</h2>
        <ProductList products={products} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query Products {
        products(first: 100) {
          price
          slug
          title
          brand
          image {
            url
          }
        }
      }
    `,
  });

  const products = data.data.products;

  return {
    props: {
      products,
    },
  };
}
