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
      <section className="mt-8 lg:mt-16 container height-100 md:max-w-xl lg:max-w-2xl">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="mb-12 lg:mb-24">
              <div className="flex flex-col flex-col-reverse lg:flex-col">
                <div>
                  <h2 className="mt-4 lg:mt-0 text-2xl md:text-4xl text-black-400 font-black">
                    <Link to={`blog${node.fields.slug}`} className="alt-link">
                      {title}
                    </Link>
                  </h2>
                  <aside className="mt-2 lg:mt-4 flex flex-wrap body-font font-light text-sm md:text-base text-gray-600">
                    <address className="mr-4 mb-0 not-italic">
                      <Link to={`/about`} rel="author" className="alt-link">
                        {node.frontmatter.author}
                      </Link>
                    </address>
                    <time pubdate={node.frontmatter.date}>
                      Last updated: {node.frontmatter.date}
                    </time>
                  </aside>
                </div>
                <Link to={`blog${node.fields.slug}`}>
                  <Image
                    className="mt-4 h-48 lg:h-64 alt-border"
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p
                className="mt-3 lg:mt-6 leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
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
