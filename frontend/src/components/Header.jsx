import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home" },
    {
      name: "Horoscope",
      submenu: ["Daily", "Weekly", "Monthly", "Yearly"],
    },
    // { name: "Birth Chart" },
    // { name: "Compatibility" },
    {
      name: "Free services",
      submenu: ["Love Tarot", "Career Tarot", "Daily Tarot"],
    },
    {
      name: "Panchanga",
      submenu: ["Astrology", "Spirituality", "Zodiac Signs"],
    },
    // { name: "Contact" },
  ];

  return (
    <header className="bg-[#FFFDF9] border-b rounded-lg border-[#EAE6DD] shadow-lg top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 sm:px4 sm:text-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#F4EEE2] flex items-center justify-center text-2xl">
              🌙
            </div>

            <div className="hidden lg:block">
              <h1 className="text-2xl  font-bold text-[#1E2A26]">Zodiac App</h1>

              <p className="text-xs text-[#8B948F]">Astrology & Guidance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1  hover:text-[#1E2A26] transition duration-300  text-md ">
                    {item.name}

                    {/* {item.submenu && <span className="text-xs">▼</span>} */}
                  </button>

                  {/* Dropdown */}
                  {item.submenu && activeDropdown === item.name && (
                    <div
                      className="
                      text-sm
                        absolute
                        top-full
                        left-0
                        mt-2
                        w-56
                        bg-[#FFFDF9]
                        rounded-2xl
                        shadow-xl
                        border
                        border-[#E7DCC8]
                        overflow-hidden
                        animate-in
                        fade-in
                        duration-200
                      "
                    >
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="
                              block
                              px-5
                              py-3
                              text-primary 
                              hover:bg-[#F8F6F0]
                              hover:text-[#1E2A26]
                              transition
                            "
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className=" flex justify-center items-center gap-2">
            <Button Label="Login" />
            <Button Label="Sign Up" variant="medium" />
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden  text-primary"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-4 border-t border-[#EAE6DD] pt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="block text-[#5C6A66] hover:text-[#1E2A26]"
                >
                  {item.name}
                </a>

                {item.submenu && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem}>
                        <a href="#" className="text-sm text-[#8B948F]">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
