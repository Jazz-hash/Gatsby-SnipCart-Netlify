import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hello World !</h1>
      <button
        class="snipcart-add-item"
        data-item-id="formal-shoe"
        data-item-price="30.00"
        data-item-url="/"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"
        data-item-name="The Shoes"
      >
        Checkout
      </button>
    </Layout>
  )
}

export default IndexPage
