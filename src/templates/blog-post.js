import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="height-100">
        <Image
          className="blog-hero-image"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <article className="mt-8 lg:mt-16 container md:max-w-xl lg:max-w-2xl">
          <h1 className="mt-4 lg:mt-0 text-2xl md:text-4xl text-black-400 font-black">
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.description}</p>
          <aside className="mt-8 flex flex-wrap justify-between body-font font-light text-sm md:text-base text-gray-600">
            <div className="flex items-center">
              <Image
                fixed={props.data.avatar.childImageSharp.fixed}
                alt={post.frontmatter.author}
                style={{
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <div className="ml-4">
                <address className="mr-4 mb-0 not-italic text-gray-900">
                  <Link to={`/about`} rel="author" className="alt-link">
                    {post.frontmatter.author}
                  </Link>
                </address>
                <time pubdate={post.frontmatter.date}>
                  Last updated: {post.frontmatter.date}
                </time>
              </div>
            </div>
            <div>
              <address className="mr-4 mb-0 not-italic">
                <Link to={`/about`} rel="author" className="alt-link">
                  {post.frontmatter.author}
                </Link>
              </address>
              <time pubdate={post.frontmatter.date}>
                Last updated: {post.frontmatter.date}
              </time>
            </div>
          </aside>
          <section className="mt-12 text-lg leading-relaxed">
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </article>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
