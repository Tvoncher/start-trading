import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Reviews = () => {
  return (
    <div
      className="reviws__box"
      style={{
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 64%)",
      }}
    >
      <div className="reviws__box__trust">
        <center>
          <h2 style={{ fontSize: "68px" }}>What our clients say about us</h2>
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
  )
}

export default Reviews
