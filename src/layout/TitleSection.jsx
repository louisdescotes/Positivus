import React from 'react'

export default function TitleSection({ title, p}) {
  return (
    <div className="flex gap-10 items-center mb-20">
        <h2 className="text-h2 bg-lime px-7 rounded-7 font-medium">{title}</h2>
        <p className="text-p max-w-[32rem]">{p}</p>
    </div>
  )
}
