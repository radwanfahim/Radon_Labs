import { For } from "solid-js";
import ContactData from "../../../api/ContactData";

const Info = () => {
  return (
    <div class="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl p-8 lg:p-12 text-white">
      <h1 class="text-3xl font-bold mb-3">Get in Touch</h1>
      <p class="text-gray-300 mb-8 leading-relaxed">
        Have a project in mind? Fill out the form and our team will get back to
        you within 24 hours.
      </p>

      {/* contact */}
      <div>
        <For each={ContactData}>
          {(contact) => {
            const Icon = contact.icon;

            return (
              <div class="flex items-start gap-4 space-y-6">
                {/* icon */}
                <div class="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <Icon class="w-6 h-6 text-red-500" />
                </div>

                {/* text */}
                <div>
                  <h1 class="font-semibold mb-1">{contact.title}</h1>
                  {contact.title === "Email" ? (
                    <a
                      href={`mailto:${contact.content}`}
                      class="text-gray-300 hover:text-white transition-colors"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <h1 class="text-gray-300">{contact.content}</h1>
                  )}
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Info;
