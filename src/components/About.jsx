import React from "react";
import { Heart, Users, Leaf } from "lucide-react";
import { uiText } from "../constants/uiText";

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Aile Bağları",
      description: "Aileler birlikte vakit geçirip anılar oluşturacak",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sosyal Gelişim",
      description: "Çocuklar yeni arkadaşlar edinip sosyalleşecek",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Doğayla Bütünlük",
      description: "Ekranlardan uzaklaşıp doğayla buluşacağız",
    },
  ];

  return (
    <section id="hakkinda" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {uiText.about.title}
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {uiText.about.content}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-sky-100 group-hover:bg-sky-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <div className="text-sky-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-sky-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Beklenen Katılımcı
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-2">
                100+
              </div>
              <div className="text-gray-600 font-medium">Aile</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-2">
                8
              </div>
              <div className="text-gray-600 font-medium">Saat Eğlence</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-2">
                ∞
              </div>
              <div className="text-gray-600 font-medium">Anı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
