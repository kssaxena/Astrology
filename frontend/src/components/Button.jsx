import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 

const Button = ({
  Label = "",
  onClick,
  className = "",
  type,
  variant = "high",
  isLoading = false,
  
}) => {
  const High =
    "bg-[#F2C85B] font-light text-black border-1 border-[#F2C85B] hover:bg-[#FBBF24] ";
  const Medium = "bg-[#FFFFFF] border-1 border-[#F2C85B] text-[#1D1833] ";
  const Low = "bg-white text-black border border-[#F59E0B] hover:bg-orange-100";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        variant === "high" ? High : variant === "medium" ? Medium : Low
      }  duration-200 ease-in-out text-wrap w-fit px-4 py-2 rounded-xl 0px 8px 24px rgba(139,107,232,0.25)  
        disabled:opacity-70 md:text-base text-xs tracking-wider
        disabled:cursor-not-allowed `}
    >
      {isLoading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin text-lg" />
        </>
      ) : (
        Label
      )}
    </button>
  );
};

export default Button;
