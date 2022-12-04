import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import EmblaCarousel from "../utils/Embla"

import Layout from "../components/layout"
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

    <div
      className="trading__options__box"
      style={{
        width: "100%",
        height: "20%",
        marginBottom: "10%",
      }}
    >
      <center>
        <h2 style={{ fontSize: "68px" }}>Trading options</h2>
        <p>
          <h3 style={{ fontSize: "22px" }}>
            Trade the way you want with 3 flexible trade types.
          </h3>
        </p>
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
        marginBottom: "10%",
      }}
    >
      <center>
        <h2 style={{ fontSize: "68px" }}>Our platforms</h2>
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

      <div>
        Our awesome app
        <p>download</p>
        <p>please</p>
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
        backgroundColor: "lightcoral",
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
