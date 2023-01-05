import React from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";

export default function Product({ product }) {

  console.log(product)
  return (
    <div>
      <h1 className="text-xl font-bold m-auto">{product.title}</h1>
      <h2>{product.brand}</h2>
      <p>${product.price}</p>
      <Image src={product.image.url} height={product.image.height} width={product.image.width}/>
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

  console.log('data', data.slug)

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
          title
          brand
          price
          slug
          description {
            html
          }
          image {
            url
            width
            height
          }
        }
      }
    
    `,
    variables: {
      slug: params.productSlug,
    },
  });

  console.log("params", params);

  const product = data.data.product;

  return {
    props: {
      product,
    },
  }; 
}
