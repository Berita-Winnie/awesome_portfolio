import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false)
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
    <div className="absolute top-0 left-0  w-full">
      <div className=" container mx-auto flex flex-row justify-between  items-center  py-2 px-4  md:px-6 lg:px-12">
        <img src={assets.Logo} alt="" className="w-24 sm:w-32 " />

        <div className="hidden sm:flex flex-row gap-8 ">
          <a
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#Header"
          >
            Home
          </a>
          <a
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#About"
          >
            About
          </a>
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
        className={`md:hidden ${
          showSideBar ? ' fixed w-full' : 'h-0 w-0'
        }  right-0 top-0 bottom-0 overflow-hidden bg-white/60 transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowSideBar(false)}
            className="w-12  cursor-pointer "
            src={assets.cancel_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col gap-6 items-center pt-10  fontt-medium">
          <a
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#Home"
          >
            Home
          </a>
          <a
            className="text-black hover:text-gray-400 cursor-pointer"
            href="#About"
          >
            About
          </a>
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
    </div>
  )
}

export default Navbar
