import React from "react"
import Close from "../../content/assets/close.svg"

const CalendlyButton = ({ calendlyActive, setCalendlyActive, closePopup }) => {
  return (
    <button
      className="mt-12 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
      onClick={() => setCalendlyActive(!calendlyActive)}
    >
      Book a clarity call
    </button>
  )
}

export default CalendlyButton
