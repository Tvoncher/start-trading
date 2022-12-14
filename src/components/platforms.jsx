import * as React from "react"
import { useState } from "react"
import "./platforms.css"

const Platforms = () => {
  const [platform, setPlatform] = useState("/platforms/platform1.jpg")

  const handleClick = e => {
    if (e.currentTarget.alt === "platform1") {
      setPlatform("/platforms/platform2.jpg")
    }
    if (e.currentTarget.alt === "platform2") {
      setPlatform("/platforms/platform1.jpg")
    }
    if (e.currentTarget.alt === "platform3") {
      setPlatform("/platforms/platform3.png")
    }
    if (e.currentTarget.alt === "platform4") {
      setPlatform("/platforms/platform4.jpg")
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

      <div className="our__platforms__box__container">
        <div className="our__platforms__box__slider">
          <img
            className="platform__selector"
            onClick={handleClick}
            src="/platforms/platform2.jpg"
            alt="platform1"
          />
          <img
            className="platform__selector selected__platform"
            onClick={handleClick}
            src="/platforms/platform1.jpg"
            alt="platform2"
          />
          <img
            className="platform__selector"
            onClick={handleClick}
            src="/platforms/platform3.png"
            alt="platform3"
          />
          <img
            className="platform__selector"
            onClick={handleClick}
            src="/platforms/platform4.jpg"
            alt="platform4"
          />
        </div>
        <img
          className="platform_large_img"
          src={platform}
          alt="platformLarge1"
        />
      </div>
    </div>
  )
}

export default Platforms
