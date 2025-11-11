import React from 'react'
import { assets, workType } from '../assets/assets'
import { motion } from 'motion/react'

const Design = () => {
  return (
    <div className="container mx-auto w-full overflow-hidden  pt-30 md:pt-40 mt-30 md:px-10  items-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row  gap-20  sm:gap-6 lg:gap-40 justify-center items-center"
      >
        {workType.map((work, index) => (
          <div
            className="flex items-center flex-col  md:max-w-1/3 gap-4
           "
            key={index}
          >
            <img src={work.image} alt="" />
            <h2 className="pt-4 font-semibold text-base text-center">
              {work.title}
            </h2>
            <div className="text-center text-sm font-normal ">
              {work.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Design
