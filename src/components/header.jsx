import * as React from "react"
import { Link } from "gatsby"
import { useEffect, useState, useRef } from "react"
import "./header.css"

const Header = () => {
  useEffect(() => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      const header = document.getElementsByClassName("header_portrait")
      header[0].style.display = "flex"
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      const header = document.getElementsByClassName("header_landscape")
      header[0].style.display = "flex"
    }
  }, [])

  const sideMenu = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const expandMenu = () => {
    sideMenu.current.style.display = "flex"
    setIsExpanded(true)
  }
  const collapseMenu = () => {
    sideMenu.current.style.display = "none"
    setIsExpanded(false)
  }

  const handleClick = () => {
    isExpanded ? collapseMenu() : expandMenu()
  }

  return (
    <>
      <header
        className="header_landscape"
        style={{
          position: "fixed",
          top: "0vh",
          width: "100%",
          maxHeight: "10%",
          background:
            "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,1) 100%)",

          display: "none",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: "100",
          visibility: "false",
        }}
      >
        <Link to="/">
          <img
            style={{
              margin: "1% 1% 0 1%",
              borderRadius: "8px",
              width: "200%",
            }}
            alt="Start trading logo"
            height={40}
            src="/logoHead.png"
          />
        </Link>

        <h2 style={{ color: "DarkSlateGray", marginRight: "1%" }}>
          | Start trading
        </h2>
        <Link
          id="navLink"
          to="/trade"
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
          to="/markets"
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
          to="/about"
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
          to="/resources"
          style={{
            color: "white",
            fontSize: `24px`,
            textDecoration: `none`,
          }}
        >
          Resources
        </Link>
      </header>

      <header
        className="header_portrait"
        style={{
          position: "fixed",
          top: "0vh",
          width: "100%",
          maxHeight: "6%",
          background:
            "linear-gradient(90deg, rgba(238,174,202,1) 15%, rgba(28,35,43,1) 100%)",

          display: "none",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: "100",
        }}
      >
        <div
          className="header_icon_collapse_expand"
          onClick={handleClick}
          style={{ maxWidth: "10%" }}
        >
          {isExpanded ? (
            <img
              style={{ width: "100%" }}
              src="/icons/collapse.png"
              alt="collapse"
            />
          ) : (
            <img
              style={{ width: "100%" }}
              src="/icons/expand.png"
              alt="expand"
            />
          )}
        </div>

        <Link style={{ width: "30%" }} to="/">
          <img src="/logoHead.png" alt="logo" style={{ maxWidth: "90%" }} />
        </Link>

        <button
          onClick={() => alert("Sorry, not yet")}
          style={{
            background: "crimson",
            border: "0",
            padding: "1% 3%",
            borderRadius: "10%",
          }}
        >
          Log in
        </button>

        <div
          className="side_menu"
          ref={sideMenu}
          style={{
            position: "fixed",
            left: "0",
            top: "6%",
            display: "none",
            flexDirection: "column",
            background: "LightGoldenRodYellow",
            paddingInline: "2%",
            paddingBlock: "5%",
          }}
        >
          <Link id="side_menu_nav_link" to="/trade">
            Trade
          </Link>

          <Link id="side_menu_nav_link" to="/markets">
            Markets
          </Link>

          <Link id="side_menu_nav_link" to="/about">
            About Us
          </Link>

          <Link id="side_menu_nav_link" to="/resources">
            Resources
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
