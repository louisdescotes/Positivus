import React from "react";
import LearnMore from "./LearnMore";


export default function Case({ message }) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <p className=" text-p text-white">
        {message}
      </p>
      <LearnMore />
    </div>
  );
}
