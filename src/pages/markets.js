import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Markets = () => (
  <Layout>
    <br />
    <br />
    <br />
    <center>
      <h1>Markets</h1>

      <h5 className="loremh5">
        With Easy Trading you can trade whatever you like. Prefer forex? Not a
        problem. Wanna buy cryptocurrencies?We are here to help you. Wanna
        invest in gold? Do it with us!
      </h5>

      <img
        style={{ width: "50%" }}
        src="https://www.pngall.com/wp-content/uploads/8/Forex-Trading-PNG-Image.png"
        alt="trader"
      />
      <h5 className="loremh5">
        Why trade with us? We have:
        <p>-Low commission</p>
        <p>-Easy-to-use trading platforms</p>
        <p>-40+ crypto pairs</p>
        <p>-Higher leverage,higher profit</p>
        <p>-Rapid and secure withdrawal</p>
        <p>-Trading 24/7</p>
        <p>-Friendly support</p>
      </h5>

      <img
        style={{ width: "50%" }}
        src="https://png.pngtree.com/png-vector/20211007/ourlarge/pngtree-trader-online-trading-in-flat-concept-png-image_3974399.png"
        alt="trader"
      />
      <h5 className="loremh5">
        What are you waiting for? Join us now and we'll help you with setting up
        everything. Our support team will guide you throw all process of trading
        to ensure you are doing great.
      </h5>

      <Link
        to="/signup"
        style={{
          color: "white",
          textDecoration: `none`,
          borderRadius: "8px",
          backgroundColor: "crimson",
          padding: "1%",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          marginTop: "10%",
        }}
      >
        Join now!
      </Link>

      <h5 className="loremh5">
        We are working day n night to make you trading journey as easy as
        possible.
        <p>If you have any questions - please contact our support team.</p>
      </h5>
    </center>
  </Layout>
)

export const Head = () => <Seo title="Markets" />

export default Markets
