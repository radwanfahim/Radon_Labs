import { For } from "solid-js";
import TestimonialsData from "../../api/TestimonialsData";
import Card from "../../ui/Card";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      class="py-24 open-sans bg-gradient-to-br from-gray-900 via-red-950 to-gray-900"
    >
      <div class="container  mx-auto custom-container lg:px-0 px-3">
        <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center">
          Testimonials
        </h1>

        <div>
          <h1 class="lg:text-4xl text-3xl md:text-5xl font-bold text-white mt-4 mb-6 text-center">
            What Our Clients Say
          </h1>

          <p class="lg:text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        {/* card */}
        {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <For each={TestimonialsData}>
              {(testimonial) => <Card {...testimonial} />}
            </For>
          </div>
        }
      </div>
    </section>
  );
};

export default Testimonials;
