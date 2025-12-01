interface CardData {
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
}

const Card = ({ icon, title, description, color, image }: CardData) => {
  const Icon = icon;
  const hasImage = Boolean(image);
  const padding = hasImage ? "p-0" : "p-8";
  const widthHeight = hasImage ? "" : "w-14 h-14";
  const scaleEffect = hasImage
    ? ""
    : "group-hover:scale-110 transition-transform";

  return (
    <div
      class={`group relative bg-white rounded-2xl ${padding} border border-gray-200 hover:border-red-500/20 hover:shadow-xl transition-all duration-300`}
    >
      <div class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div class="relative">
        <div
          class={`${widthHeight} rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 ${scaleEffect} ${color}`}
        >
          {
            /* icon */
            Icon && <Icon size={24} class="text-white" />
          }

          {
            // badge
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

        <div class={`${hasImage ? "p-8" : ""}`}>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

          <p class="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
