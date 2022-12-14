import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About_us = () => (
  <Layout>
    <br />
    <br />
    <br />
    <center>
      <h1>About us</h1>

      <h5 className="loremh5">
        I know that here I need to write something about 'easy trading'. How
        awesome this company is and so on. But is it really necessary?
        <p>
          Obviously,this site isn't about trading. It's about me and my journey
          as a developer.
        </p>
      </h5>

      <img
        style={{ width: "50%" }}
        src="https://icon-library.com/images/developers-icon/developers-icon-26.jpg"
        alt="developer"
      />
      <h5 className="loremh5">
        Currently I'm working with Gatsby, planning to practice Next and Vue.
        <p>
          My stack isn't so big , but I really love what I'm doing. And all
          frameworks aren't really hard to learn. So one day I'll become really
          good at coding.
        </p>
        <p>
          I have some problems with sense of beauty,but I'm working on this.
          Would you mind looking at this awesome cat?Maybe this will help a bit.
        </p>
      </h5>

      <img
        style={{ width: "40%" }}
        src="https://p.kindpng.com/picc/s/747-7475396_kitty-kitten-cat-white-kawaii-soft-mochi-chibi.png"
        alt="cat"
      />
      <h5 className="loremh5">
        “Success isn’t always about greatness. It’s about consistency.
        Consistent hard work leads to success. Greatness will come.” – Dwayne
        Johnson
        <p>
          I'm always learning something new and trying to implement it. You can
          <a
            href="https://github.com/Tvoncher"
            target={"_blank"}
            rel={"noreferrer"}
          >
            {" visit my github "}
          </a>
          and look at my other projects. Hope you'll like it.
        </p>
      </h5>
      <img
        style={{ width: "50%" }}
        src="https://banner2.cleanpng.com/20190125/fzl/kisspng-portable-network-graphics-software-developer-clip-hire-react-js-developers-at-all-inclusive-rate-mob-5c4b3bfbbdde38.5214124415484344277777.jpg"
        alt="dev"
      />
      <h5 className="loremh5">Have a nice day.</h5>
    </center>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About_us
