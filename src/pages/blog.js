import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <section className="container height-alt max-w-3xl">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <h2 className="mt-8 lg:mt-0 text-3xl md:text-4xl text-black-400 font-black">
                <Link to={`blog${node.fields.slug}`}>{title}</Link>
              </h2>
              <div className="mt-6 flex body-font font-light text-gray-600">
                <address className="mb-0 not-italic">
                  <Link to={`/about`} rel="author">
                    {node.frontmatter.author}
                  </Link>
                </address>
                <time pubdate={node.frontmatter.date} className="ml-4">
                  Last updated: {node.frontmatter.date}
                </time>
              </div>
              <Link to={`blog${node.fields.slug}`}>
                <Image
                  className="mt-4 h-64 alt-border"
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </Link>
              <p
                className="mt-6 leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <Link
                to={`blog${node.fields.slug}`}
                className="mt-4 md:mt-0 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
              >
                Continue Reading
              </Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            featuredImage {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
