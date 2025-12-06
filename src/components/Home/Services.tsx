import Card from "../../ui/Card";
import { For } from "solid-js";
import ServiceData from "../../api/ServiceData";

const Services = () => {
  return (
    <section
      id="services"
      class="container  mx-auto custom-container py-24 open-sans lg:px-0 px-3"
    >
      <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center ">
        Our Services
      </h1>

      <div>
        <h1 class="lg:text-4xl text-3xl  font-bold text-gray-900 mt-4 lg:mb-6 mb-4 text-center">
          What We Do Best
        </h1>

        <p class="lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
          From concept to launch, we provide comprehensive digital solutions
          that elevate your brand and drive business growth
        </p>
      </div>

      {/* card */}
      <div class="">
        {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <For each={ServiceData}>{(service) => <Card {...service} />}</For>
          </div>
        }
      </div>
    </section>
  );
};

export default Services;
