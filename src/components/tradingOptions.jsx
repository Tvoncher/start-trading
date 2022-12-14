import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./tradingOptions.css"
const TradingOptions = () => {
  return (
    <div className="trading__options__box">
      <h2 style={{ fontSize: "68px" }}>Trading options</h2>

      <h3 style={{ fontSize: "22px" }}>
        Trade the way you want with 3 flexible trade types.
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div className="trading__options__wrapper">
          <StaticImage
            className="trading__options__image"
            src="../images/tradingOptions/CFDs.png"
            alt="CFDs"
          />
          <h5 className="trading__options__title">CFDs</h5>
        </div>
        <div className="trading__options__wrapper">
          <StaticImage
            src="../images/tradingOptions/multipliers.png"
            alt="Multipliers"
          />
          <h5 className="trading__options__title">Multipliers</h5>
        </div>
        <div className="trading__options__wrapper">
          <StaticImage
            src="../images/tradingOptions/options.png"
            alt="Options"
          />
          <h5 className="trading__options__title">Options</h5>
        </div>
      </div>
    </div>
  )
}

export default TradingOptions
