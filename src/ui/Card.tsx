import { AiFillStar } from "solid-icons/ai";
import { FaSolidQuoteRight } from "solid-icons/fa";

interface CardData {
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
  category: string;
  number: string;
  name: string;
  role: string;
  rating: any;
  link: string;
}

const Card = ({
  icon,
  title,
  description,
  color,
  image,
  category,
  number,
  name,
  role,
  rating,
  link,
}: CardData) => {
  const Icon = icon;
  const hasIcon = Boolean(Icon);
  const hasImage = Boolean(image);
  const hasNumber = Boolean(number);
  const hasRating = Boolean(rating);

  return (
    <div
      class={`group relative bg-white ${
        hasRating
          ? "bg-white/5 backdrop-blur-sm border-white/10  hover:border-red-500/30 "
          : ""
      } rounded-2xl 
      ${
        hasImage
          ? "shadow-lg hover:shadow-2xl cursor-pointer p-0"
          : "border border-gray-200 hover:border-red-500/20 hover:shadow-xl p-8"
      }  transition-all duration-300`}
    >
      <div
        class={`absolute inset-0 ${
          hasIcon ? "bg-gradient-to-br from-red-50 to-orange-50" : ""
        }  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
      ></div>

      <a class="relative" {...(link && { href: link })} target="_blank">
        {
          /* number */
          hasNumber && (
            <div class="absolute lg:-top-[45%] -top-[45%] lg:-right-[13%] right-[50%] transform translate-1/2 w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {number}
            </div>
          )
        }

        <div
          class={`${hasIcon ? "w-14 h-14 mb-6" : ""} ${
            hasImage ? "mb-6" : "group-hover:scale-110 transition-transform "
          }  ${color} rounded-xl bg-gradient-to-br flex items-center justify-center `}
        >
          {
            /* icon */
            Icon && (
              <Icon
                size={24}
                class={` ${hasNumber ? "text-red-600" : "text-white"}`}
              />
            )
          }

          {
            // img
            image && (
              <div class="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  width={200}
                  height={200}
                  class={`w-screen h-full object-cover rounded-t-xl ${
                    hasImage ? "group-hover:scale-110 transition-transform" : ""
                  } duration-500`}
                />
                <div class="absolute rounded-t-xl inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
            )
          }
        </div>

        {
          // rating icon Quote
          hasRating && (
            <FaSolidQuoteRight class="w-10 h-10 text-red-500/30 mb-6" />
          )
        }

        {/* rating star */}
        {hasRating && (
          <div class="flex items-center mb-4 text-yellow-400">
            {Array.from({ length: rating }).map(() => (
              <AiFillStar class="w-5 h-5" />
            ))}
          </div>
        )}

        <div class={`${hasImage ? "lg:px-8 lg:pb-8 px-4 pb-6" : ""}`}>
          {
            // badge
            category && (
              <div class="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
                {category}
              </div>
            )
          }
          <h3
            class={`text-2xl font-bold text-gray-900 mb-3 ${
              hasImage ? "group-hover:text-red-600" : ""
            } transition-all duration-300`}
          >
            {title}
          </h3>

          <p
            class={`${hasRating ? "text-gray-300" : "text-gray-600"}  ${
              hasImage ? "line-clamp-3" : ""
            } leading-relaxed`}
          >
            {description}
          </p>
        </div>

        {/* Testimonials name and  role */}
        {hasRating && (
          <div class="mt-4">
            <h1 class="font-semibold text-white">{name}</h1>
            <h1 class="text-sm text-gray-400">{role}</h1>
          </div>
        )}
      </a>

      {/* steps dash */}
      {hasNumber && parseInt(number) < 4 && (
        <div class="hidden lg:block absolute top-1/2 -right-6 w-8 h-0.5 bg-gradient-to-r from-red-300 to-orange-300 z-10"></div>
      )}
    </div>
  );
};

export default Card;
