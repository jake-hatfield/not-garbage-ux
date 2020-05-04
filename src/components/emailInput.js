import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { animated, useSpring } from "react-spring"

const EmailInput = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [redundant, setRedundant] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        console.log(data.result)
        console.log(failure)
        if (
          (data.result === "error") &
          (success == true) &
          (failure == false)
        ) {
          setSuccess(!success)
          setFailure(!failure)
          setRedundant(!redundant)
        } else if (
          (data.result === "error") & (failure == false) ||
          success == true
        ) {
          setFailure(!failure)
        } else if ((data.result === "success") & (failure == true)) {
          setFailure(!failure)
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
  const fade = useSpring({
    opacity: success || failure || redundant ? 1 : 0,
  })

  return (
    <div className="md:max-w-lg">
      <animated.p
        className={`${
          success ? `block` : `hidden`
        } mt-2 mb-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400`}
        style={fade}
      >
        You're in. Please <strong>don't</strong> verify your email address.
        <span className="text-xs"> (Reverse psychology)</span>
      </animated.p>
      <animated.p
        className={`${
          failure ? `block` : `hidden`
        } mt-2 mb-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400`}
        style={fade}
      >
        {redundant
          ? `You've already signed up for these fire tips. Chill & check your inbox.`
          : `AHHH. We're throwin' errors. Try a different email to
      make it stop.`}
      </animated.p>

      <form
        onSubmit={handleSubmit}
        className={`${
          success || failure || redundant ? `mt-2` : `mt-8`
        } md:relative`}
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
