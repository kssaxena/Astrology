import React, { useState } from "react";
import Button from "./Button";
import Logo from "../assets/Logo.png";
import GoogleTranslate from "./GoogleTranslate";

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
    { name: "Contact" },
  ];

  return (
    <header className="bg-[#FFFDF9] border-b rounded-lg border-[#EAE6DD] shadow-lg top-0 z-40 backdrop-blur-md fixed w-full h-18.75 flex justify-center items-center">
      <div className=" mx-auto px-4 lg:px-8 sm:px-4 sm:text-lg w-full">
        <div className="flex items-center justify-between h-18 w-full">
          {/* Logo */}
          <div className="lg:flex items-center gap-1 cursor-pointer ">
            <div className="md:w-30 md:h-14 h-18 w-18">
              <img src={Logo} alt="" className="object-contain h-full w-full" />
            </div>
            {/* <div className="hidden lg:block">
              <h1 className="text-2xl  font-bold text-[#1E2A26]">Zodiac App</h1>

              <p className="text-xs text-[#8B948F]">Astrology & Guidance</p>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-8 ">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1  hover:text-[#1E2A26] transition duration-300  text-lg ">
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

          <div className="flex items-center justify-center gap-4">
            <Button Label="Login" className="hidden md:block" />
            <Button
              Label="Sign Up"
              variant="medium"
              className="hidden md:block"
            />
          </div>
          {/* Mobile Button */}
          <div className="flex justify-center items-center">
            <button
              className="block xl:hidden mx-5"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
            <GoogleTranslate />
          </div>
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
