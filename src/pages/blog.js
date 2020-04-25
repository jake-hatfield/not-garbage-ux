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
                  <Link to={`blog${node.fields.slug}`} className="alt-link">
                    <h2 className="mt-4 lg:mt-0 text-3xl md:text-4xl text-black-400 font-black">
                      {title}
                    </h2>
                  </Link>
                  <aside className="mt-5 lg:mt-4 flex flex-wrap body-font font-light text-sm md:text-base text-gray-600">
                    <address className="mr-4 mb-0 not-italic">
                      {node.frontmatter.author}
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
                className="mt-3 mb-8 lg:mt-6 md:mb-0 leading-relaxed text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              {/* <hr className="mt-4 hidden md:block rounded-lg border border-2 border-solid border-gray-200" /> */}
              {/* <div className="mt-3 md:flex md:items-center md:justify-end">
                <p className="mr-16 p-3 md:p-4 w-1/4 h-full flex items-center bg-gray-400 alt-border">
                  <span className="mr-4 text-black-400 font-bold">3</span>{" "}
                  comments
                </p>
                <Link
                  to={`blog${node.fields.slug}`}
                  className="p-3 md:p-4 inline-block w-full md:w-1/3 text-center bg-black-400 text-white text-lg alt-border focus:outline-none focus:shadow-outline"
                >
                  Read more
                </Link>
              </div> */}
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
