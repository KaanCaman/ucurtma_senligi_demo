# Erzincan Uçurtma Şenliği 🪁

Erzincan'ın güzel gökyüzünü, çocuklarımızın kahkahaları ve el yapımı uçurtmalarıyla şenlendirmek için düzenlenen özel etkinliğin resmi web sitesi.

## 📋 Proje Hakkında

Bu proje, dijital çağda büyüyen çocuklarımızı ekranlardan uzaklaştırıp doğayla buluşturmayı, onlara kendi elleriyle bir şeyler üretmenin mutluluğunu yaşatmayı ve ailelerin birlikte kaliteli vakit geçireceği bir anı yaratmayı hedefler.

## 🚀 Özellikler

- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Modern UI/UX**: Tailwind CSS ile şık ve kullanışlı arayüz
- **Kayıt Formu**: Etkinliğe katılım için detaylı form sistemi
- **Harita Entegrasyonu**: Etkinlik konumu için harita desteği
- **Sosyal Medya Entegrasyonu**: Sosyal medya bağlantıları
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **Erişilebilirlik**: Web erişilebilirlik standartlarına uygun

## 🛠️ Teknolojiler

- **React 18**: Modern React hooks ve bileşenler
- **Vite**: Hızlı geliştirme ve build aracı
- **Tailwind CSS**: Vite entegrasyonu ile utility-first CSS
- **Lucide React**: Modern ikon kütüphanesi
- **Responsive Design**: Mobile-first yaklaşım

## 📁 Proje Yapısı

```
ucurtma_senligi_demo/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Activities.jsx
│   │   ├── Registration.jsx
│   │   ├── Location.jsx
│   │   ├── Supporters.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── uiText.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```

## 🔧 Kurulum

1. **Projeyi klonlayın:**

```bash
git clone https://github.com/kullaniciadi/ucurtma_senligi_demo.git
cd ucurtma_senligi_demo
```

2. **Bağımlılıkları yükleyin:**

```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcınızda açın:**

```
http://localhost:5173
```

## 📦 Build

Projeyi production için derlemek için:

```bash
npm run build
# veya
yarn build
```

Build edilen dosyaları önizlemek için:

```bash
npm run preview
# veya
yarn preview
```

## 🎨 Özelleştirme

### UI Metinlerini Değiştirme

Tüm metin içerikleri `src/constants/uiText.js` dosyasında merkezi olarak yönetilmektedir. Bu dosyayı düzenleyerek site içeriklerini kolayca değiştirebilirsiniz.

### Tailwind CSS Özelleştirme

Tailwind CSS, Vite'nin kendi entegrasyonu ile kullanılmaktadır. Özel stiller için `src/styles/globals.css` dosyasını düzenleyebilirsiniz.

### Form İşlevi

Kayıt formu şu anda frontend-only olarak çalışmaktadır. Backend entegrasyonu için `src/components/Registration.jsx` dosyasındaki `handleSubmit` fonksiyonunu güncelleyin.

## 🗺️ Harita Entegrasyonu

Gerçek harita işlevi için Google Maps API'sini entegre edebilirsiniz:

1. Google Maps API key'i alın
2. `src/components/Location.jsx` dosyasını güncelleyin
3. Google Maps React bileşenini ekleyin

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚙️ Vite Konfigürasyonu

Proje Vite ile yapılandırılmıştır. Özelleştirmek için `vite.config.js` dosyasını düzenleyebilirsiniz:

- **Port değiştirme**: Server konfigürasyonunda port ayarı
- **Proxy ayarları**: API çağrıları için proxy konfigürasyonu
- **Plugin ekleme**: Ek Vite plugin'leri

## 🎯 Gelecek Özellikler

- [ ] Backend API entegrasyonu
- [ ] Gerçek harita entegrasyonu
- [ ] Çoklu dil desteği
- [ ] Admin paneli
- [ ] E-posta bildirimleri
- [ ] Sosyal medya paylaşımları
- [ ] Etkinlik geri sayımı
- [ ] Fotoğraf galerisi

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Açıklama'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Bir Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Proje Sahibi**: KAAN CAMAN
- **E-posta**: kaancaman@outlook.com
- **Web**: [GitHub](https://github.com/KaanCaman/)

---

**Not**: Bu proje, Erzincan'a değer katma amacıyla hazırlanmış demo bir web sitesidir. Gerçek etkinlik bilgileri için ilgili kurumlarla iletişime geçiniz.

## 🔗 Demo

- [Demo Site](https://ucurtma-senligi-demo.vercel.app)

---

💝 **Erzincan'ın çocukları için yapılan bu proje ile hayatlarına renk katmaya devam ediyoruz!**
