import React from "react";
import { Award, Heart, Handshake } from "lucide-react";
import { uiText } from "../constants/uiText";

const Supporters = () => {
  const supporterCategories = [
    {
      title: "Ana Destekçiler",
      icon: <Award className="w-6 h-6" />,
      supporters: uiText.supporters.list.slice(0, 3),
      bgColor: "bg-gradient-to-br from-sky-500 to-blue-600",
      textColor: "text-white",
    },
    {
      title: "İş Ortakları",
      icon: <Handshake className="w-6 h-6" />,
      supporters: ["Erzincan Esnaf Odası", "Yerel İşletmeler Birliği"],
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      textColor: "text-white",
    },
  ];

  return (
    <section id="destekciler" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {uiText.supporters.title}
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {uiText.supporters.description}
          </p>
        </div>

        {/* Supporter Categories */}
        <div className="space-y-12">
          {supporterCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-sky-600">{category.icon}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.supporters.map((supporter, index) => (
                  <div
                    key={index}
                    className={`${category.bgColor} ${category.textColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold">
                        {supporter}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Supporter CTA */}
        <div className="mt-20 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 text-sky-600 mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Siz de Destekçi Olun!
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bu güzel projeyi desteklemek ve Erzincan'ın çocuklarına unutulmaz
              anılar yaşatmak için bizimle iletişime geçin. Her türlü destek
              değerlidir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@erzincanuçurtma.com"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full transition-colors transform hover:scale-105"
              >
                İletişime Geç
              </a>
              <a
                href="#kayit"
                className="bg-white border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
        </div>

        {/* Support Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Toplumsal Etki",
              description: "Çocukların gelişimine katkıda bulunun",
              icon: "❤️",
            },
            {
              title: "Görünürlük",
              description: "Marka bilinirliğinizi artırın",
              icon: "👁️",
            },
            {
              title: "Sosyal Sorumluluk",
              description: "Kurumsal sosyal sorumluluk projelerinize katkı",
              icon: "🤝",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
