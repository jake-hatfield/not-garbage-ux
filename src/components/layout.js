import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, config } from "react-spring"
import "../styles/app.css"

import Header from "../components/header"
import Footer from "../components/footer"
import DesignTips from "../components/designTips"

const Layout = props => {
  const { children } = props
  const [navOpen, setNavOpen] = useState(false)
  const [designTipsOpen, setDesignTipsOpen] = useState(false)
  let isAnyActive
  if (navOpen || designTipsOpen) {
    isAnyActive = true
  }

  window.addEventListener("resize", function() {
    if (
      document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA"
    ) {
      window.setTimeout(function() {
        document.activeElement.scrollIntoViewIfNeeded()
      }, 0)
    }
  })

  useEffect(() => {
    if (isAnyActive) {
      console.log("its working")
      document.body.style.overflowY = "hidden"
      document.body.style.height = "100vh"
      document.body.style.width = "100vw"
    }
    return () => (document.body.style.overflowY = "unset")
  }, [isAnyActive])
  const navAnimation = useSpring({
    transform: navOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
    config: config.slow,
  })
  const designTipsAnimation = useSpring({
    transform: designTipsOpen
      ? `translate3d(0%,0,0)`
      : `translate3d(-100%,0,0)`,
    config: config.slow,
  })
  const data = useStaticQuery(graphql`
    query essentialData {
      site {
        siteMetadata {
          title
        }
      }
      designTipsImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Header
        siteTitle={data.site.siteMetadata.title}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navAnimation={navAnimation}
        designTipsOpen={designTipsOpen}
        setDesignTipsOpen={setDesignTipsOpen}
        isAnyActive={isAnyActive}
      />
      <DesignTips
        designTipsOpen={designTipsOpen}
        setDesignTipsOpen={setDesignTipsOpen}
        designTipsAnimation={designTipsAnimation}
        fluid={data.designTipsImage.childImageSharp.fluid}
      />
      <main siteTitle={data.site.siteMetadata.title} isAnyActive={isAnyActive}>
        {children}
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        designTipsOpen={designTipsOpen}
        setDesignTipsOpen={setDesignTipsOpen}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`
export default Layout
