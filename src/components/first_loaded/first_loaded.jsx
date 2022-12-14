import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./first_loaded.css"

const FirstLoaded = () => {
  return (
    <div className="firstLoaded">
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
          <Link
            to="/signup"
            style={{
              color: "white",
              textDecoration: `none`,
              borderRadius: "8px",
              backgroundColor: "crimson",
              padding: "5%",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "10%",
            }}
          >
            Create demo account
          </Link>
        </h2>
      </div>

      <StaticImage
        className="first_loaded_img"
        src="./firstLoaded.png"
        alt="first loaded img"
        loading="eager"
      />
    </div>
  )
}

export default FirstLoaded
