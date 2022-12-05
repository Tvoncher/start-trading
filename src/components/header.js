import * as React from "react"
import { Link } from "gatsby"

const Header = ({}) => (
  <header
    style={{
      position: "fixed ",
      top: "0",
      width: "100%",
      background:
        "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,0.48503151260504207) 100%)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: "10",
    }}
  >
    <img
      style={{ margin: "1% 1% 0 1%", width: "15%", borderRadius: "8px" }}
      alt="Start trading logo"
      height={40}
      src="/logo.png"
    />
    <h2 style={{ color: "white", marginRight: "1%" }}>| Start trading</h2>
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
