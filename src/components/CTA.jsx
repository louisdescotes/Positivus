import React from 'react'

export default function CTA({ cta, url}) {
  return (
    <div className="bg-dark w-full text-center text-white lg:w-fit px-35 py-5 rounded-14">
      <a className="lg:text-h4 text-h4mob" href={url}>
        {cta}
    </a>
    </div>
  )
}
