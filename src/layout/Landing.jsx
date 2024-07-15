import React from 'react'
import CTA from '../components/CTA'

export default function Landing() {
  return (
    <section className="py-70 grid justify-between grid-cols-12 grid-rows-1 gap-10 mb-10">
      <div className="col-span-5 flex flex-col gap-35">
        <h1 className="font-medium text-h1">Navigating the digital landscape for success</h1>
        <h4 className="text-h4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h4>
        <CTA
        cta = "Book a consultation"
        url="https://exemple.com"
        />
      </div>
      <div className="col-span-6 col-start-7">
        <img className="w-full" src="/Illustration.png" alt="" />
      </div>
    </section>
  )
}
