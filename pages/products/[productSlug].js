import React from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  console.log(product);
  return (
    
    <div className="grid grid-cols-2 mt-20 ml-20 mr-12">
      <div className="col-start-1 justify-center m-auto">
        <Image src={product.image.url} height={500} width={500} />
      </div>
      <div className="col-start-2 mt-32 ml-12">
        <h1 className="text-xl font-spacemono font-bold m-auto">
          {product.title}
        </h1>

        <div className="font-inconsolata mt-1 underline">
          <Link href="" className="hover:text-pink-500">{product.brand}</Link>
        </div>

        <div className="mt-5" dangerouslySetInnerHTML={{
          __html: product.description.html
        }} />

        <div className="font-spacemono mt-5">
          <p>${product.price}</p>
        </div>

        <div>
          <button className="font-spacemono  border-2 mt-3 py-1 px-2 border-black
                             hover:bg-black hover:text-white border-dashed">Add to cart</button>
        </div>
        <div className="border-b border-black mt-10 max-w-xs"></div>
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
        products(first: 999) {
          price
          slug
          title
          brand
        }
      }
    `,
  });

  console.log("data", data.slug);

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

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageProduct($slug: String) {
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
