import React from "react";
import { IoClose } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const AstrologyActionPopup = ({ isOpen, onClose, astrologer }) => {
  if (!isOpen || !astrologer) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="
            relative
            bg-linear-to-r
            from-[#FBBF24]
            via-[#FFC20E]
            to-[#F59E0B]
            p-6
          "
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white"
          >
            <IoClose size={24} />
          </button>

          <h2 className="text-2xl font-bold text-center text-white">
            Connect With Astrologer
          </h2>
        </div>

        {/* Body */}
        <div className="p-6 text-center">
          <img
            src={astrologer?.image}
            alt={astrologer?.name}
            className="
              h-24
              w-24
              rounded-full
              mx-auto
              object-cover
              border-4
              border-[#FBBF24]
            "
          />

          <h3 className="mt-4 text-xl font-bold">{astrologer?.name}</h3>

          <p className="text-gray-500">{astrologer?.designation}</p>

          <p className="text-sm text-gray-400 mt-2">
            Choose how you'd like to connect
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-[#0F5C4D]
                text-white
                py-3
                rounded-2xl
                hover:bg-[#0B473B]
              "
            >
              <IoMdCall />
              Call Now
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-[#FBBF24]
                text-white
                py-3
                rounded-2xl
                hover:bg-[#F59E0B]
              "
            >
              <FaComments />
              Start Chat
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                border
                border-[#FBBF24]
                py-3
                rounded-2xl
                hover:bg-[#FFF7E5]
              "
            >
              <MdEventAvailable />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyActionPopup;
