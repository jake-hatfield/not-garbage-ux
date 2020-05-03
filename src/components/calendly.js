import React, { useEffect } from "react"
import { animated, useSpring } from "react-spring"

const Calendly = ({ account, eventName, calendlyActive }) => {
  const buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`
  const calendlyScriptSrc =
    "https://assets.calendly.com/assets/external/widget.js"

  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", calendlyScriptSrc)
    head.appendChild(script)
    return function cleanup() {
      const head = document.querySelector("head")
      const script = document.querySelector("script")
      head.removeChild(script)
    }
  })

  return (
    <animated.div
      id="schedule_form"
      className={`${calendlyActive ? `block` : `hidden`} calendly`}
    >
      <div
        className="calendly-inline-widget"
        data-url={buildCalendlyUrl(account, eventName)}
        style={{ minWidth: "480px", height: "640px" }}
      />
    </animated.div>
  )
}

export default Calendly
