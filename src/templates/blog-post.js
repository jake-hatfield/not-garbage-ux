import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { useSpring, animated } from "react-spring"

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const [sideBlog, setSideBlog] = useState(false)
  const [additionalContent, setAdditionalContent] = useState(false)
  const primaryFade = useSpring({
    opacity: additionalContent ? 0 : 1,
  })
  const secondaryFade = useSpring({
    opacity: additionalContent ? 1 : 0,
  })

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
        <aside
          className={`${
            sideBlog ? `opacity-100` : `opacity-0`
          } side-blog w-full transition-opacity ease-in-out duration-500`}
        >
          <div className="flex justify-center">
            <div className="alt-container w-full">
              <div className="side-blog-w relative">
                <h2 className="text-lg text-gray-700 font-bold">
                  Not Garbage UX
                </h2>
                <animated.div style={primaryFade} className="absolute">
                  <h4 className="mt-2 body-font text-sm text-gray-600 leading-relaxed">
                    Interested in {post.frontmatter.topic}?
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    There's tons more where this comes from.
                  </p>
                </animated.div>
                <animated.div style={secondaryFade}>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Really, you should join our newsletter.
                  </p>
                  <h4 className="mt-2 body-font text-sm text-gray-600 leading-relaxed">
                    We cover {post.frontmatter.topic} so thoroughly you might
                    puke.
                  </h4>
                </animated.div>
              </div>
            </div>
          </div>
        </aside>
        <article className="mt-8 lg:mt-16 container md:max-w-xl lg:max-w-2xl relative">
          <button className="mr-8" onClick={() => setSideBlog(!sideBlog)}>
            Click
          </button>
          <button onClick={() => setAdditionalContent(!additionalContent)}>
            Click 2
          </button>
          <h1 className="mt-4 lg:mt-0 text-3xl md:text-4xl text-black-400 font-black">
            {post.frontmatter.title}
          </h1>
          <h2 className="mt-6 text-xl text-gray-600">
            {post.frontmatter.shortDescription}
          </h2>
          <aside className="mt-8 lg:flex lg:flex-wrap lg:justify-between lg:items-center body-font font-light text-sm md:text-base text-gray-600">
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
                <address className="mr-4 mb-0 not-italic text-gray-800">
                  <Link to={`/about`} rel="author" className="alt-link">
                    {post.frontmatter.author}
                  </Link>
                </address>
                <time pubdate={post.frontmatter.date}>
                  Last updated: {post.frontmatter.date}
                </time>
              </div>
            </div>
            <div className="mt-4">
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
          <section
            id="blog-body"
            className="text-lg text-black-400 leading-relaxed"
          >
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
        shortDescription
        author
        topic
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
