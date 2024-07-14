import React from 'react'
import LearnMore from './LearnMore'

export default function ServicesCard({ bg, img, title, title2}) {
  return (
    <article className={` bg-`}>
      <div>
        <h3 className="font-medium text-h3">{title} <br />
        {title2}
        </h3>
        <LearnMore />
      </div>
      <div>
    <img src={`/${img}`} alt="" />
      </div>
    </article>
  )
}
