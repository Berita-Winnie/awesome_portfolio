import React from 'react'
import { assets, work } from '../assets/assets'
import { motion } from 'motion/react'

const LatestWork = () => {
  return (
    <div
      className="container bg-[#ffffff] mx-auto flex flex-col gap-12 md:gap-8 w-full max-w-80% overflow-hidden  pt-30 px-12 md:pt-40  md:px-10 lg:px-30  items-center  mt-20 "
      id="LatestWork"
    >
      <div>
        <h1 className="font-bold text-center mb-20 text-2xl">Latest Work</h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" flex flex-col md:grid grid-cols-2 md:grid-cols-3 items-center  gap-12 md:gap-8 lg:gap-18  "
        >
          {work.map((work, index) => (
            <div key={index} className=" shadow-xl p-2">
              <img src={work.image} alt="" />
              <p className="font-semibold text-base mt-4">{work.title}</p>
              <p className="text-sm mt-2">{work.person}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LatestWork
