import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailInput from "../components/emailInput"
import VisibilitySensor from "react-visibility-sensor"
import { animated, useSpring } from "react-spring"
import HeroImage from "../../content/assets/hero-image.svg"
import IconCheck from "../../content/assets/icon-check.svg"

const IndexPage = ({ siteTitle }) => {
  const isVisible = useState(false)
  const fade = useSpring({ opacity: isVisible ? 1 : 0, delay: 300 })

  return (
    <Layout title={siteTitle}>
      <SEO
        title="UX Tips, Strategies, and Case Studies"
        keywords={[`UX tips`, `UX design`, `user experience`, `not garbage ux`]}
      />
      <section className="height-100 mb-16 w-full md:flex md:items-center lg:flex-col lg:justify-center lg:items-start">
        <header className="container relative z-0">
          <section className="mx-auto lg:m-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <HeroImage className="hero-image" />
            <VisibilitySensor>
              {({ isVisible }) => (
                <animated.h1
                  className="mt-8 lg:mt-0 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black"
                  style={fade}
                >
                  Incredible design that doesn't solve a problem is{" "}
                  <span className="emphasis">garbage UX</span>
                </animated.h1>
              )}
            </VisibilitySensor>
            <h2 className="mt-8 text-xl text-black-400 leading-relaxed">
              Fact: Amazing illustrators, developers, and designers can still be
              awful at creating a good user experience.
            </h2>
            <h3 className="mt-4 lg:max-w-lg text-lg leading-loose">
              Learn how to solve tough problems, hone your skills, become
              well-rounded, and suck less at UX design.
            </h3>
            <EmailInput />
            <aside className="md:max-w-lg">
              <p className="text-lg">
                These tips and case studies will help you learn:
              </p>
              <div className="mt-3 flex items-center">
                <IconCheck className="h-6 w-6 inline-block" />{" "}
                <h3 className="ml-4 inline-block body-font">
                  Crystal-clear product strategy
                </h3>
              </div>
              <div className="mt-3 flex items-center">
                <IconCheck className="h-6 w-6 inline-block" />{" "}
                <h3 className="ml-4 inline-block body-font">
                  Tactical user interface design
                </h3>
              </div>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <animated.div className="mt-3 flex items-center" style={fade}>
                    <IconCheck className="h-6 w-6 inline-block" />{" "}
                    <h3 className="ml-4 inline-block body-font">
                      Data-informed UX positioning
                    </h3>
                  </animated.div>
                )}
              </VisibilitySensor>
            </aside>
          </section>
        </header>
      </section>
    </Layout>
  )
}

export default IndexPage
