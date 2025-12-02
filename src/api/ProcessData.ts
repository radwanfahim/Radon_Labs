import { AiOutlineRocket } from "solid-icons/ai";
import { FaRegularLightbulb, FaSolidPencil } from "solid-icons/fa";
import { OcCode2 } from "solid-icons/oc";

interface Process {
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
  category: string;
  number: string;
}

const ProcessData: Process[] = [
  {
    icon: FaRegularLightbulb,
    title: "Discovery",
    description:
      "We dive deep into understanding your goals, target audience, and project requirements.",
    number: "01",
    color: "bg-gradient-to-br from-red-50 to-orange-50",
    category: "",
    image: "",
  },
  {
    icon: FaSolidPencil,
    title: "Design",
    description:
      "Our creative team crafts stunning designs that align with your brand vision.",
    number: "02",
    color: "bg-gradient-to-br from-red-50 to-orange-50",
    category: "",
    image: "",
  },
  {
    icon: OcCode2,
    title: "Development",
    description:
      "We bring designs to life with clean, efficient code and robust functionality.",
    number: "03",
    color: "bg-gradient-to-br from-red-50 to-orange-50",
    category: "",
    image: "",
  },
  {
    icon: AiOutlineRocket,
    title: "Launch",
    description:
      "After thorough testing, we deploy your project and ensure a smooth launch.",
    number: "04",
    color: "bg-gradient-to-br from-red-50 to-orange-50",
    category: "",
    image: "",
  },
];

export default ProcessData;
