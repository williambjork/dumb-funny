import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SizeButton from "../../components/SizeButton";
import { FaCcAmex, FaCcMastercard, FaCcStripe, FaCcVisa } from "react-icons/fa";
import {
  BsFillSuitHeartFill,
  BsSuitHeart,
  BsSuitHeartFill,
} from "react-icons/bs";
import ZoomableImage from "../../components/ZoomableImage";
import ImageOverlay from "../../components/ImageOverlay";
import BlurScreen from "../../components/BlurScreen";
import SizeButtonList from "../../components/SizeButtonList";
import SizeDropdown from "../../components/SizeDropdown";

const colors = ["pink-500", "red-500", "emerald-500", "cyan-500"];

export default function Product({ product }) {
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoved, setIsLoved] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  /* useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []); */

  function handleClick(index, size) {
    setSelectedIndex(index);
    setSelectedSize(size);
    console.log(size)
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={`${product.title} is dumb funny`} />
      </Head>

      <div className=" md:grid md:grid-cols-2 md:mt-20 md:ml-20 md:mr-12">
        <p>{product.categories.name}</p>
        <div
          className="col-start-1 justify-center m-auto flex flex-col md:flex-row"
          onClick={() => {
            setOverlayActive(!overlayActive);
          }}
        >
          <ZoomableImage src={product.image.url} height={500} width={500} />
        </div>
        {overlayActive == true ? (
          <div
            onClick={() => {
              setOverlayActive(!overlayActive);
            }}
          >
            <BlurScreen src={product.image.url} />
          </div>
        ) : null}

        <div className="col-start-2 mb-12 mx-32 md:mt-32 md:ml-12 ml-24">
          <h1 className="flex  text-xl font-spacemono font-bold m-auto">
            {product.title}
            <button
              aria-label="Like"
              onClick={() => {
                setIsLoved(isLoved ? false : true);
              }}
            >
              {isLoved ? (
                <BsSuitHeartFill
                  size={20}
                  className="mt-2 ml-40 sm:ml-44 fill-red-500 cursor-pointer"
                />
              ) : (
                <BsSuitHeart
                  size={20}
                  className="mt-2 ml-40 sm:ml-44 cursor-pointer hover:fill-red-500 hover:animate-pulse"
                />
              )}
            </button>
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

          <div className="flex">
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

          <div className="-ml-12 sm:-ml-0">
          <SizeButtonList
            
            product={product}
            size={size}
            selectedSize={selectedSize}
            handleClick={handleClick}
            selectedIndex={selectedIndex}
          />
          </div>
        </div>

        <div className="flex  md:flex-row flex-col absolute bottom-3 ">
          <FaCcStripe
            size={21}
            className="mt-3 ml-3 md:ml-0 hover:fill-emerald-600"
          />
          <FaCcVisa size={21} className="mt-3 ml-3 hover:fill-pink-600" />
          <FaCcAmex size={21} className="mt-3 ml-3 hover:fill-cyan-600" />
          <FaCcMastercard
            size={21}
            className="mt-3 ml-3 mb-9 md:mb-0 hover:fill-amber-600"
          />
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


  const product = data.data.product;

  return {
    props: {
      product,
    },
  };
}
