import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="   container w-full  mx-auto min-h-screen  overflow-hidden flex  items-center ">
        <div className="flex flex-col md:flex-row items-center gap-20   sm:gap-2 md:gap-8 md:px-30 mx-auto pt-40 sm:pt-50 ">
          <div className=" md:max-w-1/2 ">
            <h3
              className="font-semibold text-base sm:text-xl text-center md:text-start  md:text-xl
             mb-2"
            >
              Branding <span>|</span> Image making
            </h3>
            <p className="font-bold text-4xl text-center mb-4 sm:mb-6  md:text-start  lg:text-6xl">
              My Awesome Portfolio
            </p>
            <p className=" hidden  md:block font-normal text-xm md:text-base text-start">
              And i made it myself! Yes. In Figma with Anime
            </p>
            <p className=" md:hidden font-normal text-xm text-center">
              This is a template Figma file, turned <br />
              into code using Anima. Learn more at <br />
              AnimaApp.com
            </p>
          </div>

          <img
            className=" w-60 sm:w-100   md:max-w-1/2"
            src={assets.Hero_image}
            alt=""
          />
        </div>
      </div>
      {/* ------------- Top Companies Secttion-----------*/}
      <div className=" flex flex-col  px-20  pt-18 sm:pt-28 justify-center  md:px-30 mx-auto ">
        <hr className="text-gray-500" />
        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-8 lg:flex lg:gap-24 px-4 py-8 lg:px-10 lg:py-12">
          <img src={assets.Behance} alt="" />
          <img src={assets.google1} alt="" />
          <img src={assets.Apple} alt="" />
          <img src={assets.Dribble} alt="" />
          <img src={assets.Awwwards} alt="" />
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Header
