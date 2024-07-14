import React from 'react'
import CTA from '../components/CTA'

export default function Landing() {
  return (
    <section>
      <div className="flex flex-col gap-35">
        <h1 className="font-medium text-h1">Navigating the digital landscape for success</h1>
        <h4 className="text-h4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h4>
        <CTA
        cta = "Book a consultation"
        url="https://exemple.com"
        />
      </div>
      <div>
        <img src="/Illustration.png" alt="" />
      </div>
    </section>
  )
}
