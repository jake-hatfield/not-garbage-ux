import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CalendlyEmbed from "../components/calendly"
// import { PopupText } from "react-calendly"
import CalendlyButton from "../components/CalendlyButton"
import IconCheck from "../../content/assets/icon-check.svg"
import IconCode from "../../content/assets/icon-code.svg"
import IconEdit from "../../content/assets/icon-edit.svg"
import IconCompass from "../../content/assets/icon-compass.svg"
import IconUserGroup from "../../content/assets/icon-user-group.svg"
import IconChat from "../../content/assets/icon-chat.svg"
import IconPersona from "../../content/assets/icon-persona.svg"
import IconTech from "../../content/assets/icon-tech.svg"
import SaasHeroImage from "../../content/assets/saas-hero-image.svg"
import SaasMissedTargets from "../../content/assets/saas-missed-targets.svg"
import TechAdvantage from "../../content/assets/tech-advantage.svg"
import HeroBlob from "../../content/assets/main-blob.svg"
import Schedule from "../../content/assets/schedule.svg"
import Collaborate from "../../content/assets/collaborate.svg"
import Call from "../../content/assets/call.svg"

const IndexPage = ({ siteTitle }) => {
  const closeCalendly = () => {
    calendlyActive && setCalendlyActive(!calendlyActive)
  }
  const [calendlyActive, setCalendlyActive] = useState(false)

  return (
    <Layout title={siteTitle}>
      <SEO
        title="SaaS Consulting and Web Development"
        description="NGUX helps SaaS companies position their products to drive conversions and increase user retention through better messaging and modern web development."
        keywords={[
          `SaaS consulting`,
          `SaaS web development`,
          `custom software website`,
          `NGUX web development`,
        ]}
      />

      <section className="mb-16 height-100 w-full md:flex md:flex-col md:justify-center md:items-start text-gray-800 relative">
        <header className="lg:pt-32 container lg:flex lg:items-center relative">
          <SaasHeroImage className="mx-auto w-64 md:w-1/2 saas-hero-image" />
          <HeroBlob className="hidden lg:block lg:relative lg:z-0" />
          <div className="mx-auto lg:m-0 md:max-w-xl xl:max-w-2xl relative z-10">
            <h1 className="mt-8 lg:mt-0 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
              Your "meh" SaaS site is undermining your MRR.
            </h1>
            <h2 className="mt-8 lg:max-w-md text-xl text-black-400 leading-relaxed">
              Poor product positioning makes for a garbage user experience and
              puts your churn on steroids.
            </h2>
            <h3 className="mt-4 lg:max-w-lg text-lg leading-loose">
              Your website is your most valuable asset to convert prospective
              users. I help SaaS startups make sure they have the best branding,
              messaging, and technical advantage possible.
            </h3>
            <CalendlyButton
              calendlyActive={calendlyActive}
              setCalendlyActive={setCalendlyActive}
            />
          </div>
        </header>
        <section className="mt-16 lg:mt-64 container lg:flex lg:justify-between">
          <SaasMissedTargets className="mx-auto lg:mx-0 lg:mr-24 lg:sticky saas-sticky-image w-full lg:w-2/5 h-64" />
          <div className="md:mx-auto lg:m-0 md:max-w-xl lg:w-3/5">
            <aside className="mt-8 lg:mt-0">
              <h4 className="text-lg text-gray-600 font-bold">
                Ugly messaging = ugly churn
              </h4>
              <h2 className="mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
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
            <aside className="mt-8 lg:mt-64">
              <h4 className="text-lg text-gray-600 font-bold">
                The same old stuff = the same old results
              </h4>
              <h2 className="mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
                Another site rebrand isn't going to bring home the bacon.
              </h2>
              <p className="mt-4 lg:max-w-lg text-lg leading-loose">
                Hiring a round of designers, copywriters, marketers, and
                developers to re-work your website isn’t going to get the job
                done. A designer doesn’t understand CAC, a copywriter won’t care
                about churn, and a marketer doesn’t get UI design. Heck, a
                developer doesn't care about anything other than code. What you
                really need is a well-rounded SaaS founder.
              </p>
            </aside>
          </div>
        </section>
        <section className="mt-16 lg:mt-48 container lg:flex lg:justify-between relative">
          <header className="md:mx-auto lg:mx-0 lg:mr-16 xl:mr-32 md:max-w-xl lg:w-2/5">
            <h4 className="text-lg text-gray-600 font-bold">
              The MRR alley-oop
            </h4>
            <h2 className="mt-4 text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
              How to dunk on your soon-to-be users from the freethrow line{" "}
              <span className="font-normal text-base text-gray-600">
                (in a good way)
              </span>
            </h2>
            <p className="mt-4 lg:max-w-lg text-lg leading-loose">
              If there’s a disconnect with what your users want and what your
              brand is communicating, you’ll be fighting an uphill user
              retention battle.
            </p>
            <p className="mt-4 lg:max-w-lg text-lg leading-loose">
              Instead, I use several principles to align your unique selling
              proposition with how your users would best describe it themselves.
              I help increase and convey the perceived value of your product by:
            </p>
          </header>
          <aside className="md:mx-auto lg:mx-0 mt-12 lg:mt-0 md:max-w-xl lg:w-3/5">
            <div className="md:flex md:justify-between">
              <div className="md:mr-12 lg:w-1/2">
                <IconPersona className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Identifying your dream persona
                </h3>
                <p className="mt-4 text-gray-800">
                  Founders who cast a wide net inevitably pick up some trash.
                  Rather than marketing wide, I will help you market deep by
                  creating a clear ideal persona (and equally as importantly - a
                  negative persona).
                </p>
              </div>
              <div className="mt-8 md:mt-0 lg:w-1/2">
                <IconChat className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Clarifying your message
                </h3>
                <p className="mt-4 text-gray-800">
                  Your company may solve many problems, but which one(s) do your
                  users care about the most? I will trim the fat from your
                  messaging to serve your users up some filet-mignon quality
                  clarity.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 md:flex md:justify-between">
              <div className="md:mr-12 lg:w-1/2">
                <IconCompass className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Positioning your brand strategically
                </h3>
                <p className="mt-4 text-gray-800">
                  Smart SaaS companies are constantly trying to out-position
                  their competitors so their ideal customers come to them. I
                  will help identify and communicate your strongest advantages
                  to your users.
                </p>
              </div>
              <div className="mt-8 md:mt-0 lg:w-1/2">
                <IconUserGroup className="h-10 w-10" />
                <h3 className="mt-6 lg:text-2xl text-black-400">
                  Converting your power users
                </h3>
                <p className="mt-4 text-gray-800">
                  Time to take action! Your power users are your dream personas
                  matured from caterpillar to butterfly. Once these users fully
                  understand the value in your product, they’ll stick around for
                  a long, long time.
                </p>
              </div>
            </div>
          </aside>
        </section>
        <aside className="mt-16 lg:mt-48 container lg:flex lg:justify-between relative">
          <TechAdvantage className="tech-image" />
          <div className="mt-8 lg:mt-0 md:mx-auto lg:mx-0 md:max-w-xl lg:w-1/3 z-10">
            <IconTech className="h-10 w-10" />
            <h3 className="mt-6 lg:text-2xl text-black-400">
              Immediate tech gains
            </h3>
            <p className="mt-4 text-gray-800">
              It's not enough to make something look good on the surface. NGUX
              sites are optimized under the hood in ways that your competitors
              just aren't.{" "}
              <Link
                to={`/saas-web-development/#no-gotchas`}
                className="text-gray-600 text-lg"
              >
                *{" "}
              </Link>
            </p>
            <p className="mt-4 text-gray-800">
              Using the PRPL pattern, next-gen technology, and streamlined
              deployment techniques, our sites have inherent advantages like:
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
              className="mt-6 lg:w-3/5 text-gray-600 text-sm leading-snug"
            >
              <span className="text-gray-600 text-lg">* </span>
              Big bets: If you can prove to me that a single one of your
              competitors are doing all of these things, I'll code your site
              100% for free.
            </p>
            <p className="mt-6 lg:w-3/5 text-gray-600 text-sm leading-snug">
              If you can't, you have to get on a call with me. As much as I love
              a good waste of time, I recommend{" "}
              <button
                onClick={() => setCalendlyActive(!calendlyActive)}
                className="text-alt-link"
              >
                the call
              </button>
              .
            </p>
          </div>
          <div className="md:mx-auto lg:mx-0 mt-8 md:mt-0 md:max-w-xl lg:w-1/4 lg:text-right z-10">
            <div className="md:mt-8 lg:mt-0 md:flex md:flex-col lg:items-end">
              <IconCode className="h-10 w-10 lg:text-right" />
              <h3 className="mt-6 lg:text-2xl text-black-400">
                Squeaky-clean code
              </h3>
              <p className="mt-4 text-gray-800">
                NGUX page sizes are 6x lighter and load at least 2x faster than
                the internet average. They also use your Google Analytics data
                and AI to pre-load the next pages users are most likely to
                visit, providing a seamless UX and boosting conversions.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 md:flex md:flex-col lg:items-end">
              <IconEdit className="h-10 w-10" />
              <h3 className="mt-6 lg:text-2xl text-black-400">
                CMS flexibility
              </h3>
              <p className="mt-4 text-gray-800">
                It's your site, so you should know how to use it. NGUX sites can
                be used with essentially any CMS, saving you time and a steep
                learning curve. Worry less about your content management system
                and more about your actual content, like it should be.
              </p>
            </div>
          </div>
        </aside>
        <section className="mt-16 lg:mt-48 container">
          <h2 className="text-center text-xl md:text-2xl lg:text-4xl text-black-400 font-black">
            Interested in the MRR alley-oop?
          </h2>
          <h3 className="mt-6 text-center lg:text-xl text-black-400 leading-relaxed">
            Let's evaluate your SaaS positioning and technical advantages with a
            free 30 minute consultation.
          </h3>
          <ol className="mt-12 lg:mt-24 md:flex md:justify-between counter-reset text-center">
            <li className="counter">
              <h3
                id="next-steps"
                className="mt-12 md:mt-0 text-lg font-bold text-black-400"
              >
                Schedule a free chat
              </h3>
              <Schedule className="mt-8 mx-auto h-40 w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-64" />
            </li>
            <li className="counter">
              <h3
                id="next-steps"
                className="mt-12 md:mt-0 text-lg font-bold text-black-400"
              >
                Discuss your challenges
              </h3>
              <Call className="mt-8 mx-auto h-40 w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-64" />
            </li>
            <li className="counter">
              <h3
                id="next-steps"
                className="mt-12 md:mt-0 text-lg font-bold text-black-400"
              >
                Collaborate if we're a good fit
              </h3>
              <Collaborate className="mt-8 mx-auto h-40 w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-64" />
            </li>
          </ol>
          <div className="mt-6 md:flex md:justify-center">
            <CalendlyButton
              calendlyActive={calendlyActive}
              setCalendlyActive={setCalendlyActive}
            />
          </div>
        </section>
      </section>
      <div>
        <CalendlyEmbed
          account="jake-hatfield"
          eventName="saas-clarity-call"
          calendlyActive={calendlyActive}
          setCalendlyActive={setCalendlyActive}
        />
      </div>
      {/* <button className="mt-12 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline">
        <PopupText
          color="#050505"
          text="Book a clarity call"
          textColor="#050505"
          className={`${
            calendlyActive ? `block lg:flex lg:items-center` : `hidden`
          }`}
          url="https://calendly.com/jake-hatfield/saas-clarity-call"
        />
      </button> */}
    </Layout>
  )
}

export default IndexPage
