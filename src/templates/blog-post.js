import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import SocialShare from "../components/socialShare"
import EmailInput from "../components/emailInput"
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
  const topic = post.frontmatter.topic || `UX design`

  // alert(document.body.clientHeight)
  // function getScrollPercent() {
  //   var h = document.documentElement,
  //     b = document.body,
  //     st = "scrollTop",
  //     sh = "scrollHeight"
  //   return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  // }
  // console.log(getScrollPercent)

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
                    Interested in {topic}?
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
                    We cover {topic} & more so thoroughly you might puke.
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
          <h2 className="mt-4 text-xl text-gray-600">
            {post.frontmatter.shortDescription}
          </h2>
          <aside className="mt-8 lg:flex lg:flex-wrap lg:justify-between lg:items-end body-font font-light text-sm md:text-base text-gray-600">
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
            <div className="mt-6 lg:mt-0">
              <SocialShare
                url={`${props.data.site.siteMetadata.siteUrl}/blog${post.fields.slug}`}
                title={post.frontmatter.title}
                twitterTags={post.frontmatter.twitterTags}
                siteUrl={props.data.site.siteMetadata.siteUrl}
              />
            </div>
            <section
              id="blog-body"
              className="text-lg text-gray-900 leading-relaxed"
            >
              <MDXProvider>
                <MDXRenderer title={`Title`}>{post.body}</MDXRenderer>
              </MDXProvider>
            </section>
          </aside>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              paddingTop: `16px`,
              paddingBottom: `16px`,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
          <hr />
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
        siteUrl
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        shortDescription
        author
        topic
        twitterTags
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
