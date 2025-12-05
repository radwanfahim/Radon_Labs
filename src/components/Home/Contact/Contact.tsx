import Form from "./Form";
import Info from "./Info";

const Contact = () => {
  return (
    <section class="py-24 open-sans bg-white">
      <div class="container  mx-auto custom-container lg:px-0 px-3">
        <h1 class="text-red-600 font-semibold text-sm uppercase tracking-wider roboto-slab text-center">
          Contact Us
        </h1>

        <div>
          <h1 class="lg:text-4xl text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 text-center">
            Let's Start Your Project
          </h1>

          <p class="lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Ready to bring your vision to life? Get in touch with us today and
            let's create something amazing together.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* get ing touch */}
          <Info />

          {/* form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
