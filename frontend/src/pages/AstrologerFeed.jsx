// import React, { useState } from "react";
// import {
//   FaSearch,
//   FaBorderAll,
//   FaHeart,
//   FaBook,
//   FaSuitcase,
//   FaWallet,
//   FaFilter,
//   FaCross,
// } from "react-icons/fa";
// import { GiLinkedRings } from "react-icons/gi";
// import { FaSuitcaseMedical } from "react-icons/fa6";
// import { GoLaw } from "react-icons/go";
// import { LuArrowUpDown } from "react-icons/lu";

// import AstrologyCard from "../components/ui/AstrologyProfileCard";
// import {
//   AstroData,
//   SortedBtnData,
//   filterBtnData,
// } from "../components/constants/constants";
// import { Category } from "../components/constants/constants.jsx";

// function AstrologerFeed() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [showFilter, setShowFilter] = useState(false);
//   const [showSorting, setShowSorting] = useState(false);

//   const filteredAstrologers = AstroData.filter((astro) => {
//     const matchesSearch = astro.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     let matchesCategory = true;

//     if (selectedCategory !== "All") {
//       switch (selectedCategory) {
//         case "Love":
//           matchesCategory = astro.designation === "Tarot Reader";
//           break;

//         case "Education":
//           matchesCategory = astro.designation === "Numerologist";
//           break;

//         case "Career":
//           matchesCategory = astro.designation === "Vedic Astrologer";
//           break;

//         case "Marriage":
//           matchesCategory = astro.designation === "Palm Reader";
//           break;

//         case "Wealth":
//           matchesCategory = astro.designation === "Numerologist";
//           break;

//         case "Health":
//           matchesCategory = astro.designation === "Vedic Astrologer";
//           break;

//         case "Legal":
//           matchesCategory = astro.designation === "Palm Reader";
//           break;

//         default:
//           matchesCategory = true;
//       }
//     }

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="md:p-10 flex flex-col gap-10">
//       {/* Text Area */}
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-3xl font-semibold cormorant-garamond-h1 p-2 select-none">
//           Connect with Expert Astrologers Anytime, Anywhere
//         </h1>

//         <p className="text-justify text-sm montserrat-p select-none">
//           Get instant guidance for all your astrology-related questions through
//           live chat with experienced astrologers. Whether you're seeking clarity
//           in your personal relationships, career decisions, finances, or life
//           challenges, our experts are available 24/7 to assist you.
//         </p>
//       </div>

//       <div className="md:px-34 w-full flex flex-col justify-start items-start flex-wrap gap-6">
//         <div className="w-full flex items-center justify-start gap-3">
//           {/* Search */}
//           <div className="w-full flex items-center gap-3  px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-[#F2C85B] shadow-md hover:shadow-lg transition-all duration-300">
//             {/* Search */}
//             <FaSearch className="text-[#F2C85B]" />

//             <input
//               name="search"
//               type="text"
//               placeholder="Search by name"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className=" bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
//             />
//           </div>
//           {/* Filter */}
//           <div className="relative">
//             <button
//               onClick={() => setShowFilter(!showFilter)}
//               className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-[#F2C85B] shadow-md"
//             >
//               <FaFilter className="text-yellow-500" />
//             </button>

//             {showFilter && (
//               <div className="absolute top-12 right-0 w-96 bg-white  rounded-xl border border-neutral-400 shadow-xl z-50 overflow-hidden">
//                 {/* headings */}
//                 <div className="px-6 py-2 flex border-b border-neutral-300 justify-between items-center ">
//                   <h1 className="text-lg font-semibold">Filter</h1>
//                   <h1 className="text-sm text-center">Clear all</h1>
//                 </div>

//                 <div className="grid grid-cols-2 ">
//                   {/* left Panel */}

//                   <div className="border-r border-neutral-300 flex flex-col items-start p-4 gap-4 ">
//                     {filterBtnData.map((item) => (
//                       <button className="text-sm p-2   rounded-lg ">
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                   {/* Right Panel*/}
//                   <div>
//                     <div className="flex flex-col gap-2 px-4 py-2 ">

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Sorting */}
//           <div className="relative">
//             <button
//               onClick={() => setShowSorting(!showSorting)}
//               className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-[#F2C85B] shadow-md"
//             >
//               <LuArrowUpDown className="text-yellow-500" />
//             </button>

//             {showSorting && (
//               <div className="absolute flex flex-col items-start px-4 py-2  h-fit top-12 right-0 w-96 bg-white rounded-xl border border-neutral-400 shadow-lg z-50 overflow-hidden">
//                 {/* headings */}
//                 <div className="border-b w-full py-2 flex justify-between border-neutral-300">
//                   <h1 className="text-sm ">Sort By</h1>
                
//                 </div>
//                 {/* buttons */}
//                 <div className="flex flex-col items-start gap-4 py-2 cursor-pointer ">
//                   {SortedBtnData.map((item) => (
//                     <button>{item.name}</button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Text */}
//         <h1 className="text-2xl font-bold ">Frequently Selected</h1>

//         {/* Quick Category */}
//         <div className="w-full flex-wrap flex items-center justify-start gap-3">
//           <div className="flex flex-wrap gap-3">
//             {Category.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => setSelectedCategory(item.name)}
//                 className={`text-black flex justify-center items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 border border-[#F2C85B]
//               ${
//                 selectedCategory === item.name ? "bg-[#F2C85B]" : "bg-white "
//               } `}
//               >
//                 <span className={`${item.iconColor}`}>{item?.icon || ""}</span>
//                 {item.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Astrologers */}

//       <div className="flex justify-center items-center">
//         <AstrologyCard data={filteredAstrologers} />
//       </div>
//     </div>
//   );
// }

// export default AstrologerFeed;
