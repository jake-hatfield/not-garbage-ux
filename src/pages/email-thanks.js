import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import IconCheck from "../../content/assets/icon-check.svg"

const EmailThanks = ({ siteTitle }) => {
  return (
    <Layout title={siteTitle}>
      <SEO
        title="Thank You For Subscribing"
        keywords={[`ux design tips`, `not garbage UX newsletter`]}
      />
      <section className="height-alt my-8 md:my-16 container md:max-w-xl lg:max-w-2xl">
        <h1 className="text-3xl md:text-4xl text-black-400 font-black">
          Thanks for signing up for my list.
        </h1>
        <p className="mt-10">
          Since you're reading this I imagine you want to learn about how to
          bridge the technology gap between human beings and our future robot
          overlords. Strap in.
        </p>
        <p className="mt-5">
          I put a lot of time and energy into these weekly emails to condense
          advanced UX design principles into digestible pieces.
        </p>
        <p className="mt-5">
          Not Garbage UX was created for me to be able to share not only the
          aesthetic UI tips I've picked up on, but also things like:
        </p>
        <aside className="mt-10 md:max-w-lg">
          <div className="mt-5 flex items-center">
            <IconCheck className="h-6 w-6 inline-block" />{" "}
            <h3 className="ml-4 inline-block body-font">
              Clean web development
            </h3>
          </div>
          <div className="mt-5 flex items-center">
            <IconCheck className="h-6 w-6 inline-block" />{" "}
            <h3 className="ml-4 inline-block body-font">
              User research & psychology
            </h3>
          </div>
          <div className="mt-5 flex items-center">
            <IconCheck className="h-6 w-6 inline-block" />{" "}
            <h3 className="ml-4 inline-block body-font">
              Messaging and marketing
            </h3>
          </div>
          <div className="mt-5 flex items-center">
            <IconCheck className="h-6 w-6 inline-block" />{" "}
            <h3 className="ml-4 inline-block body-font">
              High-level design theory
            </h3>
          </div>
          <div className="mt-5 flex items-center">
            <IconCheck className="h-6 w-6 inline-block" />{" "}
            <h3 className="ml-4 inline-block body-font">Product positioning</h3>
          </div>
          <div className="mt-5 flex items-center">
            <IconCheck className="h-6 w-6 inline-block" />{" "}
            <h3 className="ml-4 inline-block body-font">
              Prototyping & testing
            </h3>
          </div>
        </aside>
        <p className="mt-10">
          I don't claim to know everything, but I hope at least some of what I
          share is useful to you. If you aren't getting anything out of these
          emails,{" "}
          <Link to={`/contact`} className="text-alt-link">
            call me names and tell me what to do better
          </Link>
          .
        </p>
        <p className="mt-5">
          My goal is to keep this email list small. I want to be able to respond
          to every single email that I receive from you. If you wanna test if
          that's working, try it out.
        </p>
        <p className="mt-5">
          By the way, the content in my weekly UX emails isn't shared anywhere
          else, but it's just potatoes compared to my in-depth writing and
          videos. I can only educate so much via email, so if you want the real
          meat be sure to check out the supporting content that goes along with
          each topic.
        </p>
        <p className="mt-5">That's all for now. See ya on Tuesday.</p>
        <p className="mt-5">Jake</p>
      </section>
    </Layout>
  )
}

export default EmailThanks
