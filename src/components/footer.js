import React from "react"
import { Link } from "gatsby"
import TwitterIcon from "../../content/assets/twitter-icon.svg"
import YoutubeIcon from "../../content/assets/youtube-icon.svg"
import DribbleIcon from "../../content/assets/dribble-icon.svg"

const footer = ({ siteTitle, designTipsOpen, setDesignTipsOpen }) => {
  return (
    <nav className="pt-16 pb-6 w-full textured-bg header-font text-white">
      <div className="container">
        <div className="md:flex md:justify-between md:items-start">
          <div>
            <Link to={`/`} className="text-3xl md:text-4xl">
              {siteTitle}
            </Link>
            <h2 className="mt-4 md:max-w-xs lg:max-w-sm font-bold text-base lg:text-lg leading-relaxed md:leading-loose">
              Learn tactical UX strategies that solve real-life problems and
              make products better.
            </h2>
          </div>
          <div className="md:flex md:justify-around md:items-start">
            <div className="mt-12 md:mt-0 flex">
              <div className="mr-20 lg:mr-32">
                <h4 className="font-bold text-xl">Company</h4>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/`}>Home</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/saas-web-development`}>My Work</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/contact`}>Contact</Link>
                </div>
              </div>
              <div className="md:mr-20 lg:mr-32">
                <h4 className="font-bold text-xl">Learn</h4>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/blog`}>Blog</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <Link to={`/about`}>About</Link>
                </div>
                <div className="pt-4 text-lg text-black-100 hover:text-white transition duration-300">
                  <button onClick={() => setDesignTipsOpen(!designTipsOpen)}>
                    UX Tips
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 mg:mt-0">
              <h4 className="hidden md:block font-bold text-xl">Social</h4>
              <div className="flex md:flex-col">
                <div className="pt-4">
                  <a
                    href="https://twitter.com/notgarbageux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                </div>
                <div className="pt-4 pl-8 md:pl-0">
                  <a
                    href="https://www.youtube.com/channel/UCGy3Vvy30krGgkKYtxSOMaw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon className="h-6 w-6" />
                  </a>
                </div>
                <div className="pt-4 pl-8 md:pl-0">
                  <a
                    href="https://dribbble.com/notgarbageux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DribbleIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-8 md:mt-6 md:flex md:justify-between md:items-center text-lg text-black-200">
          <div>
            © {new Date().getFullYear()} {siteTitle} | Be chill and don't steal
          </div>
          <div className="mt-2 md:mt-0">
            <a href="sitemap.xml">Sitemap</a>
            <Link to={`/privacy`} className="ml-12 md:ml-24 lg:ml-32">
              Privacy
            </Link>
          </div>
        </footer>
      </div>
    </nav>
  )
}

export default footer
