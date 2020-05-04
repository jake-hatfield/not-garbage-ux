import React, { useState } from "react"
import { animated } from "react-spring"
import Img from "gatsby-image"
import EmailInput from "../components/emailInput"

const designTips = ({
  designTipsOpen,
  setDesignTipsOpen,
  designTipsAnimation,
  fluid,
}) => {
  return (
    <animated.article
      style={designTipsAnimation}
      className={`${
        designTipsOpen ? `design-tips` : `design-tips-animate`
      } bg-white`}
    >
      <section
        className={`md:mt-12 lg:mt-16 container md:max-w-xl xl:max-w-2xl h-screen header-font`}
      >
        <Img
          className="mx-auto block h-24 w-24 md:h-48 md:w-48 lg:h-56 lg:w-56"
          fluid={fluid}
        />
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold md:text-center">
            Want the inside scoop?
          </h3>
          <p className="mt-4 body-font text-lg lg:text-lg text-gray-600">
            We make it rain on your inbox with weekly UX design tips and case
            studies not found on the blog. Ya have FOMO yet?
          </p>
          <EmailInput />
          <p className="mt-4 body-font text-lg lg:text-lg text-gray-600">
            No freebies, limited time offers, or spam - just one article a week.
          </p>
          <div className="text-center">
            <button
              onClick={() => setDesignTipsOpen(!designTipsOpen)}
              className="mt-4 mb-8 mx-auto body-font text-lg text-gray-800 alt-link"
            >
              Nah, I'll pass
            </button>
          </div>
        </div>
      </section>
    </animated.article>
  )
}

export default designTips
