import React from "react";
import { Calendar, Clock } from "lucide-react";
import { uiText } from "../constants/uiText";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative text-white min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block drop-shadow-lg">{uiText.hero.title}</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 drop-shadow-md opacity-95 leading-relaxed">
            {uiText.hero.subtitle}
          </p>

          {/* Date and Time */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-10">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <Calendar className="w-6 h-6" />
              <span>{uiText.hero.date}</span>
            </div>
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <Clock className="w-6 h-6" />
              <span>{uiText.hero.time}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#hakkinda"
              className="bg-white text-sky-600 font-bold py-4 px-8 rounded-full shadow-xl hover:bg-sky-50 hover:shadow-2xl transition-all transform hover:scale-105 text-lg"
            >
              {uiText.hero.cta}
            </a>
            <a
              href="#kayit"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-sky-600 transition-all transform hover:scale-105 text-lg"
            >
              Hemen Kayıt Ol
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
