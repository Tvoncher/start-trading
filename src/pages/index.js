import * as React from "react"
import { Suspense } from "react"
import "./index.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstLoaded from "../components/first_loaded/first_loaded"

const Markets = React.lazy(() => import("../components/markets/markets"))
const Platforms = React.lazy(() => import("../components/platforms"))
const TradingOptions = React.lazy(() => import("../components/tradingOptions"))
const DownloadMobile = React.lazy(() =>
  import("../components/download_mobile/download_mobile")
)
const Reviews = React.lazy(() => import("../components/reviews/reviews"))
const JoinUs = React.lazy(() => import("../components/joinUs"))

const IndexPage = () => (
  <Layout>
    <Suspense>
      <FirstLoaded />
      <Markets />
      <TradingOptions />
      <Platforms />
      <Reviews />
      <DownloadMobile />
      <JoinUs />
    </Suspense>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
