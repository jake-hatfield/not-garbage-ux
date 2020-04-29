import React from "react"
import { Link } from "gatsby"

const footer = ({ siteTitle, designTipsOpen, setDesignTipsOpen }) => {
  return (
    <nav className="pt-16 pb-6 w-full textured-bg header-font text-white">
      <div className="container">
        <div className="md:flex md:justify-between md:items-start">
          <div>
            <Link to={`/`} className="text-3xl md:text-4xl">
              {siteTitle}
            </Link>
            <h1 className="mt-4 md:mt-6 lg:mt-8 font-bold leading-relaxed">
              Tactical UX design tips and <br /> problem-solving strategies
            </h1>
          </div>
          <div className="md:flex md:justify-around md:items-start">
            <div className="mt-16 md:mt-0 flex">
              <div className="mr-20 lg:mr-32">
                <h4 className="font-bold text-xl">Company</h4>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/`}>Home</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/saas-web-development`}>Work</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/contact`}>Contact</Link>
                </div>
              </div>
              <div className="md:mr-20">
                <h4 className="font-bold text-xl">Learn</h4>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/blog`}>Blog</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <button onClick={() => setDesignTipsOpen(!designTipsOpen)}>
                    Design Tips
                  </button>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/about`}>About</Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="hidden md:block font-bold text-xl">Connect</h4>
            </div>
          </div>
        </div>
        <footer className="mt-8 md:mt-6 md:flex md:justify-between md:items-center text-lg text-black-200">
          <div>
            © {new Date().getFullYear()} {siteTitle} | Be chill and don't steal
          </div>
          <div className="mt-2 md:mt-0">
            <a href="sitemap.xml">Sitemap</a>
            <Link to={`/privacy`} className="ml-12 md:ml-24">
              Privacy
            </Link>
          </div>
        </footer>
      </div>
    </nav>
  )
}

export default footer
