import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SizeButton from "../../components/SizeButton";

const colors = ["pink-500", "red-500", "emerald-500", "cyan-500"];

export default function Product({ product }) {
  const [color, setColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  /* useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []); */

  function handleClick(index, size) {
    setSelectedIndex(index);
    setSelectedSize(size);
  }

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
          <Image src={product.image.url} height={500} width={500} />
        </div>
        <div className="col-start-2 mt-32 ml-12">
          <h1 className={`text-xl font-spacemono font-bold m-auto`}>
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
              data-item-custom2-name="Size"
              data-item-custom2-options="XS|S|M|L|XL|XXL"
              data-item-custom2-value={selectedSize}
            >
              Add to cart
            </button>
          </div>
          <div className="border-b border-black mt-8 max-w-xs"></div>

          <div
            className="flex gap-3 mt-8 font-syne cursor-pointer
                            "
          >
            <SizeButton
              outOfStock={
                product.sizes[0]?.stock.inventory === 0 ? true : false
              }
              size="XS"
              index={1}
              isSelected={selectedIndex === 1}
              handleClick={handleClick}
            />
            <SizeButton
              outOfStock={
                product.sizes[1]?.stock.inventory === 0 ? true : false
              }
              size="S"
              index={2}
              isSelected={selectedIndex === 2}
              handleClick={handleClick}
            />
            <SizeButton
              outOfStock={
                product.sizes[2]?.stock.inventory === 0 ? true : false
              }
              size="M"
              index={3}
              isSelected={selectedIndex === 3}
              handleClick={handleClick}
            />
            <SizeButton
              outOfStock={
                product.sizes[3]?.stock.inventory === 0 ? true : false
              }
              size="L"
              index={4}
              isSelected={selectedIndex === 4}
              handleClick={handleClick}
            />
            <SizeButton
              outOfStock={
                product.sizes[4]?.stock.inventory === 0 ? true : false
              }
              size="XL"
              index={5}
              isSelected={selectedIndex === 5}
              handleClick={handleClick}
            />
            <SizeButton
              outOfStock={
                product.sizes[5]?.stock.inventory === 0 ? true : false
              }
              size="XXL"
              index={6}
              isSelected={selectedIndex === 6}
              handleClick={handleClick}
            />
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
          sizes {
            size
            stock {
              inventory
            }
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
