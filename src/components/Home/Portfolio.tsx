import { For } from "solid-js";
import Card from "../../ui/Card";
import PortfolioData from "../../api/PortfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio" class=" py-24 open-sans bg-gray-50 lg:px-0 px-3">
      <div class="container  mx-auto custom-container">
        <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center">
          Portfolio
        </h1>

        <div>
          <h1 class="lg:text-4xl text-3xl font-bold text-gray-900 mt-4 lg:mb-6 mb-4 text-center">
            Our Latest Work
          </h1>

          <p class="lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Explore our portfolio of successful projects that showcase our
            expertise and creativity.
          </p>
        </div>

        {/* card */}
        {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <For each={PortfolioData}>
              {(portfolio) => <Card {...portfolio} />}
            </For>
          </div>
        }
      </div>
    </section>
  );
};

export default Portfolio;
