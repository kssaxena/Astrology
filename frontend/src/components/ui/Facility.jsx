import React from "react";
import Button from "../Button";

const FacilityCard = ({ title, img, description }) => {
  return (
    <div className="flex flex-col justify-start items-start rounded-xl border w-full max-w-56 m-4 h-full px-4 py-3 border-[#E7DCC8] shadow-md bg-[#FFFDF9] gap-2  ">
      <h1 className="font-semibold text-xl">{title || "Compatibility"}</h1>

      <img
        src={
          img ||
          "https://images.unsplash.com/vector-1741055270418-0324f5b18211?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="object fit"
        alt=""
      />

      <p className="text-sm mt-2 text-justify ">
        {description ||
          "Check Your relationship compatibility with your partner with detailed analysis."}
      </p>
      <Button Label="Explore Now" variant="low" />
    </div>
  );
};

export default FacilityCard;
