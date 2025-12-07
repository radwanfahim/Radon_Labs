import { FiMenu } from "solid-icons/fi";
import { IoClose } from "solid-icons/io";
import { For } from "solid-js";

interface MobileProps {
  isScrolled: () => boolean;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: () => boolean;
  navLinks: { name: string; href: string }[];
}

const Mobile = ({ isScrolled, navLinks, setIsOpen, isOpen }: MobileProps) => {
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen());
  };

  return (
    <div class="lg:hidden block ">
      <button
        onClick={toggleMobileMenu}
        class={`
      relative text-3xl cursor-pointer
      transition-colors duration-300
      ${isScrolled() ? "text-red-600" : "text-white"}
     
      active:scale-90
    `}
      >
        <div
          class={`
        transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] 
        ${
          isOpen() ? "rotate-180 scale-110 text-red-600" : "rotate-0 scale-100 "
        } 
      `}
        >
          {isOpen() ? <IoClose /> : <FiMenu />}
        </div>
      </button>

      {/* when open */}

      <ul
        class={`absolute transition-all duration-500 ease-in-out -top-0 -z-10 transform flex flex-col gap-5 items-center bg-white pb-10 pt-20 w-full left-1/2 -translate-x-1/2 ${
          isScrolled() ? "text-red-600" : "text-white"
        } ${
          isOpen()
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {
          <For each={navLinks}>
            {(link, i) => (
              <li
                class="transition-all duration-500"
                style={{
                  "transition-delay": `${i() * 80}ms`,
                  transform: isOpen() ? "translateY(0)" : "translateY(-10px)",
                  opacity: isOpen() ? 1 : 0,
                }}
              >
                <a
                  class="text-gray-800 font-bold hover:scale-110 transition-transform"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            )}
          </For>
        }
      </ul>
    </div>
  );
};

export default Mobile;
