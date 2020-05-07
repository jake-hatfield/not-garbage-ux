import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailInput from "../components/emailInput"
import VisibilitySensor from "react-visibility-sensor"
import { animated, useSpring } from "react-spring"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const IndexPage = ({ siteTitle }) => {
  const isVisible = useState(false)
  const fade = useSpring({ opacity: isVisible ? 1 : 0, delay: 300 })
  const aboutPage = useStaticQuery(graphql`
    query aboutPage {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <section className="my-8 md:my-16 height-alt w-full container">
        <div className="mx-auto lg:flex md:max-w-lg lg:max-w-full">
          <section className="lg:mr-16 xl:mr-24">
            <header>
              <section className="mx-auto lg:m-0 lg:max-w-xl xl:max-w-2xl">
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <animated.h1
                      className="text-3xl md:text-4xl lg:text-5xl text-black-400 font-black"
                      style={fade}
                    >
                      If you hate garbage UX, lucky day.
                    </animated.h1>
                  )}
                </VisibilitySensor>
                <h2 className="mt-8 text-xl text-black-400 leading-relaxed">
                  I'm committed to helping designers & developers turn a UX
                  dumpster fire into digital experiences that users admire and
                  customers desire.
                </h2>
              </section>
            </header>
            <p className="mt-4 lg:max-w-lg text-base leading-loose">
              Good user experience design is more than Swiss font foundries and
              envy-liking posts on Dribble (though that stuff is good ol' clean
              fun). It's clear value messaging, modern web design, and
              performant code.
            </p>
            <p className="mt-4 lg:max-w-lg text-base leading-loose">
              It's conversion rate optimization, user empathy, and psychology.
              It's providing a consistent experience and knowing what your
              customers want before they think to ask for it.
            </p>
            <p className="mt-4 lg:max-w-lg text-base leading-loose">
              Whether you're a freelancer or work a 9-5, we should all know how
              to solve UX problems. I'm perpetually learning, so if you have any
              tips{" "}
              <Link to={`/contact`} className="text-alt-link">
                contact me
              </Link>
              . If you want tips, join the newsletter.
              <p className="mt-4 lg:max-w-lg text-base leading-loose">
                BTW you're allowed to do both.
              </p>
              <EmailInput />
            </p>
          </section>
          <section className="mt-12 mx-auto lg:m-0 lg:max-w-md xl:max-w-lg">
            <div className="md:flex md:items-center">
              <Image
                fixed={aboutPage.avatar.childImageSharp.fixed}
                className="rounded-full"
              />
              <h2 className="ml-8 text-xl md:text-2xl lg:text-4xl text-black-400">
                Jake Hatfield
              </h2>
            </div>
            <p className="mt-8 lg:max-w-lg text-base leading-loose">
              I graduated in 2016 from Texas A&M with a B.S. in Biology and
              quickly lit that tuition on fire by instead co-founding a software
              company for Amazon sellers a year later. Drinking from a fire hose
              along the way, we scaled it and exited in 18 months.
            </p>
            <p className="mt-4 lg:max-w-lg text-base leading-loose">
              I decided to launch Not Garbage UX as a way to help designers and
              developers with the technical aspects of building successful
              products. I do{" "}
              <Link to={`/saas-web-development`} className="text-alt-link">
                consulting and web development for SaaS companies
              </Link>{" "}
              and live in Dallas with my wife and our dog.
            </p>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage