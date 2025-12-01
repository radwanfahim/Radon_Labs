import { AiOutlineCode } from "solid-icons/ai";
import Card from "../../ui/Card";
import { BsPaletteFill, BsPhone } from "solid-icons/bs";
import { RiFinanceShoppingCart2Fill } from "solid-icons/ri";
import { FiSearch } from "solid-icons/fi";
import { BiSolidZap } from "solid-icons/bi";
import { For } from "solid-js";

interface Service {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const Services = () => {
  // ANCHOR services data
  const services: Service[] = [
    {
      icon: BsPaletteFill,
      title: "Web Design",
      description:
        "Beautiful, modern designs that capture your brand essence and engage your audience.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: AiOutlineCode,
      title: "Web Development",
      description:
        "Custom-coded websites built with cutting-edge technologies for optimal performance.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: BsPhone,
      title: "WordPress Solutions",
      description:
        "Powerful WordPress websites with custom themes and plugins tailored to your needs.",
      color: "from-red-600 to-red-500",
    },
    {
      icon: RiFinanceShoppingCart2Fill,
      title: "E-Commerce",
      description:
        "Full-featured online stores that convert visitors into customers and drive sales.",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: FiSearch,
      title: "SEO Optimization",
      description:
        "Strategic optimization to boost your search rankings and online visibility.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: BiSolidZap,
      title: "Performance",
      description:
        "Lightning-fast websites optimized for speed, accessibility, and user experience.",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section class="container  mx-auto custom-container py-24 open-sans">
      <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center">
        Our Services
      </h1>

      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 text-center">
          What We Do Best
        </h1>

        <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center">
          From concept to launch, we provide comprehensive digital solutions
          that elevate your brand and drive business growth
        </p>
      </div>

      {/* card */}
      <div class="">
        {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <For each={services}>{(service) => <Card {...service} />}</For>
          </div>
        }
      </div>
    </section>
  );
};

export default Services;
