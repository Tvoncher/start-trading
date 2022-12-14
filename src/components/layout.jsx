import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"

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
          <StaticImage
            className="footer_img"
            src="../images\logoBot.png"
            alt="footer__logo"
          />

          <div className="socials">
            <img
              onClick={() => alert("Welcome to our facebook page!")}
              id="socialsImg"
              src="/socials/facebook.png"
              alt="facebook"
            />
            <img
              onClick={() => alert("Welcome to our telegram channel!")}
              id="socialsImg"
              src="/socials/telegram.png"
              alt="telegram"
            />
            <img
              onClick={() => alert("Welcome to our twitter page!")}
              id="socialsImg"
              src="/socials/twitter.png"
              alt="twitter"
            />
            <img
              onClick={() => alert("Welcome to our instagram profile!")}
              id="socialsImg"
              src="/socials/insta.png"
              alt="insta"
            />
            <img
              onClick={() => alert("Welcome to our linkedIn page!")}
              id="socialsImg"
              src="/socials/linkedin.png"
              alt="linkedIn"
            />
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
