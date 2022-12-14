import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./joinUs.css"

const JoinUs = () => {
  return (
    <div className="join__us__box">
      <div className="join__us__box__signUp">
        <h3>Join over 10 million traders worldwide</h3>
        <h3 style={{ color: "SlateGray" }}>
          Sign up for your demo account now
        </h3>

        <div style={{ marginLeft: "3%" }}>
          <input
            className="emailInput"
            type="email"
            placeholder="Email"
            required
          />
          <button
            className="buttonSignUp"
            onClick={() => alert("Coming soon!")}
          >
            Sign up
          </button>
        </div>
        <div style={{ marginLeft: "3%" }}>
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
          />
          <p>I agree to the terms and conditions</p>
          <div style={{ marginTop: "10%" }}>
            Or sign up with
            <div>
              <img
                onClick={() => alert("Sorry, currently not supported")}
                id="join__us__socialsImg"
                src="/socials/twitter.png"
                alt="twitter"
              />
              <img
                onClick={() => alert("Sorry, currently not supported")}
                id="join__us__socialsImg"
                src="/socials/insta.png"
                alt="insta"
              />
              <img
                onClick={() => alert("Sorry, currently not supported")}
                id="join__us__socialsImg"
                src="/socials/linkedin.png"
                alt="linkedIn"
              />
            </div>
          </div>
        </div>
      </div>

      <StaticImage
        className="join_us_img"
        src="../images\joinUs.png"
        alt="joinUs"
        loading="lazy"
      />
    </div>
  )
}

export default JoinUs
