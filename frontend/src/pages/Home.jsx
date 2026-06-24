import React from "react";
import HeroImg2 from "../assets/HeroImg2.png";
import { CiStar } from "react-icons/ci";
import Button from "../components/Button";
import ZodiacCard from "../components/ui/ZodiacCard";
import ServiceCard from "../components/ui/Services";
import AstrologyCard from "../components/ui/AstrologyProfileCard";
import { AstroData } from "../components/constants/constants";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col gap-6 justify-around md:p-4  items-center  bg-linear-to-br from-[#fffefb] via-[#fff8eb] to-[#fff2d6] w-full ">
      {/* Hero section */}
      <div className="flex justify-end items-center h-fit lg:h-[70vh] w-full">
        {/* Hero content */}
        <div className="w-fit flex flex-col gap-2  md:py-10 md:px-10 p-6 md:absolute z-0 left-0 ">
          <div className="flex justify-start items-center gap-1 lg:px-20">
            <CiStar className="text-lg" />
            <p className="text-xs text-gray-800 select-none">
              GUIDED BY THE STARS
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:px-20">
            <span className="lg:text-5xl text-2xl font-semibold cormorant-garamond-h1 select-none">
              Find Clarity.
            </span>
            <h1 className="lg:text-8xl text-6xl font-semibold cormorant-garamond-h1 flex flex-col w-fit select-none">
              Embrace{" "}
              <span className="text-[#F2C85B] drop-shadow-2xl cormorant-garamond-h1 tracking-wide select-none">
                Your Destiny.
              </span>
            </h1>
            <div className="gap-2 flex flex-col md:flex-row py-5">
              <Button variant="high" Label="Get Your Horoscope" />
              <Button variant="medium" Label="Generate Birth Chart" />
            </div>
          </div>
        </div>

        {/* Hero Img */}
        <div className="hidden md:block md:w-1/2 p-10 select-none">
          <img src={HeroImg2} alt="" className="object-cover h-full w-full" />
        </div>
      </div>

      {/* Zodiac Sign */}
      <div className="bg-[#FFFDF9] p-4 rounded-2xl  w-full flex flex-col gap-10 py-10">
        <h1 className="text-2xl font-medium uppercase text-center tracking-widest cormorant-garamond-h1 ">
          Your Zodiac
        </h1>
        <ZodiacCard />
      </div>

      {/* Services  */}
      <div className="w-full">
        <ServiceCard />
      </div>
      <div className="">
        <AstrologyCard data={AstroData} />
        <div className="flex justify-center p-6">
          <Button
            Label="Explore more"
            onClick={() => navigate("/astrologerfeed")}
            className="flex justify-center p-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
