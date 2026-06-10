import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div
      className="
        fixed
        inset-0
        bg-white/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-9999
      "
    >
      <div className="flex flex-col items-center gap-4">
        <AiOutlineLoading3Quarters
          className="animate-spin text-[#FBBF24]"
          size={50}
        />

        <p className="text-[#1E2A26] font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
