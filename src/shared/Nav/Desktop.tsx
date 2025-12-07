import { createEffect, createSignal, For } from "solid-js";
import logo from "/Logo.png";
import Mobile from "./Mobile";

const Desktop = () => {
  const [isScrolled, setIsScrolled] = createSignal(false);
  const [isOpen, setIsOpen] = createSignal(false);

  createEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  });

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav
      class={`open-sans fixed w-full z-50 transition-all duration-300  ${
        isScrolled() ? "bg-white shadow-lg pb-4" : "bg-transparent "
      }`}
    >
      <div class="container mx-auto custom-container flex items-center justify-between pt-4 relative lg:px-0 px-3">
        <a href="/" class="flex gap-2 font-bold text-xl items-center">
          <img width={40} height={40} src={logo} alt="logo" />
          <h1
            class={`${
              isScrolled() || isOpen() ? "text-red-600" : "text-white"
            }`}
          >
            Radon Lab
          </h1>
        </a>

        <ul
          class={`${
            isScrolled() ? "text-gray-900" : "text-white"
          } lg:flex hidden gap-5 items-center justify-center font-semibold`}
        >
          <For each={navLinks}>
            {(link) => (
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            )}
          </For>
        </ul>

        {/* mobile */}
        <Mobile
          isScrolled={isScrolled}
          navLinks={navLinks}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </nav>
  );
};

export default Desktop;
