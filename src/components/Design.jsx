import React from 'react'
import { assets, workType } from '../assets/assets'

const Design = () => {
  return (
    <div className="container mx-auto w-full overflow-hidden  pt-60 md:pt-40  lg:px-30 items-center">
      <div className="flex flex-col md:flex-row  gap-20  sm:gap-6 lg:gap-40 justify-center items-center">
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
      </div>
    </div>
  )
}

export default Design
