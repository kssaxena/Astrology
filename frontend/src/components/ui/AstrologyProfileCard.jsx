import React from "react";
import Button from "../Button";
import { CiStar } from "react-icons/ci";

const AstrologyCard = ({
  image,
  name,
  designation,
  rating,
  number,
  language,
  experience,
  time,
}) => {
  return (
    <div
      className="
        w-full
        max-w-78
        bg-[#FFFFFF]
        h-full
        border border-[#E7DCC8]
        rounded-3xl
        px-4 
        py-6
        text-center
        shadow-md   
        hover:shadow-purple-500/40
       
        flex flex-col gap-2
      "
    >
      {/* {Profile container} */}
      <div className="flex justify-start gap-4 items-center  ">
        {/* Image */}
        <div className="img ">
          <img
            src={
              image ||
              "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="h-22 w-22 rounded-full text-xs  bg-amber-300 object-fit"
          />
        </div>
        {/* Designation */}
        <div className=" flex flex-col justify-center items-start">
          <h1 className="font-bold text-xl">{name || "Astrologer Name"}</h1>
          <p className="text-secondary text-xs">
            {designation || <span>Tarot</span>}
          </p>
          <div className="flex justify-center items-center gap-1 text-xs">
            <CiStar size={24} color="yellow" />
            <p>{rating || 4.32}</p>
            <p>{number || "10K+ orders"}</p>
          </div>
        </div>
      </div>

      {/* {Language & Experience} */}
      <div className="w-full border py-2 bg-[#FFFDF9] border-[#E7DCC8] rounded-xl">
        <div className=" flex justify-between text-xs px-2">
          <p>Language</p>
          <p>{language || "Hindi, English"}</p>
        </div>
        <div className="flex justify-between text-xs px-2">
          <p>Experience</p>
          <p>{experience || "10 year"}</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-between mt-2 px-2 shadow-2xl">
        <h1 className="text-2xl font-semibold ">5/min</h1>
        <Button Label="Chat Now" />
      </div>
    </div>
  );
};

export default AstrologyCard;
