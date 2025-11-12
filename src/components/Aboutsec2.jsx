import React from 'react'
import { motion } from 'motion/react'
const Aboutsec2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:max-w-[60%] px-10  container overflow-hidden mx-auto mt-24 md:px-10"
    >
      <div className="">
        <p className=" pt-10 text-start tracking-widest text-lg md:tracking-wider">
          When I was 5, I got adbucted by a unicorn family. When they returned
          me to earth, I joined a designer school. But, fo’ real, what I learned
          with my kidnaptive family really gave an edge to my creative language.
        </p>
      </div>
      <div className="mt-18 ">
        <p className="bg-[#009379] text-[#F6DCE9] text-sm p-2 mb-2">
          Being a human is way too complicated. Time to be a unicorn.
        </p>
        <p className="text-sm  mb-2">
          Try it and you’ll see. Then your Figma files are just gonna fly in
          color, glitter, interactions and autolayout.
        </p>
        <p className="bg-[#009379] text-[#F6DCE9] text-sm p-2">
          Also, grow a beard. Check my bio if that is not clear.
        </p>
        <p className="text-sm mt-2">
          Available for projects, from Monday to Tuesday, mainy between 14 and
          16. (Unless there is a unicorn race on TV - DUH -in that case, come
          back another day). Projects include, RocknRoll covers, furniture
          refurbishing, Unicorn potty training and more.
        </p>
      </div>
    </motion.div>
  )
}

export default Aboutsec2
