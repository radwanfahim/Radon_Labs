import headerPattern from "../../assets/header-pattern.png";
import AppointmentButton from "../../ui/AppointmentButton";

const Header = () => {
  return (
    <section class="open-sans relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 ">
      {/* background */}
      <div
        class="object-cover absolute inset-0 opacity-10 bg-no-repeat "
        style={{
          "background-image": `url(${headerPattern})`,
        }}
      ></div>

      {/* container */}

      <div class="container mx-auto custom-container relative">
        <div class="flex justify-between items-center min-h-screen">
          {/* left */}
          <div>
            <h1 class="roboto-slab text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight capitalize">
              Driving growth through
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                innovative web development.
              </span>
            </h1>

            <p class="text-xl text-gray-300 mb-8 leading-relaxed w-3/4">
              Turn clicks into customers. Radon Labs designs high-performing
              websites and eCommerce solutions that engage users and boost your
              business.
            </p>

            {/* buttons */}
            <div class="flex items-center gap-3">
              {/* appointments */}
              <AppointmentButton />

              {/* view work */}
              <a
                href="#"
                class="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20 "
              >
                <span class="font-semibold">View Our Work</span>
              </a>
            </div>
          </div>

          {/* right */}
          <div class="w-[60%]">
            <div class="relative hidden lg:block">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-3xl opacity-20"></div>
                <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div class="space-y-4">
                    <div class="h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded w-3/4"></div>
                    <div class="h-4 bg-gray-700 rounded w-1/2"></div>
                    <div class="h-32 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl border border-red-500/20"></div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="h-24 bg-gray-800 rounded-lg border border-white/10"></div>
                      <div class="h-24 bg-gray-800 rounded-lg border border-white/10"></div>
                    </div>
                    <div class="h-4 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
