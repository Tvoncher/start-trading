import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "5%",
      }}
      className="firstLoaded"
    >
      <div>
        <h2>
          Easy.
          <br />
          Controllable.
          <br />
          Secure.
          <br />
        </h2>
      </div>
      <img src="https://s3-us-west-1.amazonaws.com/coin-tracker-public/static/images/sprites/mobile-apps.svg"></img>
    </div>

    <div
      className="markets__box"
      style={{
        width: "100%",
        height: "20%",
        border: "2px solid red",
        marginBottom: "10%",
      }}
    >
      <center>
        <h2>Markets</h2>
      </center>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "30%", border: "2px solid lightgray", margin: "1%" }}
          src="https://www.svgrepo.com/show/308981/bitcoin-money-cryptocurrency.svg"
          alt="cryptocurrencies"
        />
        <img
          style={{ width: "30%", border: "2px solid lightgray", margin: "1%" }}
          src="https://cdn.worldvectorlogo.com/logos/forex-1.svg"
          alt="forex"
        />
        <img
          style={{ width: "30%", border: "2px solid lightgray", margin: "1%" }}
          src="https://www.svgrepo.com/show/88166/stock-earnings.svg"
          alt="stocks"
        />
      </div>
    </div>

    <div
      className="trading__options__box"
      style={{
        width: "100%",
        height: "20%",
        border: "2px solid blue",
        marginBottom: "10%",
      }}
    >
      <center>
        <h2>Trading options</h2>
      </center>
      <div style={{ display: "flex" }}>
        <img
          style={{
            width: "30%",
            border: "2px solid lightgray",
            margin: "1%",
          }}
          src="https://www.melaninfx.com/xas.scdn5.secure.raxcdn.com/build/twigImages/blocksNew/openAccount/iPhone_black.3951fd8d.png"
          alt="Spot"
        />
        <img
          style={{
            width: "30%",
            border: "2px solid lightgray",
            margin: "1%",
          }}
          src="https://bitso.com/legacy-assets/alpha/landing/assets/img/QR-Section.svg"
          alt="Margin"
        />
        <img
          style={{
            width: "30%",
            border: "2px solid lightgray",
            margin: "1%",
          }}
          src="https://alb.com/assets/main/img/other/main-trade-image.svg"
          alt="Futures"
        />
      </div>
    </div>

    <div
      className="our__platforms__box"
      style={{
        width: "100%",
        height: "20%",
        border: "2px solid orange",
        marginBottom: "10%",
      }}
    >
      <center>
        <h2>Our platforms</h2>
        <br />
        <h4>
          Choose from 8 awesome platforms — each developed to meet your needs.
        </h4>
        <br />
      </center>

      <div
        className="our__platforms__box__container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="our__platforms__box__slider"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img
            style={{ width: "40%", margin: "10%", opacity: "0.3" }}
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/4195.png"
            alt="platform1"
          />
          <img
            style={{ width: "40%", margin: "10%" }}
            src="https://www.svgrepo.com/show/308981/bitcoin-money-cryptocurrency.svg"
            alt="platform2"
          />
          <img
            style={{ width: "40%", margin: "10%", opacity: "0.6" }}
            src="https://www.svgrepo.com/show/174165/bitcoin-emblem.svg"
            alt="platform3"
          />
          <img
            style={{ width: "40%", margin: "10%", opacity: "0.3" }}
            src="https://www.svgrepo.com/show/224224/bitcoin.svg"
            alt="platform4"
          />
        </div>
        <img
          style={{ width: "50vw", maxHeight: "40vh", margin: "10%" }}
          src="https://d6t93aut4ltrr.cloudfront.net/Pictures/1024x536/0/4/1/7041_onlinetradingcryptocurrency20210902083528utc_48886.jpg"
          alt="platformLarge1"
        />
      </div>
    </div>

    <div
      className="reviws__box"
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
      }}
    >
      <div className="reviws__box__trust">
        <center>
          <h2>What our clients say about us</h2>
          <img
            style={{ width: "30%" }}
            src="https://www.kindpng.com/picc/m/200-2008522_transparent-sparkels-png-trustpilot-5-star-vector-png.png"
            alt="trustPilot"
          />
          <h4>Trust Score 5.0 | 40,089 reviews</h4>
        </center>
      </div>
      <div className="reviws__box__messages">
        <center>
          <h3>
            Start Trading Lite is simply the best trading app I ever seen!
          </h3>
          <br /> <h4>Pavel J.</h4>
        </center>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
