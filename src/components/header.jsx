import * as React from "react"
import { Link } from "gatsby"

const Header = ({}) => (
  <header
    style={{
      position: "fixed",
      top: "0vh",
      width: "100%",
      maxHeight: "10%",
      background:
        "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,1) 100%)",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: "100",
    }}
  >
    <Link to="/">
      <img
        style={{ margin: "1% 1% 0 1%", borderRadius: "8px", width: "200%" }}
        alt="Start trading logo"
        height={40}
        src="/logo.png"
      />
    </Link>

    <h2 style={{ color: "DarkSlateGray", marginRight: "1%" }}>
      | Start trading
    </h2>
    <Link
      id="navLink"
      to="/page-2"
      style={{
        color: "white",
        fontSize: `24px`,
        textDecoration: `none`,
      }}
    >
      Trade
    </Link>

    <Link
      id="navLink"
      to="/page-2"
      style={{
        color: "white",
        fontSize: `24px`,
        textDecoration: `none`,
      }}
    >
      Markets
    </Link>

    <Link
      id="navLink"
      to="/page-2"
      style={{
        color: "white",
        fontSize: `24px`,
        textDecoration: `none`,
      }}
    >
      About Us
    </Link>

    <Link
      id="navLink"
      to="/page-2"
      style={{
        color: "white",
        fontSize: `24px`,
        textDecoration: `none`,
      }}
    >
      Resources
    </Link>
  </header>
)

export default Header
