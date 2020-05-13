import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicy = () => {
  return (
    <Layout title="Privacy Policy">
      <SEO
        title="Privacy Policy"
        description="Not Garbage UX values your privacy as much as we value our own. Here's our full privacy policy."
      />
      <div className="my-6 lg:my-12 container height-100">
        <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl text-black-400 font-black">
          Welcome to our privacy policy
        </h1>
        <p className="mt-4">
          It is our policy to respect your privacy regarding any information we
          may collect while operating our website. This Privacy Policy applies
          to{" "}
          <Link to={"https://notgarbageux.com/"} className="alt-link">
            https://notgarbageux.com/
          </Link>{" "}
          (hereinafter, "us", "we", or "Not Garbage UX"). We respect your
          privacy and are committed to protecting personally identifiable
          information you may provide us through the Website. We have adopted
          this privacy policy ("Privacy Policy") to explain what information may
          be collected on our Website, how we use this information, and under
          what circumstances we may disclose the information to third parties.
          This Privacy Policy applies only to information we collect through the
          Website and does not apply to our collection of information from other
          sources.
        </p>
        <p className="mt-4">
          This Privacy Policy, together with the Terms and conditions posted on
          our Website, set forth the general rules and policies governing your
          use of our Website. Depending on your activities when visiting our
          Website, you may be required to agree to additional terms and
          conditions.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">
          Website Visitors
        </h2>
        <p className="mt-4">
          Like most website operators, Not Garbage UX collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. Not Garbage UX's purpose in collecting non-personally
          identifying information is to better understand how Not Garbage UX's
          visitors use its website. From time to time, Not Garbage UX may
          release non-personally-identifying information in the aggregate, e.g.,
          by publishing a report on trends in the usage of its website.
        </p>
        <p className="mt-4">
          Not Garbage UX also collects potentially personally-identifying
          information like Internet Protocol (IP) addresses for logged in users
          and for users leaving comments on https://notgarbageux.com/ blog
          posts. Not Garbage UX only discloses logged in user and commenter IP
          addresses under the same circumstances that it uses and discloses
          personally-identifying information as described below.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">
          Gathering of Personally-Identifying Information
        </h2>
        <p className="mt-4">
          Certain visitors to Not Garbage UX's websites choose to interact with
          Not Garbage UX in ways that require Not Garbage UX to gather
          personally-identifying information. The amount and type of information
          that Not Garbage UX gathers depends on the nature of the interaction.
          For example, we ask visitors who sign up for the design tip newsletter
          at https://notgarbageux.com/ to provide an email address.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">Security</h2>
        <p className="mt-4">
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">
          Links To External Sites
        </h2>
        <p className="mt-4">
          Our Service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy and terms and conditions of every site you visit.
        </p>
        <p className="mt-4">
          We have no control over, and assume no responsibility for the content,
          privacy policies or practices of any third party sites, products or
          services.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">
          Aggregated Statistics
        </h2>
        <p className="mt-4">
          Not Garbage UX may collect statistics about the behavior of visitors
          to its website. Not Garbage UX may display this information publicly
          or provide it to others. However, Not Garbage UX does not disclose
          your personally-identifying information.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">Cookies</h2>
        <p className="mt-4">
          To enrich and perfect your online experience, Not Garbage UX uses
          "Cookies", similar technologies and services provided by others to
          display personalized content, appropriate advertising and store your
          preferences on your computer.
        </p>
        <p className="mt-4">
          A cookie is a string of information that a website stores on a
          visitor's computer, and that the visitor's browser provides to the
          website each time the visitor returns. Not Garbage UX uses cookies to
          help Not Garbage UX identify and track visitors, their usage of
          https://notgarbageux.com/, and their website access preferences. Not
          Garbage UX visitors who do not wish to have cookies placed on their
          computers should set their browsers to refuse cookies before using Not
          Garbage UX's websites, with the drawback that certain features of Not
          Garbage UX's websites may not function properly without the aid of
          cookies.
        </p>
        <p className="mt-4">
          By continuing to navigate our website without changing your cookie
          settings, you hereby acknowledge and agree to Not Garbage UX's use of
          cookies.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">
          Privacy Policy Changes
        </h2>
        <p className="mt-4">
          Although most changes are likely to be minor, Not Garbage UX may
          change its Privacy Policy from time to time, and in Not Garbage UX's
          sole discretion. Not Garbage UX encourages visitors to frequently
          check this page for any changes to its Privacy Policy. Your continued
          use of this site after any change in this Privacy Policy will
          constitute your acceptance of such change.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-black-400">
          Contact Information
        </h2>
        <p className="mt-4">
          If you have any questions about this Privacy Policy, please contact us
          via our{" "}
          <Link to={`/contact`} className="alt-link">
            contact form
          </Link>
          .
        </p>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
