import * as React from "react"
import { Suspense } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const EmblaCarousel = React.lazy(() =>
  import("../components/emblaCarousel/Embla")
)

const JoinUs = React.lazy(() => import("../components/joinUs"))
const Platforms = React.lazy(() => import("../components/platforms"))
const TradingOptions = React.lazy(() => import("../components/tradingOptions"))

const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    {
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: "5%",
            paddingTop: "5%",
            background: "rgb(238,174,202)",
            background:
              "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 64%)",
          }}
          className="firstLoaded"
        >
          <div>
            <h2 style={{ fontSize: "48px" }}>
              Easy.
              <br />
              Controllable.
              <br />
              Secure.
              <br />
              <p style={{ fontSize: "28px" }}>
                Trade with us <br />
                earn extra prizes
              </p>
              <button
                style={{
                  borderRadius: "8px",
                  backgroundColor: "crimson",
                  padding: "5%",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "18px",
                  marginTop: "10%",
                }}
              >
                Create demo account
              </button>
            </h2>
          </div>

          <StaticImage src="../images\firstLoaded.png" alt="first loaded img" />
        </div>

        <div
          className="markets__box"
          style={{
            width: "100%",
            height: "20%",
            marginBottom: "10%",
          }}
        >
          <center>
            <h2 style={{ fontSize: "68px" }}>Markets</h2>
            <Suspense fallback="loading...">
              <EmblaCarousel slides={slides} />
            </Suspense>
          </center>
        </div>

        <Suspense>
          <TradingOptions />

          <Platforms />
        </Suspense>

        <div
          className="reviws__box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "rgb(238,174,202)",
            background:
              "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 64%)",
          }}
        >
          <div className="reviws__box__trust">
            <center>
              <h2 style={{ fontSize: "68px" }}>
                What our clients say about us
              </h2>
              <StaticImage
                style={{ width: "50%" }}
                src="../images\trust.png"
                alt="trustPilot"
              />
              <h4>Trust Score 5.0 | 40,089 reviews</h4>
            </center>
          </div>
          <div className="reviws__box__messages">
            <center>
              <h3 style={{ margin: "5%" }}>
                Start Trading Lite is simply the best trading app I ever seen!
              </h3>
              <br /> <h4>Pavel J.</h4>
            </center>
          </div>
        </div>

        <div
          className="download__mobile__box"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <StaticImage src="../images\mobileApp.png" alt="mobile App" />

          <div className="download__mobile__box__textbox">
            <img
              style={{ width: "50%", marginTop: "5%", borderRadius: "8px" }}
              src="/logo.png"
              alt="logo"
            />
            <h3>
              Lightning fast deposits and withdrawals
              <br />
              with our mobile app
            </h3>
            <h4>Take your chance and earn crypto ASAP!</h4>
            <Link
              id="downloadApp"
              to="/page-2"
              style={{
                color: "crimson",
                fontSize: `24px`,
                textDecoration: `none`,
              }}
            >
              {"Learn more >"}
            </Link>
          </div>
          <div
            className="QR__div"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <a href="https://github.com/" target="_blank">
              <img src="/qr.jpg" alt="qr code" width="198" height="198"></img>
            </a>
            Scan or click to download our app
          </div>
        </div>

        <Suspense>
          <JoinUs />
        </Suspense>
      </>
    }
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
