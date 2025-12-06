import { AiOutlineInstagram, AiOutlineTwitter } from "solid-icons/ai";
import { BiLogosGmail } from "solid-icons/bi";
import { FaBrandsFacebook, FaBrandsLinkedinIn } from "solid-icons/fa";
import logo from "/Logo.png";

const currentYear = new Date().getFullYear();

const footerLinks = {
  Services: [
    "Web Design",
    "Web Development",
    "WordPress",
    "E-Commerce",
    "SEO Optimization",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
  Resources: [
    "Case Studies",
    "Documentation",
    "Support",
    "Privacy Policy",
    "Terms of Service",
  ],
};

const socialLinks = [
  {
    icon: FaBrandsFacebook,
    href: "https://www.facebook.com/profile.php?id=61583982701185",
  },
  { icon: AiOutlineTwitter, href: "#" },
  { icon: AiOutlineInstagram, href: "#" },
  { icon: FaBrandsLinkedinIn, href: "#" },
];

const Footer = () => {
  return (
    <footer class="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-2 mb-6">
              {/* logo */}
              <img src={logo} alt="Radon Lab" class="w-10 h-10" />

              {/* company name */}
              <span class="text-2xl font-bold">Radon Lab</span>
            </div>
            <p class="text-gray-400 mb-6 leading-relaxed">
              We are a creative web developer agency specializing in building
              beautiful, functional websites that help businesses grow and
              succeed online.
            </p>
            <div class="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    href={social.href}
                    target="_blank"
                    class="w-10 h-10 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all"
                  >
                    <Icon class="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div>
              <h3 class="text-lg font-semibold mb-4">{title}</h3>
              <ul class="space-y-3">
                {links.map((link) => (
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="border-t border-white/10 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-400 text-sm">
              © {currentYear} Radon Lab. All rights reserved.
            </p>
            <div class="flex items-center gap-2 text-gray-400 text-sm">
              <BiLogosGmail class="w-4 h-4" />
              {/* email */}
              <span>
                <a href="mailto:radonlabinfo@gmail.com">
                  radonlabinfo@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
