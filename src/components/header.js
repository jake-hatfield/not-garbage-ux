import React from "react"
import { Link } from "gatsby"
import { animated } from "react-spring"

const header = ({
  navAnimation,
  navOpen,
  setNavOpen,
  designTipsOpen,
  setDesignTipsOpen,
  isAnyActive,
}) => {
  function active() {
    if (navOpen) {
      setNavOpen(!navOpen)
    } else if (designTipsOpen) {
      setDesignTipsOpen(!designTipsOpen)
    }
  }
  function navActive() {
    setNavOpen(!navOpen)
  }
  function designTipsActive() {
    setDesignTipsOpen(!designTipsOpen)
  }

  return (
    <nav
      className={`${
        isAnyActive ? `sticky top-0` : ``
      } py-4 md:py-6 w-full z-20 bg-white text-4xl`}
    >
      <div className="container w-full flex justify-between items-center">
        <div className="relative z-10">
          <Link
            className={`text-3xl lg:text-4xl text-black-400 emphasis`}
            to={`/`}
            onClick={() => (isAnyActive ? active() : ``)}
          >
            NGUX
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            // onClick={() => setNavOpen(!navOpen)}
            onClick={() => (isAnyActive ? active() : setNavOpen(!navOpen))}
            className="flex items-center rounded focus:outline-none focus:shadow-outline"
          >
            <svg
              className={`${
                isAnyActive ? `ham-active ham-rotate` : ``
              } ham-base ham h-12 w-12`}
              viewBox="0 0 100 100"
              width="80"
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </button>
        </div>
        <animated.div
          style={navAnimation}
          className={`${
            navOpen ? `mobile-nav` : `mobile-nav-animate`
          } bg-white lg:hidden`}
        >
          <div
            className={`${
              navOpen ? `container` : ``
            } header-font font-bold text-2xl md:text-xl`}
          >
            <Link
              to={`/`}
              className={`${navOpen ? `` : `alt-link`} mt-8 block`}
              activeClassName="active"
              onClick={() => (navOpen ? setNavOpen(!navOpen) : ``)}
            >
              Home
            </Link>
            <Link
              to={`/about`}
              className={`${navOpen ? `` : `alt-link`} mt-8 block`}
              activeClassName="active"
              onClick={() => (navOpen ? setNavOpen(!navOpen) : ``)}
            >
              About
            </Link>
            <button
              className={`mt-8 block`}
              onClick={() => {
                navActive()
                designTipsActive()
              }}
            >
              UX Tips
            </button>
          </div>
        </animated.div>
        <div className={`hidden lg:block`}>
          <div
            className={`header-font font-bold text-2xl md:text-xl lg:text-lg`}
          >
            <Link
              to={`/`}
              className={`lg:mr-24 lg:inline-block relative z-20 alt-link`}
              activeClassName="active"
              onClick={() => (isAnyActive ? active() : ``)}
            >
              Home
            </Link>
            <Link
              to={`/about`}
              className={`lg:mr-24 lg:inline-block relative z-20 alt-link`}
              activeClassName="active"
            >
              About
            </Link>
            <button
              className={`lg:inline-block lg:px-4 lg:py-3 lg:bg-transparent lg:border border-2 border-black-400 relative z-10 alt-border lg:hover:text-white lg:hover:bg-black-400 transition duration-300 focus:outline-none focus:shadow-outline`}
              onClick={() => setDesignTipsOpen(!designTipsOpen)}
            >
              UX Tips
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default header
