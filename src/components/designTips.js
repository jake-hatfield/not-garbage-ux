import React from "react"
import { animated } from "react-spring"
import Img from "gatsby-image"

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
        className={`mt-8 md:mt-12 lg:mt-16 container md:max-w-lg xl:max-w-xl h-screen md:text-center header-font`}
      >
        <Img
          className="mx-auto block h-32 w-32 md:h-48 md:w-48 lg:h-56 lg:w-56"
          fluid={fluid}
        />
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Want the inside scoop?
          </h3>
          <p className="mt-4 body-font text-lg lg:text-xl">
            We make it rain on your inbox with weekly UX design tips and case
            studies not found on the blog.
          </p>
          <form action="" className="mt-4 md:relative">
            <input
              placeholder="Enter your email"
              name="email"
              type="text"
              className="p-3 md:p-4 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="mt-4 md:mt-0 p-3 md:p-4 w-full md:w-auto md:absolute right-0 bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
            >
              Learn not garbage UX
            </button>
          </form>
          <button
            onClick={() => setDesignTipsOpen(!designTipsOpen)}
            className="hidden lg:block mx-auto body-font text-lg alt-link"
          >
            Nah, I'll pass
          </button>
        </div>
      </section>
    </animated.article>
  )
}

export default designTips
