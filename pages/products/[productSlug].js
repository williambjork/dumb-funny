import React from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Product({ product }) {
  return (
    <div>
      <h1>Product!!!</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageProducts {
        products {
          brand
          price
          slug
          title
        }
      }
    `,
  });

  console.log('data', data)

  const paths = data.data.products.map((product) => {
    return {
      params: {
        productSlug: product.slug,
      },
    };
  });

 

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache(),
  });

  
  const data = await client.query({
    query: gql`
      query PageProduct($slug: String){
        product(where: { slug: $slug }) {
          id
          
          name
          price
          slug
          description {
            html
          }
        }
      }
    
    `,
    variables: {
      slug: params.productSlug,
    },
  });

  console.log("params",);

  const product = data.data.product;

  return {
    props: {
      product,
    },
  }; 
}
