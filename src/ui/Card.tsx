interface CardData {
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
  category: string;
}

const Card = ({
  icon,
  title,
  description,
  color,
  image,
  category,
}: CardData) => {
  const Icon = icon;
  const hasImage = Boolean(image);
  const padding = hasImage ? "p-0" : "p-8";
  const widthHeight = hasImage ? "" : "w-14 h-14";
  const scaleEffect = hasImage
    ? ""
    : "group-hover:scale-110 transition-transform";
  const hoverColor = hasImage
    ? ""
    : "bg-gradient-to-br from-red-50 to-orange-50";
  const border = hasImage
    ? ""
    : "border border-gray-200 hover:border-red-500/20";

  const shadow = hasImage ? "shadow-lg hover:shadow-2xl" : "hover:shadow-xl";
  const titleHoverColor = hasImage ? "group-hover:text-red-600" : "";
  const cursorEffect = hasImage ? "cursor-pointer" : "";

  return (
    <div
      class={`group relative bg-white rounded-2xl ${padding} ${border} ${shadow} ${cursorEffect}   
     transition-all duration-300`}
    >
      <div
        class={`absolute inset-0 ${hoverColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
      ></div>

      <div class="relative">
        <div
          class={`${widthHeight} rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 ${scaleEffect} ${color}`}
        >
          {
            /* icon */
            Icon && <Icon size={24} class="text-white" />
          }

          {
            // img
            image && (
              <div class="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  class={`w-screen h-full object-cover ${
                    hasImage ? "group-hover:scale-110 transition-transform" : ""
                  } duration-500`}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
            )
          }
        </div>

        <div class={`${hasImage ? "px-8 pb-8" : ""}`}>
          {
            // badge
            category && (
              <div class="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
                {category}
              </div>
            )
          }
          <h3
            class={`text-2xl font-bold text-gray-900 mb-3 ${titleHoverColor} transition-all duration-300`}
          >
            {title}
          </h3>

          <p class="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
