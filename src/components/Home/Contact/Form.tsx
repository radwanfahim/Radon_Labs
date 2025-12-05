import { createSignal, For } from "solid-js";
import ServiceData from "../../../api/ServiceData";
import { BsSendFill } from "solid-icons/bs";
import { AiFillCheckCircle } from "solid-icons/ai";

const Form = () => {
  const [success, setSuccess] = createSignal(false);

  // NOTE this filterout the performance and add others
  const interestedServices = [
    ...ServiceData.filter((service) => service.title !== "Performance"),
    { title: "Others" },
  ];

  // form data handler
  const handleFormData = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(import.meta.env.VITE_WEB3FORMS_API_KEY);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSuccess(true);
      e.target.reset();
    } else {
      setSuccess(false);
    }
  };

  return (
    <div class="">
      <form onSubmit={handleFormData}>
        {/* name */}
        <fieldset class="fieldset ">
          <legend class="fieldset-legend font-bold text-md">Your Name</legend>
          <input
            name="name"
            type="text"
            class="input w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
            placeholder="User Name"
            required
          />

          {/* email */}

          <legend class="fieldset-legend font-bold text-md">
            Email Address
          </legend>
          <input
            name="email"
            type="email"
            class="input w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
            placeholder="user@mail.com"
            required
          />

          {/*Service Interested In*/}
          <div>
            <legend class="fieldset-legend font-bold text-md">
              Service Interested In
            </legend>
            <select
              class="select px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all w-full"
              required
              name="service"
            >
              <option disabled selected>
                Select a Service
              </option>

              <For each={interestedServices}>
                {(service) => {
                  const data = service.title;
                  const lowerCase = data.toLowerCase();

                  const joinValue = lowerCase.split(" ").join("-");

                  return <option value={joinValue}>{service?.title}</option>;
                }}
              </For>
            </select>
          </div>

          {/* Project Details */}
          <legend class="fieldset-legend font-bold text-md">
            Project Details
          </legend>

          <textarea
            rows={6}
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none"
            placeholder="Tell us about your project... What type of website do you need? What features are important to you? Share your vision with us."
            required
            name="details"
          />

          {/* submit */}
          {success() ? (
            <button
              class="w-full bg-green-600 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer mt-4"
              disabled
            >
              <span class="font-semibold text-[16px]">Message Send</span>
              <AiFillCheckCircle class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              type="submit"
              class="w-full bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer mt-4"
            >
              <span class="font-semibold text-[16px]">Send Message</span>
              <BsSendFill class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
