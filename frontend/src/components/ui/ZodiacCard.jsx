import React from "react";
import {
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from "react-icons/tb";

const zodiacData = [
  {
    icon: <TbZodiacAries />,
    title: "Aries",
    date: "Mar 21 - Apr 19",
  },
  {
    icon: <TbZodiacTaurus />,
    title: "Taurus",
    date: "Apr 20 - May 20",
  },
  {
    icon: <TbZodiacGemini />,
    title: "Gemini",
    date: "May 21 - Jun 20",
  },
  {
    icon: <TbZodiacCancer />,
    title: "Cancer",
    date: "Jun 21 - Jul 22",
  },
  {
    icon: <TbZodiacLeo />,
    title: "Leo",
    date: "Jul 23 - Aug 22",
  },
  {
    icon: <TbZodiacVirgo />,
    title: "Virgo",
    date: "Aug 23 - Sep 22",
  },
  {
    icon: <TbZodiacLibra />,
    title: "Libra",
    date: "Sep 23 - Oct 22",
  },
  {
    icon: <TbZodiacScorpio />,
    title: "Scorpio",
    date: "Oct 23 - Nov 21",
  },
  {
    icon: <TbZodiacSagittarius />,
    title: "Sagittarius",
    date: "Nov 22 - Dec 21",
  },
  {
    icon: <TbZodiacCapricorn />,
    title: "Capricorn",
    date: "Dec 22 - Jan 19",
  },
  {
    icon: <TbZodiacAquarius />,
    title: "Aquarius",
    date: "Jan 20 - Feb 18",
  },
  {
    icon: <TbZodiacPisces />,
    title: "Pisces",
    date: "Feb 19 - Mar 20",
  },
];

const ZodiacCard = () => {
  return (
    <div className="grid md:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-6 ">
      {zodiacData.map((item) => (
        <div
          key={item.title}
          className=" flex items-center justify-center gap-4 p-4 lg:w-55  bg-linear-to-br from-[#fff2d6] via-[#fff8eb] to-[#fffefb] rounded-xl shadow-md bg-[#FFFFFF]"
        >
          <div className="   flex justify-center items-center rounded-full bg-transparent drop-shadow-lg  ">
            <div
              className={`md:text-2xl text-4xl text-[#F2C85B]

              ${item.title === "Aries" ? "text-purple-800" : ""}
              ${item.title === "Taurus" ? "text-green-600" : ""}
              ${item.title === "Gemini" ? "text-blue-700" : ""}
              ${item.title === "Cancer" ? "text-red-400" : ""}
              
              ${item.title === "Leo" ? "text-green-400" : ""}
              ${item.title === "Virgo" ? "text-red-800" : ""}
              ${item.title === "Libra" ? "text-blue-500" : ""}
              ${item.title === "Scorpio" ? "text-purple-400" : ""}      
              ${item.title === "Sagittarius" ? "text-red-900" : ""}
              ${item.title === "Capricorn" ? "text-pink-600" : ""}
              ${item.title === "Aquarius" ? "text-blue-900" : ""}
              ${item.title === "Pisces" ? "text-green-400" : ""} 
            `}
            >
              {item.icon}
            </div>
          </div>
          <div className="">
            <h1 className=" font-semi-bold text-xl cormorant-garamond-h1 tracking-wide">
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
