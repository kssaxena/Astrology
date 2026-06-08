import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F6F0] border-t border-[#EAE6DD] mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌙</span>

              <div>
                <h2 className="text-xl font-bold text-[#1E2A26]">Zodiac App</h2>

                <p className="text-sm text-[#8B948F]">
                  Astrology & Spiritual Guidance
                </p>
              </div>
            </div>

            <p className="text-[#5C6A66] leading-7">
              Discover daily horoscopes, birth charts, zodiac compatibility, and
              spiritual insights designed to guide your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E2A26] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#5C6A66]">
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Horoscope
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Birth Chart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Compatibility
                </a>
              </li>
            </ul>
          </div>

          {/* Astrology Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E2A26] mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-[#5C6A66]">
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Daily Horoscope
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Tarot Reading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Love Compatibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E2A26]">
                  Birth Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E2A26] mb-4">
              Stay Connected
            </h3>

            <p className="text-[#5C6A66] mb-4">
              Get your daily horoscope delivered to your inbox.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-[#D8D8D8]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#1E2A26]
                "
              />

              <button
                className="
                  bg-[#1E2A26]
                  text-white
                  py-3
                  rounded-xl
                  hover:opacity-90
                  transition
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#EAE6DD] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B948F] text-sm">
            © {new Date().getFullYear()} Zodiac App. All rights reserved.
          </p>

          <div className="flex gap-6 text-[#5C6A66]">
            <a href="#" className="hover:text-[#1E2A26]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#1E2A26]">
              Terms of Service
            </a>

            <a href="#" className="hover:text-[#1E2A26]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
