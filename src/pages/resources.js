import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Resources = () => (
  <Layout>
    <br />
    <br />
    <br />
    <center>
      <h1>This page is here to help you</h1>

      <img
        style={{ width: "50%" }}
        src="https://www.shareicon.net/download/2015/11/24/677167_graphics.svg"
        alt="trading tools"
      />
      <h5 className="loremh5">
        Forex and related trading markets represent one of the fastest-growing
        industries in the world. In 2019, global forex markets reported a $6.6
        trillion dollar daily turnover. In the same year, the market reached a
        global value of $2.49 quadrillion dollars. With the continuous growth of
        the trading market, more people are gaining interest in signing up and
        claiming their share of the gold mine. While it’s possible to get
        started right away, it’s important to note that there are various tools
        that can make the life of a trader more convenient. Whether you’re a
        beginner or an expert, trading software can be a helpful way to improve
        the outcome of your trades. We take a closer look at some of the best
        trading software and tools you can use in 2022.
      </h5>

      <img
        style={{ width: "50%" }}
        src="https://cdn0.iconfinder.com/data/icons/banking-and-finance-3-2/48/101-512.png"
        alt="crypto"
      />
      <h5 className="loremh5">
        A vital part of a trader's success, especially those who trade
        frequently, is the ability to evaluate patterns in trading data.
        Technical analysis techniques can remove emotion from a trading
        decision. Technical analysis systems generate buy and sell indicators
        and help locate new trading opportunities. With the improvements in
        software and the speed of accessing millions of data points over the
        past 15 years, technical analysis tools are available to all online
        traders. Most of the better sites that offer technical analysis tools
        also guide new traders towards a fundamental understanding of the core
        concepts. Some of these resources are free or included in a broker's
        platform while others charge a fee. We'll take a look at technical
        analysis tools built into brokers' offerings and some standalone
        resources.
      </h5>
      <img
        style={{ width: "50%" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOYnrwr4aXez0TXZsLRbhjsjPB9s4joGJ5w&usqp=CAU"
        alt="cryptocat"
      />
      <h5 className="loremh5">I'm sooo happy you are reading this</h5>
    </center>
  </Layout>
)

export const Head = () => <Seo title="Resources" />

export default Resources
