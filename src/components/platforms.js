import * as React from "react"
import { useState } from "react"
import "./platforms.css"

const Platforms = () => {
  const [platform, setPlatform] = useState(
    "https://d6t93aut4ltrr.cloudfront.net/Pictures/1024x536/0/4/1/7041_onlinetradingcryptocurrency20210902083528utc_48886.jpg"
  )

  const handleClick = e => {
    if (e.currentTarget.alt === "platform1") {
      setPlatform(
        "https://assets.fxcm.com/cdn-cgi/image/quality=100,format=webp/fxpress/fxcmcom/base/page/forex-trading-demo/forex-trading-station.jpg"
      )
    }
    if (e.currentTarget.alt === "platform2") {
      setPlatform(
        "https://d6t93aut4ltrr.cloudfront.net/Pictures/1024x536/0/4/1/7041_onlinetradingcryptocurrency20210902083528utc_48886.jpg"
      )
    }
    if (e.currentTarget.alt === "platform3") {
      setPlatform(
        "https://assets.fxcm.com/cdn-cgi/image/quality=100,format=webp/fxpress/fxcmcom/base/page/forex-trading-demo/forex-trading-station.jpg"
      )
    }
    if (e.currentTarget.alt === "platform4") {
      setPlatform(
        "https://d6t93aut4ltrr.cloudfront.net/Pictures/1024x536/0/4/1/7041_onlinetradingcryptocurrency20210902083528utc_48886.jpg"
      )
    }

    const imagesArr = Array.prototype.slice.call(
      document.getElementsByClassName("platform__selector")
    )
    imagesArr.forEach(e => {
      e.classList.remove("selected__platform")
    })

    e.currentTarget.classList.add("selected__platform")
  }

  return (
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
          Choose from 4 awesome platforms — each developed to meet your needs.
        </h4>
        <br />
      </center>

      <div
        className="our__platforms__box__container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="our__platforms__box__slider"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img
            className="platform__selector"
            onClick={handleClick}
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/4195.png"
            alt="platform1"
          />
          <img
            className="platform__selector selected__platform"
            onClick={handleClick}
            src="https://www.svgrepo.com/show/308981/bitcoin-money-cryptocurrency.svg"
            alt="platform2"
          />
          <img
            className="platform__selector"
            onClick={handleClick}
            src="https://www.svgrepo.com/show/174165/bitcoin-emblem.svg"
            alt="platform3"
          />
          <img
            className="platform__selector"
            onClick={handleClick}
            src="https://www.svgrepo.com/show/224224/bitcoin.svg"
            alt="platform4"
          />
        </div>
        <img
          style={{ width: "50vw", height: "40vh", margin: "10%" }}
          src={platform}
          alt="platformLarge1"
        />
      </div>
    </div>
  )
}

export default Platforms
