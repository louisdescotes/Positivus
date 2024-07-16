import React from 'react'

export default function TitleSection({ title, p}) {
  return (
    <div className="flex text-center lg:text-start flex-col lg:flex-row gap-10 items-center mb-20">
        <h2 className="text-h2mob lg:text-h2 bg-lime px-7 rounded-7 font-medium">{title}</h2>
        <p className="text-pmob lg:text-p max-w-[32rem]">{p}</p>
    </div>
  )
}
