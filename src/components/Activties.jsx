import React from "react";
import { Wrench, Wind, Users } from "lucide-react";
import { uiText } from "../constants/uiText";

const Activities = () => {
  const getIcon = (iconName) => {
    const icons = {
      wrench: <Wrench className="w-12 h-12 text-white" />,
      wind: <Wind className="w-12 h-12 text-white" />,
      users: <Users className="w-12 h-12 text-white" />,
    };
    return icons[iconName] || <Wrench className="w-12 h-12 text-white" />;
  };

  return (
    <section
      id="etkinlikler"
      className="py-16 lg:py-24 bg-gradient-to-br from-sky-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {uiText.activities.title}
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Gün boyu sürecek eğlenceli etkinliklerle dolu bir program hazırladık
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {uiText.activities.list.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-8 text-center">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(activity.icon)}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
              <div className="h-2 bg-gradient-to-r from-sky-500 to-blue-600 group-hover:h-3 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
            Program Akışı
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  time: "10:00 - 11:00",
                  title: "Karşılama ve Kayıt",
                  desc: "Katılımcıların karşılanması ve malzeme dağıtımı",
                },
                {
                  time: "11:00 - 14:00",
                  title: "Uçurtma Yapım Atölyesi",
                  desc: "Aileler birlikte uçurtmalarını tasarlayıp yapacaklar",
                },
                {
                  time: "14:00 - 15:00",
                  title: "Öğle Molası",
                  desc: "Piknik ve dinlenme zamanı",
                },
                {
                  time: "15:00 - 16:30",
                  title: "Toplu Uçuş Saati",
                  desc: "Tüm uçurtmaların gökyüzüyle buluşması",
                },
                {
                  time: "16:30 - 17:00",
                  title: "Kapanış ve Ödüller",
                  desc: "En yaratıcı uçurtmalara özel hediyeler",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
                >
                  <div className="bg-sky-500 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
