import React from "react";

export default function Message({ message, author, role }) {
  return (
    <article className="text-white min-w-[38rem]">
      <div className="relative w-full h-full ">
        <div className="min-w-3/6 h-fit rounded-45 relative border border-lime bg-dark px-[3.25rem] py-12">
          <div className="size-16 rotate-45 absolute left-13 -bottom-8 border-r border-b border-lime bg-dark"></div>
          <p className="w-fit text-pmob lg:text-p ">{message}</p>
        </div>
        <div className="relative top-14 left-20">
          <p className="font-medium text-h4mob lg:text-h4 text-lime">{author}</p>
          <p className="text-pmob lg:text-p ">{role}</p>
        </div>
      </div>
    </article>
  );
}
