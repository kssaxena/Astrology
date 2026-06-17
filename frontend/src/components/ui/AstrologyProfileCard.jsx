import React from "react";
import Button from "../Button";
import { CiStar } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AstroData } from "../constants/AstroData";

const AstrologyCard = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-3">
      {AstroData.map((item) => (
        <div
          className="md:w-96 w-full bg-[#FFFFFF] h-full border border-[#E7DCC8] rounded-3xl
           px-4  py-6 text-center shadow-md  hover:shadow-purple-500/4 flex flex-col gap-2
        "
        >
          {/* {Profile container} */}
          <div className="flex justify-start gap-4 items-center  ">
            {/* Image */}
            <div className="img ">
              <img
                src={item?.image}
                className="h-22 w-22 rounded-full text-xs bg-neutral-200 object-fit"
              />
            </div>
            {/* Designation */}
            <div className=" flex flex-col justify-center items-start">
              <h1 className="font-bold text-xl">{item?.name}</h1>
              <p className="text-secondary text-xs">{item?.designation}</p>
              <div className="flex justify-center items-center gap-1 text-xs">
                <CiStar size={24} color="yellow" />
                <p>{item?.rating}</p>
                <p>{item?.number}</p>
              </div>
            </div>
          </div>

          {/* {Language & Experience} */}
          <div className="w-full border py-2 bg-[#FFFDF9] border-[#E7DCC8] rounded-xl">
            <div className=" flex justify-between text-xs px-2">
              <p>Language</p>
              <p>{item?.language || "Hindi, English"}</p>
            </div>
            <div className="flex justify-between text-xs px-2">
              <p>Experience</p>
              <p>{item?.experience || "10 year"}</p>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-between items-center mt-2 px-2 py-1 rounded-xl shadow-2xl">
            <h1 className="md:text-[22px] text-base font-semibold flex justify-center items-center ">
              <LiaRupeeSignSolid />
              200 <span className="text-base h-full text-end">/min</span>
            </h1>
            <Button Label="Chat Now" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AstrologyCard;
