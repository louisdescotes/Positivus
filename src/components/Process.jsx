import React, { useState } from "react";

export default function Process({ number, title, description }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <article
      onClick={handleOpen}
      className={`
    ${open == true ? "bg-lime" : "bg-white"}
    w-full py-30 lg:px-60 lg:py-10 px-30 border border-dark shadow-md rounded-45`}
    >
      <div className="flex items-center">
        <div className="flex w-full items-center gap-6">
          <span className="font-medium text-h2mob lg:text-h1">{number}</span>
          <p className="font-medium text-h4mob lg:text-h3">{title}</p>
        </div>
        <div className="flex items-center justify-center border border-dark bg-[#F3F3F3] rounded-full size-10 lg:size-14 p-2">
        {/** Minus */}
          <svg
          className={open == true ? "block" : "hidden"}
            width="18"
            height="7"
            viewBox="0 0 18 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
          </svg>

        {/** Plus */}

          <svg
          className={open == true ? "hidden" : "block"}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z"
              fill="#191A23"
            />
          </svg>
        </div>
      </div>

      <div className={`${open == true ? "block" : "hidden"}`}>
        <hr className="bg-black my-30 h-[1px] border-none" />
        <p className="text-pmob lg:text-p">{description}</p>
      </div>
    </article>
  );
}
