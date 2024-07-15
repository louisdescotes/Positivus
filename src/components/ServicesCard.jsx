import React from "react";
import LearnMore from "./LearnMore";

export default function ServicesCard({ bg, compo, img, title, title2 }) {
  return (
    <article
      className={`bg-${bg} flex justify-between col-span-6 p-50 border border-dark shadow-card w-full rounded-45 `}
    >
      <div className="flex flex-col h-full justify-between">
        <h3 className={`font-medium text-h3 leading-tight `}>
          <span
            className={`px-7 rounded-7 
            ${
              bg === "grey" ? "bg-lime" : 
              bg === "lime" ? "bg-white" : 
              bg === "dark" && compo === "true" ? "bg-lime" : "bg-white"
            }`}
          >
            {title}
          </span>
          <br />
          <span
            className={`px-7 rounded-7
            ${
              bg === "grey"
                ? "bg-lime"
                : bg === "lime"
                ? "bg-white"
                : bg === "dark" && compo === "true"
                ? "bg-lime"
                : "bg-white"
            }`}
          >
            {title2}
          </span>
        </h3>
        <LearnMore 
        bg= {bg}
        />
      </div>
      <div>
        <img src={`/${img}`} alt="" />
      </div>
    </article>
  );
}
