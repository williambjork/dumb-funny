import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const colors = ["pink-500", "red-500", "emerald-500", "cyan-500"];

export default function Product({ product }) {
  const [color, setColor] = useState();

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  console.log(product);
  console.log(product.categories.name);
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={`${product.title} is dumb funny`} />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 ml-20 mr-12">

        <p>{product.categories.name}</p>
        <div
          className="col-start-1 justify-center m-auto
                      "
        >
          <Image  src={product.image.url} height={500} width={500} />
        </div>
        <div className="col-start-2 mt-32 ml-12">
          <h1
            className={`text-xl font-spacemono font-bold m-auto`}
          >
            {product.title}
          </h1>

          <div className="font-inconsolata mt-1 underline">
            <Link href="" className={`hover:text-${color}`}>
              {product.brand}
            </Link>
          </div>

          <div
            className="mt-5 max-w-sm font-inconsolata"
            dangerouslySetInnerHTML={{
              __html: product.description.html,
            }}
          />

          <div className={`font-spacemono slashed-zero mt-5`}>
            <p>${product.price}</p>
          </div>

          <div>
            <button
              className={`snipcart-add-item 
                              font-spacemono  border-2 mt-2 py-1 px-2 border-emerald-500
                              hover:cursor-cell hover:bg-emerald-500 hover:text-white border-dashed`}
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-image={product.image.url}
              data-item-name={product.title}
            >
              Add to cart
            </button>
          </div>
          <div className="border-b border-black mt-8 max-w-xs"></div>

            <div className="flex gap-3 mt-4 font-syne cursor-pointer">
              <p className="border border-black rounded-full p-1 px-3
                            hover:bg-black hover:text-white">XS</p>
              <p className="border border-black rounded-full p-1 px-3
                            hover:bg-black hover:text-white">S</p>
              <p className="border border-black rounded-full p-1 px-3
                            hover:bg-black hover:text-white">M</p>
              <p className="border border-black rounded-full p-1 px-3
                            hover:bg-black hover:text-white">L</p>
              <p className="border border-black rounded-full p-1 px-3
                            hover:bg-black hover:text-white">XXL</p>
            </div>
        </div>
      </div>
    </>
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
          categories {
            name
            slug
          }
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
