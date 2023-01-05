import React from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";

export default function Product({ product }) {

  console.log(product)
  return (
    <div className="">
      
      <h1 className="text-xl font-spacemono font-bold m-auto">{product.title}</h1>
      
      <div className="font-inconsolata">
       <h2>{product.brand} test testestet stuff and things and stuff</h2>
      </div>

      <div className="font-spacemono">
        <p>${product.price}</p>
      </div>
      <div className="">
        <Image src={product.image.url} height={500} width={500}/>
      </div>
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
        products (first: 999) {
          price
          slug
          title
          brand
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
          brand
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
