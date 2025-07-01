import React from "react";
import { MapPin, Car, Bus, Clock, Navigation } from "lucide-react";
import { uiText } from "../constants/uiText";

const Location = () => {
  const transportOptions = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Özel Araç",
      description: "Ücretsiz park alanı mevcut",
      time: "Şehir merkezinden 15 dk",
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: "Toplu Taşıma",
      description: "Belediye otobüsleri düzenli sefer",
      time: "Şehir merkezinden 25 dk",
    },
  ];

  const facilities = [
    "Geniş yeşil alan",
    "Ücretsiz park alanı",
    "WC ve lavabo imkânları",
    "Gölge alanları",
    "Güvenlik görevlileri",
    "İlk yardım ekibi",
  ];

  return (
    <section
      id="konum"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-sky-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {uiText.location.title}
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {uiText.location.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Etkinlik Konumu</h3>
                </div>
                <p className="text-sky-100">{uiText.location.address}</p>
              </div>

              <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-semibold">
                    {uiText.location.mapPlaceholder}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Gerçek uygulamada Google Maps entegrasyonu yapılacak
                  </p>
                </div>
                {/* Example coordinates overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-md text-xs text-gray-600">
                  39.7453° N, 39.4953° E
                </div>
              </div>

              <div className="p-6">
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Yol Tarifi Al
                </button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Transportation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Car className="w-6 h-6 text-sky-600" />
                Ulaşım Seçenekleri
              </h3>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-sky-50 rounded-lg"
                  >
                    <div className="text-sky-600 mt-1">{option.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {option.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Alan İmkânları
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Info */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hava Durumu Bilgisi</h3>
              <p className="text-sky-100 mb-4">
                Etkinlik tarihine yakın günlerde hava durumu güncellemelerini
                takip edin.
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Not:</strong> Etkinlik yağmur durumunda ertelenebilir.
                  Güncellemeler e-posta ve sosyal medyadan duyurulacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
