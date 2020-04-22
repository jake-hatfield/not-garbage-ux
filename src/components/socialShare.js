import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

const socialShare = ({ twitterHandle, url, title, tags }) => {
  return (
    <section>
      <FacebookShareButton url={url}>
        <FacebookIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#2d3748`}
        />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} className="ml-4">
        <TwitterIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#2d3748`}
        />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} className="ml-4">
        <LinkedinIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#2d3748`}
        />
      </LinkedinShareButton>
      <RedditShareButton url={url} title={title} className="ml-4">
        <RedditIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#2d3748`}
        />
      </RedditShareButton>
    </section>
  )
}

export default socialShare
