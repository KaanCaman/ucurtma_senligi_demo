import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { uiText } from "../constants/uiText";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { href: "#hakkinda", text: "Hakkında" },
    { href: "#etkinlikler", text: "Etkinlikler" },
    { href: "#kayit", text: "Kayıt" },
    { href: "#konum", text: "Konum" },
    { href: "#destekciler", text: "Destekçiler" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "info@erzincanuçurtma.com",
      href: "mailto:info@erzincanuçurtma.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+90 446 XXX XX XX",
      href: "tel:+90446XXXXXXX",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Erzincan, Türkiye",
      href: "#konum",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-sky-400">
              {uiText.navbar.brand}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Erzincan'ın güzel gökyüzünü, çocuklarımızın kahkahaları ve el
              yapımı uçurtmalarıyla şenlendirmek için düzenlenen bu özel
              etkinliğe sizleri de bekliyoruz.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-sky-600 p-3 rounded-full transition-colors transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-sky-400">
              Hızlı Linkler
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-sky-400 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-sky-400">İletişim</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors group"
                >
                  <div className="text-sky-500 group-hover:text-sky-400">
                    {contact.icon}
                  </div>
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-sky-400">
                Haberleri Takip Et
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-sky-500 text-white"
                />
                <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                {uiText.footer.title}
              </p>
              <p className="text-gray-400 text-sm">
                {uiText.footer.description}
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-semibold text-sky-400">
                {uiText.footer.developer.name}
              </p>
              <p className="text-sm text-gray-400">
                {uiText.footer.developer.title}
              </p>
              <a
                href={`mailto:${uiText.footer.developer.email}`}
                className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                {uiText.footer.developer.email}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-gray-500 text-sm">{uiText.footer.copyright}</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40"
        aria-label="Başa dön"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
