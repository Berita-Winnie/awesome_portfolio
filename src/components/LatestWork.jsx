import React from 'react'
import { assets, work } from '../assets/assets'

const LatestWork = () => {
  return (
    <div className="container mx-auto flex flex-col gap-12 md:gap-8 w-full max-w-80% overflow-hidden  pt-80 md:pt-60  px-12 md:px-10 lg:px-30  items-center">
      <div>
        <h1 className="font-bold text-center mb-20 text-2xl">Latest Work</h1>
        <div className=" flex flex-col sm:grid grid-cols-2 md:grid-cols-3 items-center   gap-12 md:gap-8 lg:gap-18  ">
          {work.map((work, index) => (
            <div key={index}>
              <img src={work.image} alt="" />
              <p className="font-semibold text-base mt-4">{work.title}</p>
              <p className="text-sm mt-2">{work.person}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestWork
