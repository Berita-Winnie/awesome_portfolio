import React from 'react'

import { assets } from '../assets/assets'
const AboutSec1 = () => {
  return (
    <div className="bg-[#F9E6F0] mt-24  p-40 overflow-hidden container  ">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-[60%] justify-center">
        <div>
          <img src={assets.pablo} alt="" />
          <p>Pablo Designero</p>
          <p>Designer & Unicorn</p>
          <p>Trainer</p>
        </div>
        <div>
          <h1>Bio</h1>
          <p>
            Father of 3 humans, 5 unicorns & 2 dogs, I design since I can
            remember it. I often get asked where I get my inspiration from: in
            everyday’s lil’ details. And sometimes in leftover food I find in my
            beard.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSec1
