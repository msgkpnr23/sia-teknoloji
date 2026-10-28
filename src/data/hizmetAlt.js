export const slugify = (text) =>
  text
    .replace(/\u0130/g, "i")
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u011F/g, "g")
    .replace(/\u00FC/g, "u")
    .replace(/\u015F/g, "s")
    .replace(/\u00F6/g, "o")
    .replace(/\u00E7/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const HIZMET_ALT = {
  "ui-ux": {
    "Kullanıcı Deneyimi": {
      intro:
        "Kullanıcıların ihtiyaçlarını ve yaşadıkları sorunları anlayarak tasarım kararlarını bu verilere dayandırıyoruz.",
      points: [
        "Kullanıcı görüşmeleri ve anketler",
        "Persona ve kullanıcı yolculuğu çalışmaları",
        "Kullanılabilirlik testleri",
        "Bulguların tasarıma aktarılması",
      ],
    },
    Wireframe: {
      intro:
        "Sayfanın iskeletini; yapıyı, içerik sırasını ve yerleşimi görsel detaya girmeden planlıyoruz.",
      points: [
        "Sayfa bölümlerinin sıralanması",
        "İçerik önceliklerinin belirlenmesi",
        "Düşük ve orta sadakatli taslaklar",
        "Ekip ve müşteri onayı için hızlı revizyon",
      ],
    },
    Prototip: {
      intro:
        "Ekranları birbirine bağlayarak kullanıcının bir görevi nasıl tamamlayacağını test edilebilir hale getiriyoruz.",
      points: [
        "Tıklanabilir kullanıcı akışı",
        "Geçiş ve etkileşim tasarımı",
        "Gerçek kullanıcılarla test",
        "Geliştirmeye geçmeden önce riskleri azaltma",
      ],
    },
    "Responsive Tasarım": {
      intro:
        "Sayfanın telefon, tablet ve masaüstü ekranlarında düzenli ve kullanılabilir görünmesini sağlıyoruz.",
      points: [
        "Kırılma noktalarının belirlenmesi",
        "Esnek ızgara yapısı",
        "Dokunmatik kullanıma uygun öğeler",
        "Farklı cihazlarda görsel kontrol",
      ],
    },
    "Modern Web Arayüzleri": {
      intro:
        "Güncel tasarım eğilimlerini sade, hızlı ve etkileşimli arayüzlerle markanızın diline uyarlıyoruz.",
      points: [
        "Sade ve ferah düzen",
        "Tutarlı tipografi ve renk sistemi",
        "Anlamlı hover ve geçiş animasyonları",
        "Erişilebilirlik kontrolleri",
      ],
    },
  },

  frontend: {
    "React.js": {
      intro:
        "Arayüzleri yeniden kullanılabilir bileşenlere bölüyor, durum yönetimini sade ve anlaşılır tutuyoruz.",
      points: [
        "Bileşen tabanlı mimari",
        "Props ve state yönetimi",
        "React Router ile sayfa yapısı",
        "Bakımı kolay kod organizasyonu",
      ],
    },
    JavaScript: {
      intro:
        "Form kontrolleri, animasyonlar ve kullanıcı etkileşimlerini modern JavaScript ile yönetiyoruz.",
      points: [
        "Form doğrulama",
        "Olay yönetimi",
        "Asenkron işlemler",
        "Modern ES özellikleri",
      ],
    },
    "API Entegrasyonu": {
      intro:
        "Sitenizi ödeme, form, veritabanı ya da üçüncü taraf servislerle güvenli şekilde bağlıyoruz.",
      points: [
        "REST API bağlantıları",
        "Yükleme ve hata durumlarının yönetimi",
        "Veri doğrulama",
        "Güvenli anahtar yönetimi",
      ],
    },
    "Performans Optimizasyonu": {
      intro:
        "Görsel optimizasyonu, kod bölme ve önbellekleme ile sayfaların daha hızlı açılmasını sağlıyoruz.",
      points: [
        "Görsel sıkıştırma ve WebP",
        "Lazy loading",
        "Kod bölme",
        "Core Web Vitals takibi",
      ],
    },
    "Responsive Development": {
      intro:
        "Geliştirdiğimiz uygulamanın her ekran boyutunda aynı düzgünlükte çalışmasını test ediyoruz.",
      points: [
        "Esnek CSS yapısı",
        "Medya sorguları",
        "Farklı cihazlarda test",
        "Tarayıcı uyumluluğu kontrolü",
      ],
    },
  },

  responsive: {
    "Responsive Web": {
      intro:
        "Sitenin içeriği ekran genişliğine göre kendiliğinden yeniden düzenlemesini sağlıyoruz.",
      points: [
        "Akışkan ızgara",
        "Esnek görseller",
        "Ekrana uyan tipografi",
        "Taşmaların önlenmesi",
      ],
    },
    "Mobil Uyumluluk": {
      intro:
        "Telefonda dokunmatik kullanıma uygun butonlar, okunaklı yazılar ve kısa yollar tasarlıyoruz.",
      points: [
        "Dokunma alanı boyutları",
        "Mobil menü tasarımı",
        "Hızlı yükleme",
        "Formların mobilde kolay kullanımı",
      ],
    },
    "Dijital Ürünler": {
      intro:
        "Fikrinizi kullanıcıların gerçekten kullanabileceği web tabanlı dijital ürünlere dönüştürüyoruz.",
      points: [
        "Ürün fikri analizi",
        "Arayüz ve akış tasarımı",
        "Web tabanlı geliştirme",
        "Yayın ve sonrası destek",
      ],
    },
    "Kullanıcı Deneyimi": {
      intro:
        "Farklı cihazlarda da aynı kolaylıkla gezinilebilmesi için kullanıcı akışlarını planlıyoruz.",
      points: [
        "Cihaz bazlı kullanıcı akışları",
        "Navigasyon tutarlılığı",
        "Kullanılabilirlik testi",
        "Geri bildirimlere göre iyileştirme",
      ],
    },
    Performans: {
      intro:
        "Farklı cihazlarda yükleme sürelerini düşürerek deneyimi hızlandırıyoruz.",
      points: [
        "Sayfa hızı analizi",
        "Görsel ve kod optimizasyonu",
        "Önbellekleme",
        "Mobil performans testleri",
      ],
    },
    "Özel Çözümler": {
      intro:
        "Hazır şablonların yetmediği durumlarda ihtiyaca göre özel bir yapı kuruyoruz.",
      points: [
        "İhtiyaç analizi",
        "Özel bileşen geliştirme",
        "Mevcut sistemlerle entegrasyon",
        "Teslim sonrası bakım",
      ],
    },
  },
};