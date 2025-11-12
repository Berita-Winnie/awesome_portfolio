import { assets } from '../assets/assets'
const AboutSec1 = () => {
  return (
    <div className="bg-[#F9E6F0] mt-24 py-24 px-10  md:p-40 overflow-hidden  w-full  ">
      <div className="flex flex-col md:flex-row items-start md:items-center  gap-12 justify-center   lg:px-30     ">
        <div className=" flex flex-col items-start  ">
          <img
            className="w-40 md:w-80 lg:w-[440px]"
            src={assets.pablo}
            alt=""
          />
          <p className="   font-semibold text-sm mt-6 underline">
            Pablo Designero
          </p>
          <p className="text-sm">Designer & Unicorn</p>
          <p className="text-sm ">Trainer</p>
        </div>
        <div>
          <h1 className="font-semibold mb-2">Bio:</h1>
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
