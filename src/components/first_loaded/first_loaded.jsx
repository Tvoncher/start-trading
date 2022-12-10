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
            <Link
              to="/signup"
              style={{
                color: "white",
                textDecoration: `none`,
              }}
            >
              Create demo account
            </Link>
          </button>
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
