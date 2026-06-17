// extra file

import React, { useState } from "react";
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
    id: 1,
    sign: "Aries",
    icon: <TbZodiacAries />,
    horoscope:
      "Today is a great day to start something new. Your energy and confidence are high.",
    luckyNumber: 1,
    luckyColor: "white",
    mood: "Positive",
  },
  {
    id: 2,
    sign: "Taurus",
    icon: <TbZodiacTaurus />,
    horoscope:
      "Focus on stability and financial planning. Patience will bring rewards.",
    luckyNumber: 2,
    luckyColor: "Black",
    mood: "Negative",
  },
  {
    id: 3,
    sign: "Gemini",
    icon: <TbZodiacGemini />,
    horoscope:
      "Communication opens new opportunities. Express your thoughts clearly.",
    luckyNumber: 3,
    luckyColor: "Yellow",
    mood: "Positive",
  },
  {
    id: 4,
    sign: "Cancer",
    icon: <TbZodiacCancer />,
    horoscope: "Spend time with family and nurture your emotional well-being.",
    luckyNumber: 4,
    luckyColor: "Pink",
    mood: "Positive",
  },
  {
    id: 5,
    sign: "Leo",
    icon: <TbZodiacLeo />,
    horoscope:
      "Your leadership skills shine today. Take initiative and inspire others.",
    luckyNumber: 5,
    luckyColor: "Blue",
    mood: "Negative",
  },
  {
    id: 6,
    sign: "Virgo",
    icon: <TbZodiacVirgo />,
    horoscope:
      "Organization and attention to detail will help you accomplish your goals.",
    luckyNumber: 6,
    luckyColor: "Sky",
    mood: "Positive",
  },
  {
    id: 7,
    sign: "Libra",
    icon: <TbZodiacLibra />,
    horoscope:
      "Seek balance in your relationships and trust your diplomatic nature.",
    luckyNumber: 7,
    luckyColor: "Violet",
    mood: "Negative",
  },
  {
    id: 8,
    sign: "Scorpio",
    icon: <TbZodiacScorpio />,
    horoscope:
      "Trust your intuition. Hidden opportunities may reveal themselves today.",
    luckyNumber: 8,
    luckyColor: "Gold",
    mood: "Negative",
  },
  {
    id: 9,
    sign: "Sagittarius",
    icon: <TbZodiacSagittarius />,
    horoscope:
      "Adventure and learning are favored. Explore new ideas and experiences.",
    luckyNumber: 9,
    luckyColor: "Green",
    mood: "Positive",
  },
  {
    id: 10,
    sign: "Capricorn",
    icon: <TbZodiacCapricorn />,
    horoscope:
      "Hard work and discipline will move you closer to your long-term goals.",
    luckyNumber: 10,
    luckyColor: "Light Pink",
    mood: "Neutral",
  },
  {
    id: 11,
    sign: "Aquarius",
    icon: <TbZodiacAquarius />,
    horoscope:
      "Creative thinking and innovation will help you solve challenges today.",
    luckyNumber: 11,
    luckyColor: "Silver",
    mood: "Positive",
  },
  {
    id: 12,
    sign: "Pisces",
    icon: <TbZodiacPisces />,
    horoscope:
      "Listen to your inner voice. Creativity and compassion guide your path.",
    luckyNumber: 12,
    luckyColor: "Gray",
    mood: "Positive",
  },
];

function TodayHoroscope() {
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacData[0]);

  return (
    <section className="relative py-10 px-6 overflow-hidden bg-linear-to-br from-[#fffefb] via-[#fff8eb] to-[#fff2d6] montserrat-p">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300/20 blur-3xl " />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300/20 blur-3xl " />

      <div className="max-w-10xl mx-auto relative z-10 px-6">
        {/* Heading */}
        <div className="mb-14 ">
          <div className="text-amber-500 font-semibold uppercase tracking-[4px] text-sm text-center">
            Daily Astrology
          </div>

          <h2 className="text-lg md:text-4xl font-bold text-[#1E2A26] mt-3 coustard-h1 text-center">
            Today's Horoscope
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Zodiac Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-4 gap-6">
              {zodiacData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedZodiac(item)}
                  className={`group relative overflow-hidden p-2 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl  ${
                    selectedZodiac.id === item.id
                      ? "bg-linear-to-br from-amber-400 via-yellow-500 to-orange-500 text-white border-transparent shadow-lg shadow-amber-300/50"
                      : "bg-white border-[#EAE6DD] hover:bg-amber-50"
                  }`}
                >
                  <div className="relative z-10 ">
                    <div className="text-xl flex justify-center items-center mb-2 transition-transform duration-300 group-hover:scale-125 ">
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-xs montserrat-p">
                      {item.sign}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Horoscope Panel */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-4xl py-4 px-10 md:px-6 md:py-4 backdrop-blur-xl bg-white/70 border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8 ">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-white text-3xl shadow-lg ">
                  {selectedZodiac.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E2A26] montserrat-p ">
                    {selectedZodiac.sign}
                  </h3>

                  <p className="text-[#6B7280] montserrat-p ">
                    Daily Horoscope Reading
                  </p>
                </div>
              </div>

              {/* Horoscope Content */}
              <div className="relative rounded-3xl bg-linear-to-r from-amber-50 to-orange-50 p-8 border border-amber-100">
                <div className="absolute top-1 left-5 text-6xl text-amber-200 montserrat-p">
                  "
                </div>

                <p className="relative text-md leading-9 text-[#4B5563] pl-6 montserrat-p">
                  {selectedZodiac.horoscope}
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-4">
                  <div className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-500">Lucky Number</p>
                    <h4 className="text-lg font-bold text-amber-500">
                      {selectedZodiac.luckyNumber}
                    </h4>
                  </div>

                  <div className="bg-white rounded-2xl p-2 text-center border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-500">Lucky Color</p>
                    <h4 className="text-lg font-bold text-orange-500">
                      {selectedZodiac.luckyColor}
                    </h4>
                  </div>

                  <div className="bg-white rounded-2xl p-2 text-center border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-500">Mood</p>
                    <h4 className="text-lg font-bold">
                      ✨ {selectedZodiac.mood}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayHoroscope;
