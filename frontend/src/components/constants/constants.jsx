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
import {
  FaSearch,
  FaBorderAll,
  FaHeart,
  FaBook,
  FaSuitcase,
  FaWallet,
  FaFilter,
  FaBaby,
} from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { MdFamilyRestroom } from "react-icons/md";

export const zodiacData = [
  {
    icon: <TbZodiacAries />,
    title: "Aries",
    date: "Mar 21 - Apr 19",
    iconColor: "text-purple-800",
  },
  {
    icon: <TbZodiacTaurus />,
    title: "Taurus",
    date: "Apr 20 - May 20",
    iconColor: "text-green-600",
  },
  {
    icon: <TbZodiacGemini />,
    title: "Gemini",
    date: "May 21 - Jun 20",
    iconColor: "text-blue-700",
  },
  {
    icon: <TbZodiacCancer />,
    title: "Cancer",
    date: "Jun 21 - Jul 22",
    iconColor: "text-red-400",
  },
  {
    icon: <TbZodiacLeo />,
    title: "Leo",
    date: "Jul 23 - Aug 22",
    iconColor: "text-green-400",
  },
  {
    icon: <TbZodiacVirgo />,
    title: "Virgo",
    date: "Aug 23 - Sep 22",
    iconColor: "text-red-800",
  },
  {
    icon: <TbZodiacLibra />,
    title: "Libra",
    date: "Sep 23 - Oct 22",
    iconColor: "text-blue-500",
  },
  {
    icon: <TbZodiacScorpio />,
    title: "Scorpio",
    date: "Oct 23 - Nov 21",
    iconColor: "text-purple-400",
  },
  {
    icon: <TbZodiacSagittarius />,
    title: "Sagittarius",
    date: "Nov 22 - Dec 21",
    iconColor: "text-red-900",
  },
  {
    icon: <TbZodiacCapricorn />,
    title: "Capricorn",
    date: "Dec 22 - Jan 19",
    iconColor: "text-pink-600",
  },
  {
    icon: <TbZodiacAquarius />,
    title: "Aquarius",
    date: "Jan 20 - Feb 18",
    iconColor: "text-blue-900",
  },
  {
    icon: <TbZodiacPisces />,
    title: "Pisces",
    date: "Feb 19 - Mar 20",
    iconColor: "text-green-400",
  },
];

export const Category = [
  { name: "All", icon: <FaBorderAll />, iconColor: "text-purple-800" },
  { name: "Love", icon: <FaHeart />, iconColor: "text-red-700" },
  { name: "Career", icon: <FaSuitcase />, iconColor: "text-blue-900" },
  { name: "Marriage", icon: <GiLinkedRings />, iconColor: "text-pink-600" },
  { name: "Education", icon: <FaBook />, iconColor: "text-blue-500" },
  { name: "Wealth", icon: <FaWallet />, iconColor: "text-red-900" },
  { name: "Health", icon: <FaSuitcaseMedical />, iconColor: "text-gray-800" },
  { name: "Legal", icon: <GoLaw />, iconColor: "text-black" },
  { name: "Family", icon: <MdFamilyRestroom />, iconColor: "text-blue-800" },
  { name: "Children", icon: <FaBaby />, iconColor: "text-red-400" },
];
