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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "aliceblue",
          }}
        >
          <img
            style={{ width: "10%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2021/08/20/15/36/cryptocurrency-6560735_960_720.png"
            alt="logo"
          />

          <div className="socials" style={{ display: "flex", width: "40%" }}>
            <img
              id="socialsImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png"
              alt="facebook"
            />
            <img
              id="socialsImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/1024px-Telegram_X_2019_Logo.svg.png"
              alt="telegram"
            />
            <img
              id="socialsImg"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-icon.png"
              alt="twitter"
            />
            <img
              id="socialsImg"
              src="https://cdn-icons-png.flaticon.com/512/4138/4138164.png"
              alt="insta"
            />
            <img
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
