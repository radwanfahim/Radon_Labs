import Card from "../../ui/Card";
import { For } from "solid-js";
import ServiceData from "../../api/ServiceData";

const Services = () => {
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
            <For each={ServiceData}>{(service) => <Card {...service} />}</For>
          </div>
        }
      </div>
    </section>
  );
};

export default Services;
