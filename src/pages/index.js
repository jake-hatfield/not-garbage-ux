import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ navOpen, siteTitle }) => {
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="container height-100 md:flex md:items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-black-400 font-black">
          Incredible design that <br /> doesn't solve a problem <br /> is{" "}
          <span className="emphasis">garbage UX</span>
        </h1>
      </article>
    </Layout>
  )
}

export default IndexPage
