import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="height-100 mt-16 container md:flex md:items-start">
        <header className="md:mr-32 md:max-w-lg xl:max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
            Contact Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            maiores repellendus totam tenetur quas excepturi beatae culpa sunt.
            Quod, fuga.
          </p>
        </header>
        <div className="mt-8 md:mt-16 lg:mt-0 w-full lg:w-7/12 py-4 px-6 md:py-6 md:px-8 lg:py-12 lg:px-16 bg-white border-t-8 border-black-400 double-shadow">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="hero-optin" value="contact" />
            <div>
              <p>
                <label for="name" className="header-font text-gray-600 text-xl">
                  Your Name
                  <input
                    type="name"
                    name="name"
                    label="Your Name"
                    placeholder="Wonder Woman"
                    className="block mt-4 mb-4 p-3 md:p-4 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline text-base"
                  />
                </label>

                <label
                  for="email"
                  className="header-font text-gray-600 text-xl"
                >
                  Your Email
                  <input
                    type="email"
                    name="email"
                    label="Your Email"
                    placeholder="wonderwoman@email.com"
                    className="block mt-4 mb-4 p-4 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline text-base"
                  />
                </label>
                <label className="header-font text-gray-600 text-xl">
                  Your Message
                  <textarea
                    name="message"
                    placeholder="Let's connect! I want to hear from you :)"
                    className="block mt-4 body-text text-base resize-none pt-4 px-4 pb-16 md:pr-12 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 md:mt-0 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
                >
                  Send message
                </button>
              </p>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  )
}

export default contact
