import React from 'react'
import CTA from '../components/CTA'

export default function CalltoContact() {
  return (
    <section>
      <div>
        <h3 className="text-h3 font-medium">Let’s make things happen</h3>
        <p className="text-p">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <CTA 
        cta="Get your free proposal"
        url="exemple.com"
        />
      </div>
      <div>
        <img src="/Illustration2.png" alt="" />
      </div>
    </section>
  )
}
