import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../../content/assets/hero-image.svg"
import IconCheck from "../../content/assets/icon-check.svg"

const IndexPage = siteTitle => {
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <section className="mb-16 height-100 w-full md:flex md:flex-col md:justify-center md:items-start">
        <header className="lg:mt-32 container md:flex md:items-center relative z-0">
          <div className="mx-auto lg:m-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <HeroImage className="hero-image" />
            <h1 className="mt-8 lg:mt-0 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
              Your SaaS site is wrecking your MRR.
            </h1>
            <h2 className="mt-8 text-xl text-black-400 leading-relaxed">
              Poor product positioning is a surefire way to put your churn on
              steroids.
            </h2>
            <h3 className="mt-4 lg:max-w-lg text-lg leading-loose">
              I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
              chartreuse master cleanse flannel whatever yr. Glossier beard
              marfa iceland whatever poke. Pitchfork
            </h3>
            <button
              type="submit"
              className="mt-12 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
            >
              Book a clarity call
            </button>
          </div>
        </header>
        <section className="mt-16 lg:mt-64 container md:flex md:justify-between">
          <HeroImage className="lg:sticky saas-sticky-image h-64 w-64" />
          <div className="lg:w-2/5">
            <aside className="mt-8 lg:mt-0">
              <h4 className="text-lg text-gray-600 font-bold">The solution</h4>
              <h2 className="mt-8 lg:mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
                Your "meh" SaaS site is shooting your MRR in the foot.
              </h2>
              <p className="mt-4 lg:max-w-lg text-lg leading-loose">
                I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
                chartreuse master cleanse flannel whatever yr. Glossier beard
                marfa iceland whatever poke. Pitchfork
              </p>
            </aside>
            <aside className="mt-8 lg:mt-64">
              <h4 className="text-lg text-gray-600 font-bold">The solution</h4>
              <h2 className="mt-8 lg:mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
                Your "meh" SaaS site is shooting your MRR in the foot.
              </h2>
              <p className="mt-4 lg:max-w-lg text-lg leading-loose">
                I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
                chartreuse master cleanse flannel whatever yr. Glossier beard
                marfa iceland whatever poke. Pitchfork
              </p>
            </aside>
          </div>
        </section>
        <section className="mt-16 lg:mt-64 container lg:flex lg:justify-between">
          <header className="lg:mr-24 xl:mr-32 lg:w-2/5">
            <h4 className="text-lg text-gray-600 font-bold">The solution 2</h4>
            <h2 className="mt-8 lg:mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
              Your "meh" SaaS site is shooting your MRR in the foot.
            </h2>
            <p className="mt-4 lg:max-w-lg text-lg leading-loose">
              I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
              chartreuse master cleanse flannel whatever yr. Glossier beard
              marfa iceland whatever poke. Pitchfork
            </p>
          </header>
          <aside className="mt-12 lg:mt-0 lg:w-3/5">
            <div className="md:flex md:justify-between">
              <div className="lg:mr-12 lg:w-1/2">
                <IconCheck className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Thing number one
                </h3>
                <p className="mt-4 text-gray-800">
                  I'm baby biodiesel palo santo knausgaard lo-fi food truck
                  tumblr chartreuse master cleanse flannel whatever yr. Glossier
                  beard marfa iceland whatever poke. Pitchfork
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <IconCheck className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Thing number uno
                </h3>
                <p className="mt-4 text-gray-800">
                  I'm baby biodiesel palo santo knausgaard lo-fi food truck
                  tumblr chartreuse master cleanse flannel whatever yr. Glossier
                  beard marfa iceland whatever poke. Pitchfork
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 md:flex md:justify-between">
              <div className="lg:mr-12 lg:w-1/2">
                <IconCheck className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Thing number two
                </h3>
                <p className="mt-4 text-gray-800">
                  I'm baby biodiesel palo santo knausgaard lo-fi food truck
                  tumblr chartreuse master cleanse flannel whatever yr. Glossier
                  beard marfa iceland whatever poke. Pitchfork
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <IconCheck className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Thing number one
                </h3>
                <p className="mt-4 text-gray-800">
                  I'm baby biodiesel palo santo knausgaard lo-fi food truck
                  tumblr chartreuse master cleanse flannel whatever yr. Glossier
                  beard marfa iceland whatever poke. Pitchfork
                </p>
              </div>
            </div>
          </aside>
        </section>
        <aside className="mt-16 lg:mt-64 container md:flex md:justify-between">
          <div className="w-64">
            <IconCheck className="h-10 w-10" />
            <h3 className="mt-6 lg:text-2xl text-black-400">
              Thing number one
            </h3>
            <p className="mt-4 text-gray-800">
              I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
              chartreuse master cleanse flannel whatever yr. Glossier beard
              marfa iceland whatever poke. Pitchfork
            </p>
            <div className="mt-8">
              <p className="flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Lorem Ipsum
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Lorem Ipsum
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Lorem Ipsum
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Lorem Ipsum
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-64 lg:text-right">
            <div className="md:flex md:flex-col md:items-end">
              <IconCheck className="h-10 w-10 text-right" />
              <h3 className="mt-6 lg:text-2xl text-black-400">
                Thing number one
              </h3>
              <p className="mt-4 text-gray-800">
                I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
                chartreuse master cleanse flannel whatever yr.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 md:flex md:flex-col md:items-end">
              <IconCheck className="h-10 w-10" />
              <h3 className="mt-6 lg:text-2xl text-black-400">
                Thing number one
              </h3>
              <p className="mt-4 text-gray-800">
                I'm baby biodiesel palo santo knausgaard lo-fi food truck tumblr
                chartreuse master cleanse flannel whatever yr.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  )
}

export default IndexPage
