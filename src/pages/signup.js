import { Link, navigate } from "gatsby"
import * as React from "react"
import Seo from "../components/seo"
import "./signup.css"
import { auth } from "../components/firebaseInit/firebase"

const Sign_Up = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [checked, setChecked] = React.useState(false)
  const [submitEnabled, setSubmitEnabled] = React.useState(false)

  React.useEffect(() => {
    email && checked && password.length > 5
      ? setSubmitEnabled(true)
      : setSubmitEnabled(false)
  }, [email, password, checked])

  function signUp() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        alert("Welcome!")
        navigate("/page-2")
      })
      .catch(err => alert(err))
  }

  return (
    <>
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: `24px`,
            textDecoration: `none`,
          }}
        >
          <div className="sign_up_header">
            <img
              className="sign_up_header_logo"
              src="/logoHead.png"
              alt="logo"
            />
            | START TRADING
          </div>
        </Link>
      </div>
      <div className="sign_up_box">
        <div className="sign_up_info">
          <img
            className="sign_up_info_candles"
            src="/candles.png"
            alt="candles"
          />
          <h1>Start trading with Easy Trading</h1>
          <h4 style={{ fontWeight: "400" }}>
            Join over 5 million people who trade with Deriv.com and Binary.com —
            the award-winning platform that’s been trusted for over 20 years.
          </h4>
        </div>
        <div className="sign_up_wrapper">
          <div className="sign_up_form">
            <h2>Sign Up</h2>
            <h4>Enter your email address and password to begin</h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                id="input_email"
                style={{ marginTop: "5%" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                id="input_password"
                style={{ marginTop: "5%" }}
                type="Password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
              />
              <label style={{ marginTop: "5%" }}>
                <input
                  style={{ marginRight: "2%" }}
                  type="checkbox"
                  name="terms_n_conditions"
                  id="terms_n_conditions"
                  onClick={() => setChecked(!checked)}
                />
                I agree to the terms and conditions
              </label>
              <button
                onClick={signUp}
                id="sign_up_form_submit"
                disabled={!submitEnabled}
              >
                Create demo account
              </button>
            </div>
            <h4 style={{ marginTop: "5%", fontWeight: "400" }}>
              By pressing “Create demo account”, you confirm that you are 18 or
              older. You understand that we may use your email address to send
              you information about Easy trading products and services as well
              as market news. You can always unsubscribe from these emails in
              your account settings. For more information, please take a look at
              our Security and privacy.
            </h4>
            <div style={{ marginTop: "5%" }}>
              <center>Or sign up with</center>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <img
                  onClick={() => alert("Work in progress")}
                  id="join__us__socialsImg"
                  src="/socials/facebook.png"
                  alt="facebook"
                />
                <img
                  onClick={() => alert("Work in progress")}
                  id="join__us__socialsImg"
                  src="/socials/telegram.png"
                  alt="telegram"
                />
                <img
                  onClick={() => alert("Work in progress")}
                  id="join__us__socialsImg"
                  src="/socials/linkedin.png"
                  alt="linkedIn"
                />
              </div>
            </div>
            <center style={{ marginTop: "5%" }}>
              Already have an account? Log in
            </center>
          </div>
        </div>
      </div>
    </>
  )
}

export const Head = () => <Seo title="Sign up" />

export default Sign_Up
