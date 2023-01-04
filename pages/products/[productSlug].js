
import React from 'react'

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createModuleResolutionCache } from 'typescript';

const Product = () => {



  

  return (
    <div>
      <h1>Product!!!</h1>
    </div>
  )
}

export async function getStaticProps({ params }) {
  
  return {
    props: {

    }
  }
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache()
  });

  const data = await client.query({
    query: gql`
    query PageProducts {
    products {
      brand
      id
      price
      slug
      title
      description {
        text
      }
      image {
        height
        width
        url
      }
    }
  }
    `
  });

 const paths = data.data.products.map(product => {
  return {
    params: {
      productSlug: product.slug
    }
  }
 })

 
  return {
    paths,
    fallback: false
  }
}

export default Product