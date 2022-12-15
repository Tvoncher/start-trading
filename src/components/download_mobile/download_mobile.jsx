import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./download_mobile.css"

const DownloadMobile = () => {
  return (
    <div className="download__mobile__box">
      <StaticImage
        className="download_mobile_img"
        loading="lazy"
        src="./mobileApp.png"
        alt="mobile App"
      />

      <div className="download__mobile__box__textbox">
        <img className="download_mobile_logo" src="/logo.png" alt="logo" />
        <h3>
          Lightning fast deposits and withdrawals
          <br />
          with our mobile app
        </h3>
        <h4>Take your chance and earn crypto ASAP!</h4>
        <Link id="downloadApp" to="/trade">
          {"Learn more >"}
        </Link>
      </div>
      <div
        className="QR__div"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src="/qr.jpg" alt="qr code" width="198" height="198"></img>
        </a>
        Scan or click to download our app
      </div>
    </div>
  )
}

export default DownloadMobile
