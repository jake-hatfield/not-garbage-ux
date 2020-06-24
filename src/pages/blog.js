import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CommentCounter from "../components/commentCounter"

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="UX Tips, Strategies and Case Studies"
        description="Not Garbage UX writes up case studies and strategies all about how to make things suck less. We cover everything from UI design principles to clear messaging."
        keywords={[
          `not garbage ux blog`,
          `ux case studies`,
          `ux tips`,
          `NGUX blog`,
        ]}
      />
      <section className="mt-8 lg:mt-16 container height-100 md:max-w-xl lg:max-w-2xl">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              className="mb-12 lg:mb-24"
              id="blog-article"
            >
              <div className="flex flex-col flex-col-reverse lg:flex-col">
                <div>
                  <Link to={`blog${node.fields.slug}`} className="alt-link">
                    <h2 className="mt-4 lg:mt-0 text-3xl md:text-4xl text-black-400 font-black">
                      {title}
                    </h2>
                  </Link>
                  <aside className="mt-5 lg:mt-4 md:flex justify-between items-center body-font font-light text-sm md:text-base text-gray-600">
                    <div className="flex flex-wrap">
                      <address className="mr-2 mb-0 not-italic">
                        {node.frontmatter.author}
                      </address>
                      <span className="mr-2">&#8226;</span>
                      <time pubdate={node.frontmatter.date}>
                        Updated: {node.frontmatter.date}
                      </time>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="mr-2">
                        {node.frontmatter.readTime} min read
                      </span>
                      <span className="mr-2">&#8226;</span>
                      <a href={`${node.frontmatter.path}#commento`}> </a>
                    </div>
                  </aside>
                </div>
                <Link to={`blog${node.fields.slug}`}>
                  <img
                    className="mt-4 mb-0 mx-auto h-48 lg:h-64 alt-border"
                    src={node.frontmatter.featuredImage.publicURL}
                  />
                </Link>
              </div>
              <p
                className="mt-3 leading-relaxed text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <p className="mt-3 leading-relaxed text-gray-900">
                You'll learn:
              </p>
              <div
                className="mt-3 leading-relaxed text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.bulletDescription,
                }}
              />
              <Link
                to={`blog${node.fields.slug}`}
                className="block w-full mt-6 p-3 md:p-4 bg-black-400 text-white text-lg text-center md:text-base alt-border focus:outline-none focus:shadow-outline"
              >
                Read more
              </Link>
            </article>
          )
        })}
      </section>
      <CommentCounter />
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
              publicURL
            }
            path
            readTime
            bulletDescription
          }
        }
      }
    }
  }
`
