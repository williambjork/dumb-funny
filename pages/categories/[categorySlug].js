/* import React from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Category({category, products}) {
  console.log('category', category)
  console.log('products', products)
  return (
    <div>Category</div>
  )
}

export async function getStaticPaths() {
    const client = new ApolloClient({
      uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcg4dp6b0q6201t55c5f05qx/master",
      cache: new InMemoryCache(),
    });
  
    const data = await client.query({
      query: gql`
      query PageCategories {
        categories {
          id
          slug
        }
      }
      
      `,
    });
  
    console.log("data", data.slug);
  
    const paths = data.data.categories.map((category) => {
      return {
        params: {
          categorySlug: category.slug,
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
      query PageCategory($slug: String = "") {
        category(where: {slug: $slug}) {
          id
          slug
          name
          products {
            brand
            id
            image {
              url
            }
            slug
            title
            price
          }
        }
      }
      
      `,
      variables: {
        slug: params.categorySlug,
      },
    });
  
    console.log("params", params);
  
    const category = data.data.category;
  
    return {
      props: {
        category,
        products: category.products
      },
    };
  } 
  
*/