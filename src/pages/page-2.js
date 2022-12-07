import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <br />
    <br />
    <br />

    <center>
      <h1>This page is currently under construction</h1>
      <img
        style={{ width: "50%" }}
        src="https://svgsilh.com/svg_v2/150275.svg"
        alt="construction"
      />
      <h2>
        We are working day n night to bring you the best service ever seen
      </h2>
    </center>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
