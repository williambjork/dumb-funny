import React from "react";
import ProductList from "../components/ProductList";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Product from "../components/Product";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function store({ products }) {
  console.log(products)
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-3">Products</h2>
      <div className="grid grid-flow-row">
      {products.map(product => (
          <div className=" m-3">
          <Product key={product.id} url={product.slug} title={product.title} image={product.image.url}  price={product.price} brand={product.brand} />
          </div>
        ))}
      </div>
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
