import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Trade = () => (
  <Layout>
    <br />
    <br />
    <br />
    <center>
      <h1>
        Ready to trade?
        <p>This page will help you</p>
      </h1>
      <h5 className="loremh5">
        In Easy Trading we have 3 main trading options:
        <ul>
          <li>Contract for difference (CFD)</li>
          <li>Options</li>
          <li>Multipliers</li>
        </ul>
      </h5>
      <img
        style={{ width: "50%" }}
        src="https://www.schomerlawgroup.com/wp-content/uploads/2019/02/make-a-choice.png"
        alt="choose"
      />
      <h5 className="loremh5">
        A CFD allows you to trade on the price movement of an asset, without
        buying the underlying asset.
      </h5>
      <h5 className="loremh5">
        Options are products that allow for payouts from predicting market
        movements, without needing to buy the underlying asset. You only need to
        open a position that predicts how the asset will move over a period of
        time. This makes it possible for people to participate in the financial
        markets with minimal capital investment.
      </h5>
      <h5 className="loremh5">
        Multipliers combines the upside of leverage trading with the limited
        risk of options. This means that when the market moves in your favour,
        you'll multiply your potential profits. If the market moves against your
        prediction, your losses are limited only to your stake.
      </h5>

      <img
        style={{ width: "50%" }}
        src="https://i.pinimg.com/originals/c6/30/c7/c630c7c4daab178e6f908345267232fa.png"
        alt="crypto"
      />
      <h5 className="loremh5">
        You can use one of our platforms,each developed to meet your needs.
      </h5>
      <h5 className="loremh5">
        <strong>ET Desktop -</strong> Desktop version of our app. Most powerful
        version with all possible features you may ever need.
      </h5>
      <h5 className="loremh5">
        <strong>ET Mobile -</strong> Simply the best trading mobile app ever
        created.
      </h5>
      <h5 className="loremh5">
        <strong>ET Pro -</strong> Trading platform designed specially for VIP
        customers. Personal support manager included.
      </h5>
      <h5 className="loremh5">
        <strong>ET Lite -</strong> ET Lite was designed to run on slower
        hardware. You can even use it in browser if needed.
      </h5>
      <img
        style={{ width: "80%" }}
        src="https://www.techyv.com/sites/default/users/Images-Folder/Online-trading-market-mobile-desktop-platform.png"
        alt="welcome"
      />
      <h5 className="loremh5">
        Welcome aboard! We are happy to have you with us!
      </h5>
    </center>
  </Layout>
)

export const Head = () => <Seo title="Trade" />

export default Trade
