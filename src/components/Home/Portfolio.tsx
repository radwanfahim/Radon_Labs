import { For } from "solid-js";
import Card from "../../ui/Card";

interface Portfolios {
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
  icon: string;
}

const Portfolio = () => {
  // ANCHOR  project data
  const portfolios: Portfolios[] = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern online store with seamless checkout experience",
      color: "",
      icon: "",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional corporate presence with brand identity",
      color: "",
      icon: "",
    },
    {
      title: "Restaurant Portal",
      category: "WordPress",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Interactive menu and reservation system",
      color: "",
      icon: "",
    },
    {
      title: "Tech Startup",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Innovative landing page with animations",
      color: "",
      icon: "",
    },
    {
      title: "Fashion Brand",
      category: "E-Commerce",
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Luxury online boutique experience",
      color: "",
      icon: "",
    },
    {
      title: "Digital Agency",
      category: "Web Design",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Creative portfolio showcase",
      color: "",
      icon: "",
    },
  ];

  return (
    <section id="portfolio" class=" py-24 open-sans bg-gray-50">
      <div class="container  mx-auto custom-container">
        <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center">
          Portfolio
        </h1>

        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 text-center">
            Our Latest Work
          </h1>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Explore our portfolio of successful projects that showcase our
            expertise and creativity.
          </p>
        </div>

        {/* card */}
        {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <For each={portfolios}>
              {(portfolio) => <Card {...portfolio} />}
            </For>
          </div>
        }
      </div>
    </section>
  );
};

export default Portfolio;
