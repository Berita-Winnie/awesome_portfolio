import { assets } from '../assets/assets'
import { motion, useAnimationFrame } from 'motion/react'

const Header = () => {
  return (
    <>
      <div
        className=" overflow-hidden  min-h-screen  flex  items-center px-12 md:px-10 lg:px-30 "
        id="Header"
      >
        <div className="flex flex-col md:flex-row items-center gap-20   sm:gap-2 md:gap-18 mx-auto ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" w-full md:max-w-1/2 "
          >
            <h3
              className="font-semibold text-base sm:text-xl text-center md:text-start  md:text-xl lg:text-2xl
             mb-2 md:mb-4"
            >
              Branding <span>|</span> Image making
            </h3>
            <p className="font-bold text-4xl text-center mb-4 sm:mb-6  md:text-start   lg:text-6xl">
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
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" w-60 sm:w-100  md:w-130 md:max-w-1/2"
            src={assets.Hero_image}
            alt=""
          />
        </div>
      </div>
      {/* ------------- Top Companies Secttion-----------*/}
      <div className=" flex flex-col  pt-18 sm:pt-28 px-10 lg:px-30 ">
        <hr className="text-gray-500" />
        <div
          className="scroller overflow-hidden w-full "
          data-speed="fast"
          data-animated="true"
        >
          <ul className="  flex flex-row gap-16 py-10 justify-around">
            <li>
              <img src={assets.Behance} alt="" />
            </li>
            <li>
              <img src={assets.google1} alt="" />
            </li>
            <li>
              <img src={assets.Apple} alt="" />
            </li>
            <li>
              <img src={assets.Dribble} alt="" />
            </li>
            <li>
              <img src={assets.Awwwards} alt="" />
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Header
