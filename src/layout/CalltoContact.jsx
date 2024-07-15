import React from 'react'
import CTA from '../components/CTA'

export default function CalltoContact() {
  return (
    <section className="flex items-center justify-between bg-[#F3F3F3] rounded-45 px-60 mt-100 mb-140">
      <div className="flex flex-col gap-6 w-5/12">
        <h3 className="text-h3 font-medium">Let’s make things happen</h3>
        <p className="text-p ">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <CTA 
        cta="Get your free proposal"
        url="exemple.com"
        />
      </div>
      <div>
        <img className="scale-[1.1]" src="/Illustration2.png" alt="" />
      </div>
    </section>
  )
}
