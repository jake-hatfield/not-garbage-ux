import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="mt-8 lg:mt-16 height-alt relative lg:flex lg:items-center">
        <div className="absolute bottom-0 left-0 h-64 w-full bg-gray-300 negative-z" />
        <section className="pb-16 container md:w-3/4 lg:w-full lg:flex lg:items-start">
          <header className="md:mt-16 lg:mr-16 md:max-w-lg xl:max-w-lg md:text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
              Contact me
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Reach out if you wanna watch B movies, play Nintendo games, and
              drink IPAs together. Oh, also if you have a question or article
              request about UX design.
            </p>
            <p className="mt-8 text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Priorities.
            </p>
          </header>
          <div className="mt-8 lg:mt-0 p-4 md:py-6 md:px-8 lg:py-12 lg:px-16 w-full lg:w-7/12 z-10 bg-white border-t-8 border-black-400 double-shadow">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="contact-page" value="contact" />
              <div>
                <p>
                  <label
                    for="name"
                    className="header-font text-gray-600 text-xl"
                  >
                    Your name
                    <input
                      type="name"
                      name="name"
                      label="Your Name"
                      placeholder="Your Name"
                      required
                      className="block mt-4 mb-4 p-3 md:p-4 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline text-base"
                    />
                  </label>

                  <label
                    for="email"
                    className="mt-4 inline-block w-full header-font text-gray-600 text-xl"
                  >
                    Your email
                    <input
                      type="email"
                      name="email"
                      label="Your Email"
                      placeholder="youremail@domain.com"
                      required
                      className="block mt-4 mb-4 p-4 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline text-base"
                    />
                  </label>
                  <label className="mt-4 mb-6 inline-block w-full header-font text-gray-600 text-xl">
                    Your message
                    <textarea
                      name="message"
                      placeholder="Contact form messages are the gateway to the soul."
                      required
                      className="block mt-4 body-text text-base resize-none pt-4 px-4 pb-16 md:pr-12 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-4 md:mt-0 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg font-bold alt-border focus:outline-none focus:shadow-outline"
                  >
                    Send message
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default contact
