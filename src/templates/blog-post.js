import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import SocialShare from "../components/socialShare"
import { useSpring, animated } from "react-spring"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { useScrollPercentage } from "react-scroll-percentage"

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  const topic = post.frontmatter.topic || `UX design`
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [redundant, setRedundant] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        console.log(data.result)
        console.log(failure)
        if (
          (data.result === "error") &
          (success === true) &
          (failure === false)
        ) {
          setSuccess(!success)
          setFailure(!failure)
          setRedundant(!redundant)
        } else if (
          (data.result === "error") & (failure === false) ||
          success === true
        ) {
          setFailure(!failure)
        } else if ((data.result === "success") & (failure === true)) {
          setFailure(!failure)
          setSuccess(!success)
        } else if (data.result === "success") {
          setSuccess(!success)
        }
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }
  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  let sideBlog = false
  let additionalContent = false

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })

  if ((percentage > 0.1) & (percentage < 0.4)) {
    sideBlog = true
  } else if (percentage > 0.400001) {
    sideBlog = true
    additionalContent = true
  }

  if (additionalContent === true) {
    console.log("true")
  }
  const fade = useSpring({
    opacity: success || failure || redundant ? 1 : 0,
  })
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

      <section className="height-100" ref={ref}>
        <img
          className="mt-8 blog-hero-image"
          src={post.frontmatter.featuredImage.publicURL}
        />
        <aside
          className={`${sideBlog ? `opacity-100` : `opacity-0`} 
          side-blog w-full transition-opacity ease-in-out duration-1000`}
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
                    There's a ton more where that came from...
                  </p>
                </animated.div>
                <animated.div style={secondaryFade}>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Really, you should join our newsletter.
                  </p>
                  <h4 className="mt-2 body-font text-sm text-gray-600 leading-relaxed">
                    We cover stuff like {topic} so thoroughly you might puke.
                  </h4>
                </animated.div>
                <form onSubmit={handleSubmit} className="mb-0">
                  <input
                    placeholder="Enter your email"
                    onChange={handleEmailChange}
                    name="email"
                    type="text"
                    required
                    className="mt-4 p-3 w-full bg-gray-200 alt-border text-sm focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="mt-2 p-3 w-full bg-black-400 text-white text-sm alt-border focus:outline-none focus:shadow-outline"
                  >
                    Join the NGUX newsletter
                  </button>
                </form>
                <animated.p
                  className={`${
                    success ? `block` : `hidden`
                  } mt-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400 text-sm`}
                  style={fade}
                >
                  You're in. Please <strong>don't</strong> check your inbox now.
                  <span className="text-xs"> (Reverse psychology)</span>
                </animated.p>
                <animated.p
                  className={`${
                    failure ? `block` : `hidden`
                  } mt-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400 text-sm`}
                  style={fade}
                >
                  {redundant
                    ? `You've already signed up for these fire tips. Chill & check your inbox.`
                    : `AHHH. We're throwin' errors. Try a different email to
      make it stop.`}
                </animated.p>
              </div>
            </div>
          </div>
        </aside>
        <article className="mt-8 lg:mt-16 container md:max-w-xl lg:max-w-2xl relative">
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
          <ul className="py-8 text-3xl text-black-400 font-black">
            {/* More Topics */}
            <li>
              {previous && (
                <Link
                  to={`blog${previous.fields.slug}`}
                  rel="prev"
                  className="text-lg text-bold alt-link"
                >
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  to={`blog${next.fields.slug}`}
                  rel="next"
                  className="text-base text-bold alt-link"
                >
                  {next.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
          <hr />
        </article>
        <script defer src="https://cdn.commento.io/js/commento.js"></script>
        <div id="commento"></div>
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
          publicURL
        }
      }
    }
  }
`
