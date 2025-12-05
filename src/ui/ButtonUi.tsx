interface Button {
  link: string;
  text: string;
  color?: string;
  icon?: any;
  name?: string;
}

const ButtonUi = ({ link, text, color, icon, name }: Button) => {
  const Icon = icon;

  return (
    <div class="flex items-center gap-3">
      <a
        href={link}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(`${name}`)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        class={`inline-flex items-center justify-center space-x-2 text-white px-8 py-4 rounded-full transition-all border hover:shadow-xl group cursor-pointer ${color}`}
      >
        <span class="font-semibold">{text}</span>
        <span>
          <Icon class="w-5 h-5 group-hover:scale-110 transition delay-150 duration-300 ease-in-out" />
        </span>
      </a>
    </div>
  );
};

export default ButtonUi;
