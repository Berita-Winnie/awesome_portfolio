import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Footer = () => {
  const [result, setResult] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)
    formData.append('access_key', '49ab491f-b122-4057-9606-29c5d5d9b472')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      setResult('')
      toast.success('Form Submitted Successfully', {
        position: 'top-right',
        autoClose: 3000,
      })
      event.target.reset()
    } else {
      setResult('')
      toast.error('Error')
    }
  }

  return (
    <div className="mt-24  px-12 md:px-10 lg:px-30   ">
      <div className="border-t border-t-black flex flex-col  md:flex-row  gap-20 justify-between py-12">
        <div className=" flex flex-col gap-16 items-start  text-sm sm:text-base  w-full md:max-w-1/2 ">
          <p className="font-bold text-3xl  ">Let's work together</p>
          <p className="text-sm md:text-base max-w-80">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex flex-row gap-3 ">
            <img src={assets.discord} alt="" />
            <img src={assets.facebook} alt="" />
            <img src={assets.dribble_socials} alt="" />
            <img src={assets.nstagram} alt="" />
            <img src={assets.behance_socials} alt="" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-sm  w-full md:max-w-1/2 outline-none  focus:outline-none resize-none"
        >
          <input
            className="bg-[#F3F3F3] p-4 rounded max-w-80"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="bg-[#F3F3F3] p-4 rounded max-w-80"
            type="Email"
            placeholder="Email"
            required
          />
          <textarea
            className="bg-[#F3F3F3] p-4 rounded max-w-80  h-40"
            placeholder="Type Your message here"
          ></textarea>
          <button className="bg-black text-white max-w-30 px-4 py-3">
            {result ? result : 'sendMessage'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
