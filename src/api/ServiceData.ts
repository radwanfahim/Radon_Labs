import { BsPaletteFill, BsPhone } from "solid-icons/bs";
import { RiFinanceShoppingCart2Fill } from "solid-icons/ri";
import { FiSearch } from "solid-icons/fi";
import { BiSolidZap } from "solid-icons/bi";
import { AiOutlineCode } from "solid-icons/ai";

interface Service {
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
  category: string;
  number: string;
}

const ServiceData: Service[] = [
  {
    icon: BsPaletteFill,
    title: "Web Design",
    description:
      "Beautiful, modern designs that capture your brand essence and engage your audience.",
    color: "from-red-500 to-orange-500",
    image: "",
    category: "",
    number: "",
  },
  {
    icon: AiOutlineCode,
    title: "Web Development",
    description:
      "Custom-coded websites built with cutting-edge technologies for optimal performance.",
    color: "from-orange-500 to-amber-500",
    image: "",
    category: "",
    number: "",
  },
  {
    icon: BsPhone,
    title: "WordPress Solutions",
    description:
      "Powerful WordPress websites with custom themes and plugins tailored to your needs.",
    color: "from-red-600 to-red-500",
    image: "",
    category: "",
    number: "",
  },
  {
    icon: RiFinanceShoppingCart2Fill,
    title: "E-Commerce",
    description:
      "Full-featured online stores that convert visitors into customers and drive sales.",
    color: "from-amber-500 to-yellow-500",
    image: "",
    category: "",
    number: "",
  },
  {
    icon: FiSearch,
    title: "SEO Optimization",
    description:
      "Strategic optimization to boost your search rankings and online visibility.",
    color: "from-red-500 to-pink-500",
    image: "",
    category: "",
    number: "",
  },
  {
    icon: BiSolidZap,
    title: "Performance",
    description:
      "Lightning-fast websites optimized for speed, accessibility, and user experience.",
    color: "from-orange-600 to-red-600",
    image: "",
    category: "",
    number: "",
  },
];

export default ServiceData;
