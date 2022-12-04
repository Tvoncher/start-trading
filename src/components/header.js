import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "fixed",
      width: "100%",
      backgroundColor: "Teal",
      display: "block",
      zIndex: "10",
    }}
  >
    <img
      alt="Start trading logo"
      height={40}
      src="https://cdn.pixabay.com/photo/2021/08/20/15/36/cryptocurrency-6560735_960_720.png"
    />
    <Link
      id="navLink"
      to="/"
      style={{
        color: "white",
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>

    <Link
      id="navLink"
      to="/page-2"
      style={{
        color: "white",
        fontSize: `var(--font-sm)`,
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
        fontSize: `var(--font-sm)`,
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
        fontSize: `var(--font-sm)`,
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
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      Resources
    </Link>
  </header>
)

export default Header
