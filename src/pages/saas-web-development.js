import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IconCheck from "../../content/assets/icon-check.svg"
import IconCode from "../../content/assets/icon-code.svg"
import IconEdit from "../../content/assets/icon-edit.svg"
import SaasHeroImage from "../../content/assets/saas-hero-image.svg"
import SaasLaunch from "../../content/assets/launching-saas.svg"
import TechAdvantage from "../../content/assets/tech-advantage.svg"
import BlobLeft from "../../content/assets/blob-left.svg"
import BlobMiddle from "../../content/assets/blob-middle.svg"
import BlobRight from "../../content/assets/blob-right.svg"

const IndexPage = siteTitle => {
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <section className="mb-16 height-100 w-full md:flex md:flex-col md:justify-center md:items-start text-gray-800 ">
        <header className="lg:mt-32 container md:flex md:items-center relative z-0">
          <div className="mx-auto lg:m-0 md:max-w-xl xl:max-w-2xl">
            <SaasHeroImage className="saas-hero-image" />
            <h1 className="mt-8 lg:mt-0 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
              Your "meh" SaaS site is goofing up your potential MRR.
            </h1>
            <h2 className="mt-8 text-xl text-black-400 leading-relaxed">
              Poor product positioning puts your churn on steroids.
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
          <SaasLaunch className="lg:sticky saas-sticky-image h-64 w-64" />
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
              <h4 className="text-lg text-gray-600 font-bold">
                Ugly messaging = ugly churn
              </h4>
              <h2 className="mt-8 lg:mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
                Does your current customer acquisition strategy make you want to
                puke?
              </h2>
              <p className="mt-4 lg:max-w-lg text-lg leading-loose">
                Messaging that doesn't resonate with your ideal customer
                attracts more costly & less qualified users. Not only does this
                misalignment kill your LTV:CAC, but it puts a bigger strain on
                your customer support systems as well. Gross.
              </p>
            </aside>
          </div>
        </section>
        <section className="mt-16 lg:mt-64 container lg:flex lg:justify-between">
          <header className="md:mx-auto lg:mx-0 lg:mr-24 xl:mr-32 md:max-w-xl lg:w-2/5">
            <h4 className="text-lg text-gray-600 font-bold">The solution 2</h4>
            <h2 className="mt-8 lg:mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
              Does your current customer acquisition strategy make you want to
              puke?
            </h2>
            <p className="mt-4 lg:max-w-lg text-lg leading-loose">
              Messaging that doesn't resonate with your ideal customer attracts
              more expensive, less qualified users. Not only does this
              misalignment kill your LTV:CAC, but it puts a bigger strain on
              your customer support systems as well.
            </p>
          </header>
          <aside className="md:mx-auto lg:mx-0 mt-12 lg:mt-0 md:max-w-xl lg:w-3/5">
            <div className="md:flex md:justify-between">
              <div className="mr-16 lg:mr-12 lg:w-1/2">
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
              <div className="mt-8 md:mt-0 lg:w-1/2">
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
              <div className="mr-16 lg:mr-12 lg:w-1/2">
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
              <div className="mt-8 md:mt-0 lg:w-1/2">
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
        <aside className="mt-16 lg:mt-64 container lg:flex lg:justify-between relative">
          <TechAdvantage className="tech-image" />
          <div className="md:mx-auto lg:mx-0 md:max-w-xl lg:w-1/3 z-10">
            <IconCheck className="h-10 w-10" />
            <h3 className="mt-6 lg:text-2xl text-black-400">Not Garbage UX</h3>
            <p className="mt-4 text-gray-800">
              It's not enough to make something look good on the surface. NGUX
              sites are optimized under the hood in ways that we're willing to
              bet your competitors simply aren't.{" "}
              <Link
                to={`/saas-web-development/#no-gotchas`}
                className="text-gray-600 text-lg"
              >
                *{" "}
              </Link>
              <p className="mt-4 text-gray-800">
                Using the PRPL pattern, next-gen technology, and streamlined
                deployment techniques, our sites have inherent advantages like:
              </p>
            </p>
            <div className="mt-6">
              <p className="flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Baseline
                image optimization
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Significant
                SEO boosts
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" />
                Near-unhackable security
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> Actually
                accurate analytics
              </p>
              <p className="mt-3 flex items-center">
                <IconCheck className="mr-4 inline-block h-5 w-5" /> App-like web
                experiences
              </p>
            </div>
            <p
              id="no-gotchas"
              className="mt-6 w-3/5 text-gray-600 text-sm leading-snug"
            >
              <span className="text-gray-600 text-lg">* </span>
              No gotchas. How about this: if your competitors are doing all of
              these things, I'll code your site 100% for free.
            </p>
          </div>
          <div className="md:mx-auto lg:mx-0 mt-8 md:mt-0 md:max-w-xl lg:w-1/4 lg:text-right z-10">
            <div className="md:mt-8 lg:mt-0 md:flex md:flex-col lg:items-end">
              <IconCode className="h-10 w-10 lg:text-right" />
              <h3 className="mt-6 lg:text-2xl text-black-400">
                Squeaky clean code
              </h3>
              <p className="mt-4 text-gray-800">
                NGUX page sizes are 6x lighter and load ~3x faster than the
                internet average. They also use your Google Analytics data and
                AI to pre-load the next pages users are most likely to visit,
                providing a seamless & enjoyable user experience.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 md:flex md:flex-col lg:items-end">
              <IconEdit className="h-10 w-10" />
              <h3 className="mt-6 lg:text-2xl text-black-400">
                CMS flexibility
              </h3>
              <p className="mt-4 text-gray-800">
                It's your site, so you should know how to use it. NGUX sites can
                be used with essentially any CMS, saving you time and an
                uneccessary learning curve. Worry less about your content
                management system and more about your actual content, like it
                should be.
              </p>
            </div>
          </div>
        </aside>
        <section className="mt-8 lg:mt-16 container">
          <h2 className="text-center text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
            Are we a good fit?
          </h2>
          <ol className="mt-12 lg:mt-24 lg:flex lg:justify-between counter-reset text-center">
            <li className="counter">
              <h3 id="next-steps" className="text-2xl font-bold text-black-400">
                Hello
              </h3>
              <BlobLeft className="mt-8 mx-auto h-48 w-48" />
            </li>
            <li className="counter">
              <h3 id="next-steps" className="text-2xl font-bold text-black-400">
                Hello
              </h3>
              <BlobMiddle className="mt-8 mx-auto h-48 w-48" />
            </li>
            <li className="counter">
              <h3 id="next-steps" className="text-2xl font-bold text-black-400">
                Hello
              </h3>
              <BlobRight className="mt-8 mx-auto h-48 w-48" />
            </li>
          </ol>
          <div className="mt-12 lg:mt-24 md:flex md:justify-center">
            <button
              type="submit"
              className="p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
            >
              Book a clarity call
            </button>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage
