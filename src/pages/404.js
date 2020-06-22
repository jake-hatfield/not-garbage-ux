import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageNotFound from "../../content/assets/page-not-found.svg"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: You Done Broke It" />
        <article className="height-alt container md:text-center md:flex md:items-center">
          <div className="my-8 w-full">
            <PageNotFound className="mx-auto block w-48 md:w-48 lg:w-1/2" />
            <h1 className="pt-8 md:pt-16 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
              404: This Page Doesn't Exist
            </h1>
            <p className="mt-8 text-xl text-black-400 leading-relaxed">
              Think about it for a second: You're reading words on a page that
              doesn't exist. Weird.
            </p>
            <p className="mt-8 text-lg text-black-400 leading-relaxed">
              If you think there should be something here,{" "}
              <Link to={`/contact`} className="text-alt-link">
                contact me
              </Link>
              .
            </p>
          </div>
        </article>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
