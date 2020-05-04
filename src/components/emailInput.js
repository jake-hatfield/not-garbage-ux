import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { animated, useSpring } from "react-spring"

const EmailInput = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        if (data.result === "success") {
          setSuccess(!success)
        }
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }
  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }
  const fade = useSpring({ opacity: success ? 1 : 0, timeout: 5000 })
  return (
    <div>
      <animated.p
        className={`${
          success ? `block` : `hidden`
        } mt-2 mb-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400`}
        style={fade}
      >
        Please <strong>don't</strong> verify your email address. Reverse
        psychology.
      </animated.p>
      <form
        onSubmit={handleSubmit}
        className={`${success ? `mt-2` : `mt-8`} md:max-w-lg md:relative`}
      >
        <input
          placeholder="Enter your email"
          onChange={handleEmailChange}
          name="email"
          type="text"
          required
          className="p-3 md:p-4 w-full bg-gray-200 alt-border focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="mt-4 md:mt-0 p-3 md:p-4 w-full md:w-auto md:absolute right-0 bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
        >
          Learn not garbage UX
        </button>
      </form>
    </div>
  )
}

export default EmailInput
