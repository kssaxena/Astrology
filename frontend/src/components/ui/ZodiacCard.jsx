import React from "react";
import { zodiacData } from "../constants/constants.jsx";

const ZodiacCard = () => {
  return (
    <div className="grid md:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-6 ">
      {zodiacData.map((item) => (
        <div
          key={item.title}
          className=" flex items-center justify-center gap-4 p-4 lg:w-55  bg-linear-to-br from-[#fff2d6] via-[#fff8eb] to-[#fffefb] rounded-xl shadow-md bg-[#FFFFFF]"
        >
          <div className="   flex justify-center items-center rounded-full bg-transparent drop-shadow-lg  ">
            <div className={`md:text-2xl text-4xl ${item?.iconColor}`}>
              {item.icon}
            </div>
          </div>
          <div className="">
            <h1 className=" font-semi-bold text-sm font-bold tracking-wide">
              {item.title}
            </h1>
            <p className="text-gray-600  text-[8px] montserrat-p ">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZodiacCard;
