import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FirstLoaded = () => {
  return (
    <div
      className="firstLoaded"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginBottom: "5%",
        paddingTop: "10%",
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 64%)",
      }}
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
        src="../images\firstLoaded.png"
        alt="first loaded img"
        loading="eager"
      />
    </div>
  )
}

export default FirstLoaded
