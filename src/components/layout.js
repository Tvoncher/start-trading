import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <img className="footer__logo" src="/logoBot.png" alt="logo" />

          <div className="socials" style={{ display: "flex", width: "40%" }}>
            <img
              onClick={() => alert("Welcome to our facebook page!")}
              id="socialsImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png"
              alt="facebook"
            />
            <img
              onClick={() => alert("Welcome to our telegram channel!")}
              id="socialsImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/1024px-Telegram_X_2019_Logo.svg.png"
              alt="telegram"
            />
            <img
              onClick={() => alert("Welcome to our twitter page!")}
              id="socialsImg"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-icon.png"
              alt="twitter"
            />
            <img
              onClick={() => alert("Welcome to our instagram profile!")}
              id="socialsImg"
              src="https://cdn-icons-png.flaticon.com/512/4138/4138164.png"
              alt="insta"
            />
            <img
              onClick={() => alert("Welcome to our linkedIn page!")}
              id="socialsImg"
              src="http://cdn.onlinewebfonts.com/svg/img_150148.png"
              alt="linkedIn"
            />
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
