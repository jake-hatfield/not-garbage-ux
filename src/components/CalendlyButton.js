import React from "react"

const CalendlyButton = ({ calendlyActive, setCalendlyActive }) => {
  return (
    <button
      type="submit"
      className="mt-12 p-3 md:p-4 w-full md:w-auto bg-black-400 text-white text-lg md:text-base alt-border focus:outline-none focus:shadow-outline"
      onClick={() => setCalendlyActive(!calendlyActive)}
    >
      Book a clarity call
    </button>
  )
}

export default CalendlyButton
