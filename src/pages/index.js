import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import EmblaCarousel from "../utils/Embla"

import "./index.css"
import Layout from "../components/layout"
import Platforms from "../components/platforms"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
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
      <img src="https://s3-us-west-1.amazonaws.com/coin-tracker-public/static/images/sprites/mobile-apps.svg"></img>
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
      </center>
      <EmblaCarousel slides={slides} />
    </div>

    <div className="trading__options__box">
      <h2 style={{ fontSize: "68px" }}>Trading options</h2>

      <h3 style={{ fontSize: "22px" }}>
        Trade the way you want with 3 flexible trade types.
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div className="trading__options__wrapper">
          <img
            src="https://www.melaninfx.com/xas.scdn5.secure.raxcdn.com/build/twigImages/blocksNew/openAccount/iPhone_black.3951fd8d.png"
            alt="Spot"
          />
          <h5>CFDs</h5>
        </div>
        <div className="trading__options__wrapper">
          <img
            src="https://bitso.com/legacy-assets/alpha/landing/assets/img/QR-Section.svg"
            alt="Margin"
          />
          <h5>Multipliers</h5>
        </div>
        <div className="trading__options__wrapper">
          <img
            src="https://alb.com/assets/main/img/other/main-trade-image.svg"
            alt="Futures"
          />
          <h5>Options</h5>
        </div>
      </div>
    </div>

    <Platforms />

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
          <h2 style={{ fontSize: "68px" }}>What our clients say about us</h2>
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
      <img
        src="https://primexbt.com/assets/images/mobiles-mob.png?rev=784fa49b"
        alt="mobileApp"
      />

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
          Learn more >
        </Link>
      </div>

      <a href="https://github.com/" target="_blank">
        <img
          src="http://qrcoder.ru/code/?http%3A%2F%2Fhttps%3A%2F%2Fgithub.com%2F&6&0"
          width="198"
          height="198"
        ></img>
      </a>
    </div>

    <div
      className="join__us__box"
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "5%",
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 100%)",
        borderRadius: "8px",
      }}
    >
      <div
        className="join__us__box__signUp"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "1%",
        }}
      >
        <h2>Join over 10 million traders worldwide</h2>
        <p>
          <h4>Sign up for your demo account now</h4>
        </p>
        <input
          style={{ margin: "3%" }}
          type="email"
          placeholder="Email"
          required
        />
        <button
          style={{
            borderRadius: "10%",
            backgroundColor: "crimson",
            padding: "3%",
            cursor: "pointer",
          }}
        >
          SignUp
        </button>
        <input
          type="checkbox"
          name="termsAndConditions"
          id="termsAndConditions"
        />
        <p>I agree to the terms and conditions</p>
        <p>Or sign up with</p>
      </div>
      <img
        style={{ objectFit: "cover", width: "30%", marginTop: "3%" }}
        src="https://alphatradinghub.com/wp-content/uploads/2022/03/futures.png"
        alt="joinUs"
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
