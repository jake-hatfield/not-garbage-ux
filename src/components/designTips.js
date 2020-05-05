import React from "react"
import { animated } from "react-spring"
import DesignTips from "../../content/assets/design-tips.svg"
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
        <DesignTips className="mx-auto block h-48 w-48 md:h-48 md:w-48 lg:w-3/4" />
        <div className="lg:mx-auto lg:mt-8 lg:text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black-400 md:text-center">
            Want the inside scoop?
          </h3>
          <p className="mt-4 body-font text-base md:text-lg lg:text-xl text-gray-600">
            We make it rain on your inbox with weekly UX design tips and case
            studies not found on the blog. Ya have FOMO yet?
          </p>
          <div className="mx-auto">
            <EmailInput />
          </div>
          <p className="mt-4 body-font text-base md:text-lg text-gray-600">
            No freebies, limited time offers, or spam - just one article a week.
          </p>
          <div className="text-center">
            <button
              onClick={() => setDesignTipsOpen(!designTipsOpen)}
              className="mt-4 mb-64 mx-auto body-font text-lg text-gray-800 alt-link"
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
