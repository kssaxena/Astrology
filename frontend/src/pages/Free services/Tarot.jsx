import React from "react";

function TarotIntroduction() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10 py-4 px-4 select-none">
      <div className=" ">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-[#FFF7E6] text-[#D4A017] rounded-full text-sm font-medium">
            Tarot Card Reading
          </span>

          <h2 className=" text-2xl md:text-4xl font-bold cormorant-garamond-h1 text-[#1E2A26]">
            Unlock Guidance Through Tarot Wisdom
          </h2>

          <p className="mt-2 text-gray-600 max-w-3xl mx-auto leading-4 text-sm">
            Explore the hidden messages of the universe through tarot cards and
            gain valuable insights into your life's journey.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-6 text-[12px">
          <p>
            Tarot cards are powerful tools for self-discovery, guidance, and
            spiritual insight. Often regarded as a reflection of one's inner
            self, tarot reading helps uncover hidden truths, explore
            possibilities, and gain clarity about life's journey. Through a
            unique blend of intuition, symbolism, and interpretation, tarot
            cards offer meaningful perspectives on various aspects of life.
          </p>

          <p>
            A traditional tarot deck consists of <strong>78 cards</strong>,
            divided into two sections:
            <strong> Major Arcana</strong> and
            <strong> Minor Arcana</strong>.
          </p>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {/* Major Arcana */}
            <div className="bg-[#FFFDF9] border border-neutral-300 shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1E2A26] mb-3">
                Major Arcana
              </h3>

              <p className="text-gray-600 text-md">
                The Major Arcana cards represent significant life events,
                spiritual lessons, and karmic influences. These cards guide
                individuals through important phases of personal growth,
                transformation, and self-awareness.
              </p>
            </div>

            {/* Minor Arcana */}
            <div className="bg-[#FFFDF9] border border-neutral-300 shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1E2A26] mb-2">
                Minor Arcana
              </h3>

              <p className="text-gray-600 text-md">
                The Minor Arcana cards focus on daily experiences, challenges,
                and opportunities. They provide practical insights into
                relationships, career, finances, emotions, and personal
                decision-making.
              </p>
            </div>
          </div>

          {/* Bottom Paragraph */}
          <p className="pt-2">
            Whether you're seeking answers about your past, clarity in the
            present, or guidance for the future, tarot card readings can offer
            meaningful direction. By revealing patterns, possibilities, and
            hidden influences, tarot serves as a trusted companion on your path
            toward growth, self-awareness, and informed decision-making.
          </p>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold text-[#1E2A26] mb-4">
          How to Read Tarot Cards?
        </h2>

        <p className="text-gray-600 leading-6 text-sm">
          Reading tarot cards begins with setting a clear intention or question.
          Shuffle the deck while focusing on your thoughts, then draw one or
          more cards depending on the spread you choose. Each card carries
          unique symbolism, imagery, and meanings that can help reveal insights
          into your current situation. The key to tarot reading is combining
          intuition with traditional card interpretations to understand the
          guidance being offered.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="p-5 rounded-xl bg-white border border-neutral-300 shadow-md">
            <h3 className="font-semibold">1. Focus</h3>
            <p className="text-sm text-gray-600">
              Think about a question or area of life.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-300 shadow-md">
            <h3 className="font-semibold">2. Shuffle</h3>
            <p className="text-sm text-gray-600">
              Mix the cards while concentrating on your intention.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-300 shadow-md">
            <h3 className="font-semibold">3. Draw</h3>
            <p className="text-sm text-gray-600">
              Select one or more cards from the deck.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-300 shadow-md">
            <h3 className="font-semibold">4. Interpret</h3>
            <p className="text-sm text-gray-600">
              Understand the message hidden in the cards.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="">
        <h2 className="text-2xl text-center font-bold text-[#1E2A26] mb-6">
          Difference Between Major Arcana and Minor Arcana Cards
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-neutral-300 shadow-md">
            <h3 className="text-xl font-semibold mb-3">✨ Major Arcana</h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Represents major life events and spiritual lessons.</li>
              <li>• Consists of 22 cards.</li>
              <li>• Reflects transformation and personal growth.</li>
              <li>• Indicates long-term influences.</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-neutral-300 shadow-md">
            <h3 className="text-xl font-semibold mb-3">🌙 Minor Arcana</h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Represents daily situations and experiences.</li>
              <li>• Consists of 56 cards.</li>
              <li>• Focuses on practical aspects of life.</li>
              <li>• Indicates short-term events and challenges.</li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <div className="mt-12">
        <h2 className="text-3xl font-bold text-[#1E2A26] mb-6">
          Different Tarot Card Spreads
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Single Card Spread</h3>
            <p className="text-gray-600 text-sm mt-2">
              Perfect for quick guidance and daily insights.
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Three Card Spread</h3>
            <p className="text-gray-600 text-sm mt-2">
              Reveals the Past, Present, and Future.
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Celtic Cross Spread</h3>
            <p className="text-gray-600 text-sm mt-2">
              A detailed spread for deep life analysis.
            </p>
          </div>
        </div>
      </div> */}
      <div className="">
        <h2 className="text-2xl font-bold text-[#1E2A26] mb-4">
          The Major Arcana Tarot Cards
        </h2>

        <p className="text-gray-600 leading-8 mb-6">
          The Major Arcana consists of 22 powerful cards that symbolize life's
          important lessons, spiritual growth, and transformative experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "The Fool",
            "The Magician",
            "The High Priestess",
            "The Empress",
            "The Emperor",
            "The Hierophant",
            "The Lovers",
            "The Chariot",
            "Strength",
            "The Hermit",
            "Wheel of Fortune",
            "Justice",
          ].map((card) => (
            <div
              key={card}
              className="p-5 rounded-xl bg-white border border-neutral-300 shadow-md"
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-[#1E2A26] mb-2">
          The Minor Arcana Tarot Cards
        </h2>

        <p className="text-gray-600 leading-8 mb-4 ">
          The Minor Arcana consists of 56 cards divided into four suits. These
          cards represent daily events, emotions, actions, and practical
          situations.
        </p>

        <div className="grid md:grid-cols-4 gap-4 ">
          <div className="p-5 rounded-xl border border-neutral-300 shadow-md bg-white">
            <h3 className="font-semibold">🏆 Cups</h3>
            <p className="text-sm text-gray-600 mt-2">
              Emotions, relationships, and intuition.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-300 shadow-md bg-white">
            <h3 className="font-semibold">🔥 Wands</h3>
            <p className="text-sm text-gray-600 mt-2">
              Passion, creativity, and ambition.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-300 shadow-md bg-white">
            <h3 className="font-semibold">⚔️ Swords</h3>
            <p className="text-sm text-gray-600 mt-2">
              Thoughts, communication, and challenges.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-300 shadow-md bg-white">
            <h3 className="font-semibold">🪙 Pentacles</h3>
            <p className="text-sm text-gray-600 mt-2">
              Wealth, career, and material success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TarotIntroduction;
