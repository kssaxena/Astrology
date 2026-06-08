import React from "react";

const Button = ({
  Label = "",
  onClick,
  className = "",
  type,
  variant = "high",
}) => {
  const High = "bg-[#FBBF24]  text-white hover:bg-[#F59E0B]";
  const Medium = "bg-[#0F5C4D] text-white hover:bg-[#0A4033]";
  const Low = "bg-white text-black border border-[#F59E0B] hover:bg-orange-100";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        variant === "high" ? High : variant === "medium" ? Medium : Low
      }  duration-200 ease-in-out text-wrap w-fit px-4 py-2 rounded-2xl text-sm `}
    >
      {Label}
    </button>
  );
};

export default Button;
