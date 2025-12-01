interface CardData {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const Card = ({ icon, title, description, color }: CardData) => {
  const Icon = icon;
  return (
    <div class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-500/20 hover:shadow-xl transition-all duration-300">
      <div class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div class="relative">
        <div
          class={`w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${color}`}
        >
          {
            /* icon */
            Icon && <Icon size={24} class="text-white" />
          }
        </div>

        {
          // badge
        }

        <h3 class="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

        <p class="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
