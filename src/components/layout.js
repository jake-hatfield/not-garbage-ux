import React, { useState } from "react"
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
`
export default Layout
