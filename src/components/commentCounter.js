import { Helmet } from "react-helmet"
import React from "react"

export default class Comments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <script defer src="https://cdn.commento.io/js/count.js" />
        </Helmet>
      </React.Fragment>
    )
  }
}
