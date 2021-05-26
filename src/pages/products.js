import * as React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductsPage = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true } }
          sort: { fields: unit_amount }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
                description
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo title="Products" />
      <div>Product List !! </div>
      {data.prices.edges.map(({ node: price }) => (
        <div key={price.id}>
          <p>Product Name: {price.product.name}</p>
          <p>Product Price: {price.unit_amount / 100} $</p>
          <p>
            <img
              src={price.product.images[0]}
              alt="product-thumbnail"
              width="100px"
              height="100px"
            />
          </p>
          <p>
            <button
              class="snipcart-add-item"
              data-item-id={price.id}
              data-item-price={price.unit_amount / 100}
              data-item-url="https://keen-mirzakhani-77f18a.netlify.app/products"
              data-item-description={price.product.description}
              data-item-image={price.product.images[0]}
              data-item-name={price.product.name}
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </Layout>
  )
}

export default ProductsPage
