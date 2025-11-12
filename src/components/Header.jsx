import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'
import { motion, useAnimationFrame } from 'motion/react'

const Header = () => {
  const scrollRefs = useRef([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    scrollRefs.current.forEach((scroller) => {
      if (!scroller) return
      const scrollerInner = scroller.querySelector('.scroller-inner')
      const items = Array.from(scrollerInner.children)

      items.forEach((item) => {
        const clone = item.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        scrollerInner.appendChild(clone)
      })
    })
  }, [])

  return (
    <div>
      <div
        className="   container w-full  max-w-[80% ]mx-auto min-h-screen  overflow-hidden flex  items-center px-12 md:px-10 lg:px-30 "
        id="Header"
      >
        <div className="flex flex-col md:flex-row items-center gap-20   sm:gap-2 md:gap-8 mx-auto pt-40 sm:pt-50 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" w-full md:max-w-1/2 "
          >
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
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" w-60 sm:w-100   md:max-w-1/2"
            src={assets.Hero_image}
            alt=""
          />
        </div>
      </div>
      {/* ------------- Top Companies Secttion-----------*/}
      <div className=" flex flex-col  pt-18 sm:pt-28 px-10 lg:px-20 ">
        <hr className="text-gray-500" />
        <div
          ref={(el) => (scrollRefs.current[0] = el)}
          className="scroller overflow-hidden w-full "
          data-speed="fast"
          data-animated="true"
        >
          <div className=" scroller-inner flex gap-16 flex-nowrap  animate-scroll-fast  py-14">
            <img src={assets.Behance} alt="" />

            <img src={assets.google1} alt="" />

            <img src={assets.Apple} alt="" />

            <img src={assets.Dribble} alt="" />

            <img src={assets.Awwwards} alt="" />
          </div>

          {/*-----------Repeat Logos for infinite loops------------ */}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Header
