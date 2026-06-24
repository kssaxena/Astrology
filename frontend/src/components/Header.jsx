import React, { useState } from "react";
import Button from "./Button";
import Logo from "../assets/Logo.png";
import GoogleTranslate from "./GoogleTranslate";
import { useNavigate } from "react-router-dom";

const Header = ({ switchForm }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Horoscope",
      submenu: [
        {
          name: "Daily",
          path: "/",
        },
        {
          name: "Weekly",
          path: "/",
        },
        {
          name: "Monthly",
          path: "/",
        },
        {
          name: "Yearly",
          path: "/",
        },
      ],
    },
   
    {
      name: "Free services",
      submenu: [
        {
          name: "Tarot",
          path: "/tarot",
        },
        {
          name: "Free Services",
          path: "/",
        },
      ],
    },
    {
      name: "Panchang",
      submenu: [
        {
          name: "Today Panchang",
          path: "/",
        },
      ],
    },
    { name: "Contact" },
  ];

  return (
    <header className="bg-[#FFFDF9] border-b rounded-lg border-[#EAE6DD] shadow-lg top-0 z-40 backdrop-blur-md fixed w-full h-18.75 flex justify-center items-center">
      <div className=" mx-auto px-4 lg:px-8 sm:px-4 sm:text-lg w-full h-full ">
        <div className="flex items-center justify-between h-18 w-full">
          {/* Logo */}
          <div className="lg:flex items-center gap-1 cursor-pointer">
            <div className="md:w-30 md:h-14 h-18 w-18">
              <a href="/">
                {" "}
                <img
                  src={Logo}
                  alt=""
                  className="object-contain h-full w-full"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block cursor-pointer">
            <ul className="flex items-center gap-8 ">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href={item.path}>
                    <button className="cursor-pointer flex items-center gap-1  hover:text-[#1E2A26] transition duration-300  text-lg ">
                      {item.name}

                      {/* {item.submenu && <span className="text-xs">▼</span>} */}
                    </button>
                  </a>

                  {/* Dropdown */}
                  {item.submenu && activeDropdown === item.name && (
                    <div
                      className="
                      text-sm
                      top-full
                      left-0
                      absolute
                     
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
                          href={subItem.path}
                          className="
                              block
                              px-5
                              py-3
                              text-primary 
                              hover:bg-[#F8F6F0]
                              hover:text-[#1E2A26]
                              transition
                              cursor-pointer
                            "
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-4">
            <Button
              Label="Login/Register"
              className="hidden md:block"
              onClick={() => navigate("authentication/user")}
            />
          </div>
          {/* Mobile Button */}
          <div className="flex justify-center items-center w-fit">
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
          className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
            mobileMenu ? " h-screen" : "max-h-0"
          }`}
        >
          <ul className="space-y-4 border-t border-[#EAE6DD] p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="block text-[#5C6A66] hover:text-[#1E2A26]"
                >
                  {item.name}
                </a>

                {item.submenu && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem}>
                        <a
                          href={subItem.path}
                          className="text-sm text-[#8B948F]"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="px-2">
            <Button
              Label="Login/Register"
              className=""
              onClick={() => navigate("authentication/user")}
            />
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
