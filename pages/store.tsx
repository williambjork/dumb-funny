import React from "react";
import ProductList from "../components/ProductList";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export default function store({ products }) {
  return (
    <div className="">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <ProductList products={products} />
      </main>
    </div>
  );
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache(),
  });

  
  const data = await client.query({
    query: gql`
    query ProductsQuery {
      products {
        brand
        price
        title
        slug
        image {
          url
        }
      }
    }
    
    `
  });

  
  
  const products = data.data.product;
  

  return {
    props: {
      products,
    },
  }; 
}