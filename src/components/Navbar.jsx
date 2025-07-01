import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { uiText } from "../constants/uiText";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-sky-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-xl lg:text-2xl text-sky-700 hover:text-sky-800 transition-colors"
          >
            {uiText.navbar.brand}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {uiText.navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-sky-600 transition-colors font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-2 pt-4">
              {uiText.navbar.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-medium py-2 px-4 rounded-lg"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
