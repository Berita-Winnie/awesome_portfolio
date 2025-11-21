import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  const location = useLocation()

  const handleNavClick = (e, id) => {
    if (location.pathname !== '/') {
      e.preventDefault()
      window.location.href = `/#${id}`
    }
  }

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showSideBar])

  return (
    <>
      <div className="sticky top-0 left-0 z-20 w-full bg-white/50 backdrop-blur-3xl  flex flex-row justify-between   items-center  py-4 px-4  md:px-20 ">
        <img
          src={assets.Logo}
          alt=""
          className="w-24 sm:w-32 "
          id="Header"
          href="#Header"
        />

        <div className="hidden sm:flex flex-row gap-12 ">
          <Link to="/" className="text-black cursor-pointer hover:border-b-2">
            Home
          </Link>
          <Link
            className="text-black cursor-pointer  hover:border-b-2"
            to="/about"
          >
            About
          </Link>
          <a
            onClick={(e) => handleNavClick(e, 'LatestWork')}
            className="text-black cursor-pointer  hover:border-b-2"
            href="#LatestWork"
          >
            Work
          </a>
          <a
            className="text-black  cursor-pointer  hover:border-b-2"
            href="#Contact"
          >
            Contact
          </a>
        </div>
        <img
          onClick={() => setShowSideBar(true)}
          src={assets.Menu}
          alt=""
          className={`cursor-pointer md:hidden ${
            showSideBar ? 'w-0 h-0' : 'w-6 h-6'
          } `}
        />
      </div>
      {/* ..........Navbar for small screens.......... */}
      <div
        className={` fixed w-full right-0 top-0 bottom-0  bg-white/90 transition-transform duration-700 ease-in-out ${
          showSideBar ? ' translate-x-0' : 'translate-x-full'
        } `}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowSideBar(false)}
            className="w-12  cursor-pointer "
            src={assets.cancel_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col gap-6 items-center pt-10  font-medium">
          <Link
            to="/"
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#Home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-gray-400 cursor-pointer"
          >
            About
          </Link>
          <a
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#LatestWork"
          >
            Work
          </a>
          <a
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#Contact"
          >
            Contact
          </a>
        </ul>
      </div>
    </>
  )
}

export default Navbar
