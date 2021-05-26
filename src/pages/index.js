import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hello World !</h1>

      <div>
        <button className="snipcart-checkout">Click here to checkout</button>
        <p>
          Items: <span className="snipcart-items-count"></span>
        </p>
        <p>
          Price: <span className="snipcart-total-price"></span>
        </p>
      </div>

      <button
        class="snipcart-add-item"
        data-item-id="formal-shoe"
        data-item-price="30.00"
        data-item-url="/"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"
        data-item-name="The Shoes"
        data-item-custom1-name="Size"
        data-item-custom1-options="8|9[+5]|10[+7]"
        data-item-custom2-name="Colors"
        data-item-custom2-options="Red|Yellow|Green"
        data-item-custom3-name="Need socks ?"
        data-item-custom3-type="checkbox"
      >
        Add to cart (Test)
      </button>
    </Layout>
  )
}

export default IndexPage
