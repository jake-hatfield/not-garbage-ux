import React, { useEffect } from "react"
import { animated, useSpring, config } from "react-spring"
import Close from "../../content/assets/close.svg"

const Calendly = ({
  account,
  eventName,
  calendlyActive,
  setCalendlyActive,
}) => {
  const calendlyScriptSrc =
    "https://assets.calendly.com/assets/external/widget.js"
  const buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`

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

  // const calendlyAnimation = useSpring({
  //   transform: calendlyActive
  //     ? `translate3d(0%,0,0)`
  //     : `translate3d(-100%,0,0)`,
  //   config: config.slow,
  // })
  const fade = useSpring({ opacity: calendlyActive ? 1 : 0 })

  return (
    <animated.div
      style={fade}
      id="invisible-div"
      className={`${calendlyActive ? `block` : `hidden`} calendly-overlay`}
      onClick={() => setCalendlyActive(!calendlyActive)}
    >
      {/* <div style={fade} className={`saas-call`}> */}
      <div
        className="calendly-inline-widget mx-auto w-screen h-full md:w-4/5 lg:w-full relative z-10"
        data-url={buildCalendlyUrl(account, eventName)}
      >
        <button onClick={() => setCalendlyActive(!calendlyActive)}>
          <Close className="close-popup" />
        </button>
        {/* </div> */}
      </div>
    </animated.div>
  )
}

export default Calendly
