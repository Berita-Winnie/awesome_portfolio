import { testimonials } from '../assets/assets'
import Design from './Design'

const Testimonials = () => {
  return (
    <>
      <Design />
      <div className="container mx-auto flex flex-col gap-12 md:gap-8 w-full max-w-80% overflow-hidden  pt-80 md:pt-60  px-12 md:px-10 lg:px-30  items-center">
        <h1 className="font-bold text-center text-base">Clients</h1>
        <div className=" flex flex-col md:flex-row  items-center   gap-14 md:gap-8 lg:gap-18  ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FFFCF5] border border-[#FFD285] p-4 md:max-w-1/3 "
            >
              <p className="text-start mb-2 lg:mb-8 text-sm lg:text-base font-semibold">
                {testimonial.text}
              </p>
              <div className="flex flex-row p-4  gap-4 md:gap-6 items-start">
                <img src={testimonial.image} alt="" />
                <div>
                  <img src={testimonial.stars} alt="" />
                  <p className="text-sm lg:text-base">{testimonial.name}</p>
                  <p className=" text-sm lg:text-base">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Testimonials
