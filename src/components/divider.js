import React from "react"
import VisibilitySensor from "react-visibility-sensor"

const divider = ({ sideBlog, setSideBlog }) => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <div>
          {/* {isVisible ? setSideBlog(!sideBlog) : console.log(`I am hidden`)} */}
          <h1>Hello</h1>
        </div>
      )}
    </VisibilitySensor>
  )
}

export default divider
