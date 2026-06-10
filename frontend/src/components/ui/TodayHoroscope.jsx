import React, { useState } from "react";

const zodiacData = [
  {
    id: 1,
    sign: "Aries",
    icon: "♈",
    horoscope:
      "Today is a great day to start something new. Your energy and confidence are high.",
  },
  {
    id: 2,
    sign: "Taurus",
    icon: "♉",
    horoscope:
      "Focus on stability and financial planning. Patience will bring rewards.",
  },
  {
    id: 3,
    sign: "Gemini",
    icon: "♊",
    horoscope:
      "Communication opens new opportunities. Express your thoughts clearly.",
  },
  {
    id: 4,
    sign: "Cancer",
    icon: "♋",
    horoscope: "Spend time with family and nurture your emotional well-being.",
  },
];

function TodayHoroscope() {
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacData[0]);

  return (
    <section className="bg-[#FFFDF9] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1E2A26] mb-10">
          Today's Horoscope
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {zodiacData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedZodiac(item)}
                  className={`
                    p-5
                    rounded-3xl
                    border
                    transition-all
                    duration-300
                    hover:shadow-lg
                    ${
                      selectedZodiac.id === item.id
                        ? "bg-[#FBBF24] text-white border-[#FBBF24]"
                        : "bg-white border-[#EAE6DD]"
                    }
                  `}
                >
                  <div className="text-5xl mb-3">{item.icon}</div>

                  <h3 className="font-semibold text-lg">{item.sign}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-[#EAE6DD] p-8 shadow-md h-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{selectedZodiac.icon}</span>

                <div>
                  <h3 className="text-3xl font-bold text-[#1E2A26]">
                    {selectedZodiac.sign}
                  </h3>

                  <p className="text-[#5C6A66]">Daily Horoscope</p>
                </div>
              </div>

              <div className="bg-[#FFF8E7] rounded-2xl p-6">
                <p className="text-lg leading-8 text-[#5C6A66]">
                  {selectedZodiac.horoscope}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayHoroscope;
