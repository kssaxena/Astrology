import React, { useState } from "react";
import Button from "../Button";
import { CiStar } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import AstrologyActionPopup from "../AstrologerActionPopup";



const AstrologyCard = ({ data }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);
 
  const handleOpenPopup = (astrologer) => {
    setSelectedAstrologer(astrologer);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedAstrologer(null);
  };

  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-3 justify-center items-center">
        {data?.map((item, index) => (
          <div
            key={item?.id || index}
            className="
              md:w-96
              w-full
              bg-[#FFFFFF]
              border
              border-[#E7DCC8]
              rounded-3xl
              px-4
              py-6
              shadow-md
              hover:shadow-lg
              transition-all
              duration-300
              flex
              flex-col
              gap-3
            "
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={item?.image}
                alt={item?.name}
                className="
                  h-20
                  w-20
                  rounded-full
                  object-cover
                  bg-neutral-200
                "
              />

              <div>
                <h2 className="font-bold text-lg">{item?.name}</h2>

                <p className="text-secondary text-sm">{item?.designation}</p>

                <div className="flex items-center gap-1 mt-1">
                  <CiStar className="text-yellow-500" size={18} />

                  <span className="text-sm">{item?.rating}</span>

                  <span className="text-xs text-gray-500">
                    ({item?.number})
                  </span>
                </div>
              </div>
            </div>

            {/* Language & Experience */}
            <div
              className="
                bg-[#FFFDF9]
                border
                border-[#E7DCC8]
                rounded-xl
                py-3
                px-3
              "
            >
              <div className="flex justify-between text-sm">
                <span>Language</span>
                <span>{item?.language || "Hindi, English"}</span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>Experience</span>
                <span>{item?.experience || "10 Years"}</span>
              </div>
            </div>

            {/* Price & Button */}
            <div
              className="
                flex
                items-center
                justify-between
                mt-2
                rounded-xl
                border
                border-[#F5E8CF]
                px-3
                py-3
              "
            >
              <h3 className="text-xl font-bold flex items-center">
                <LiaRupeeSignSolid />
                {item?.price || 200}
                <span className="text-sm font-normal ml-1">/min</span>
              </h3>

              <Button Label="Chat Now" onClick={() => handleOpenPopup(item)} />
            </div>
            {/* Popup */}
            <AstrologyActionPopup
              isOpen={openPopup}
              onClose={handleClosePopup}
              astrologer={selectedAstrologer}
            />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default AstrologyCard;
