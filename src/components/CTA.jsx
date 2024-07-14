import React from 'react'

export default function CTA({ cta, url}) {
  return (
    <div className="bg-dark text-white w-fit px-35 py-5 rounded-14">
      <a className="text-h4" href={url}>
        {cta}
    </a>
    </div>
  )
}
