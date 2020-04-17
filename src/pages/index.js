import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../../content/assets/hero-image.svg"

const IndexPage = siteTitle => {
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="height-100 mb-16 w-full md:flex md:items-center lg:flex-col lg:justify-center lg:items-start">
        <header className="container relative z-0">
          <section className="mx-auto lg:m-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <div className="">
              <Image className="hero-image" />
            </div>
            <h1 className="mt-8 lg:mt-0 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
              Incredible design that doesn't solve a problem is{" "}
              <span className="emphasis">garbage UX</span>
            </h1>
            <h2 className="mt-8 text-lg lg:max-w-2xl leading-relaxed">
              You're wasting time with unnecessary, unusable design. <br />{" "}
              Learn how to solve user experience problems that top companies{" "}
              <span className="emphasis">actually</span> care about.
            </h2>
            <form action="" className="mt-12 md:max-w-lg md:relative">
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
            <aside className="md:max-w-lg md:flex md:justify-between ">
              <h3 className="inline-block body-font">Tactical design tips</h3>
              <h3 className="inline-block body-font">UX positioning</h3>
              <h3 className="inline-block body-font">
                Crystal-clear product strategy
              </h3>
            </aside>
          </section>
        </header>
      </article>
    </Layout>
  )
}

export default IndexPage
