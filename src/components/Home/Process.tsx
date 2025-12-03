import { For } from "solid-js";
import ProcessData from "../../api/ProcessData";
import Card from "../../ui/Card";

const Process = () => {
  return (
    <section class="py-24 open-sans bg-[#FFF9F9] lg:px-0 px-3">
      <div class="container  mx-auto custom-container">
        <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center">
          Our Process
        </h1>

        <div>
          <h1 class="lg:text-4xl text-3xl md:text-5xl font-bold text-gray-900 mt-4 lg:mb-6 mb-4 text-center">
            How We Work
          </h1>

          <p class="lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Our proven process ensures every project is delivered on time, on
            budget, and exceeds expectations.
          </p>
        </div>

        {/* card */}
        {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <For each={ProcessData}>{(process) => <Card {...process} />}</For>
          </div>
        }
      </div>
    </section>
  );
};

export default Process;
