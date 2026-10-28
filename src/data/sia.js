export const SIA = {
  hero: {
    badge: "YAPAY ZEKÂ DESTEKLİ TOPLANTI ANALİZ YAZILIMI",
    titleLines: ["Toplantılarınızı", "ölçülebilir hale", "getirin."],
    accentWord: "ölçülebilir",
    lead:
      "Kararlar, görevler ve aksiyonlar otomatik çıkarılır. Hepsi kendi sunucunuzda, verileriniz kurum dışına çıkmadan.",
    transcript: [
      { initials: "AK", text: "Yeni tedarikçiyle pilot süreci başlatalım." },
      { initials: "MY", text: "Teklif karşılaştırmasını Cuma'ya hazırlarım." },
      { initials: "SE", text: "Sözleşme taslağını hukuk birimi hazırlasın." },
    ],
    outputs: [
      { tag: "KARAR", text: "Pilot süreç başlatılacak", kind: "karar" },
      { tag: "GÖREV", text: "Teklif karşılaştırması · Cuma", kind: "gorev" },
      { tag: "AKSİYON", text: "Sözleşme taslağı · Hukuk", kind: "aksiyon" },
    ],
    pills: ["Yerelde çalışır", "Veriniz sizde kalır", "Departmanları buluşturur"],
  },

  product: {
    eyebrow: "ÜRÜN",
    title: "Toplantılar konuşmayla değil, sonuçla bitsin.",
    accentWord: "sonuçla",
    lead:
      "Alınan kararlar bir deftere, bir mesaja ya da birinin hafızasına emanet edilmesin. Her toplantı; kayıt altına alınan, ölçülen ve takip edilen bir iş sürecine dönüşsün.",
    before: [
      "Kim neyi üstlendi, belirsiz",
      "Not tutmak bir kişinin yükü",
      "Aynı konu tekrar tekrar açılır",
      "Verimlilik ölçülemez",
    ],
    after: [
      "Her görevin sahibi ve tarihi belli",
      "Tutanak dakikalar içinde hazır",
      "Açık maddeler hatırlatılır",
      "Toplantılar verilerle ölçülür",
    ],
    outputs: [
      { letter: "K", title: "Kararlar", text: "Netleşen her karar; gerekçesi ve bağlamıyla ayrıştırılır, arşivlenir." },
      { letter: "G", title: "Görevler", text: "Kim, neyi, ne zamana kadar yapacak? Tespit edilir, sorumlusuna atanır." },
      { letter: "A", title: "Aksiyonlar", text: "Takip gereken adımlar listelenir, durumu sonraki toplantıya taşınır." },
    ],
    measures: [
  { title: "Gündem uyumu", text: "Planlanan ile konuşulan karşılaştırılır.", value: 70, color: "#93c5fd" },
  { title: "Katılım dağılımı", text: "Kim ne kadar söz aldı, görünür olur.", value: 55, color: "#2563eb" },
  { title: "Görev tamamlama", text: "Verilen sözlerin ne kadarı tutuldu?", value: 80, color: "#22c55e" },
  { title: "Karar verimliliği", text: "Tekrar eden konular ve kararlar izlenir.", value: 65, color: "#facc15" },
],
  },

  steps: {
    eyebrow: "NASIL ÇALIŞIR?",
    title: "Dört adımda konuşmadan sonuca.",
    items: [
      { step: "ADIM 1", title: "Kaydet", text: "Yüz yüze veya çevrim içi toplantı kaydedilir ya da ses dosyası yüklenir." },
      { step: "ADIM 2", title: "Yazıya dök", text: "Konuşmacılar ayrıştırılarak metne çevrilir, tutanak zahmeti biter." },
      { step: "ADIM 3", title: "Yapay zekâ analizi", text: "Kararlar, görevler, sorumlular ve tarihler otomatik ayrıştırılır." },
      { step: "ADIM 4", title: "Paylaş, takip et", text: "Görevler iletilir, açık maddeler hatırlatılır, ilerleme raporlanır." },
    ],
  },

  security: {
    eyebrow: "YEREL KURULUM · VERİ GİZLİLİĞİ",
    title: "Şirketinizde konuşulur, şirketinizde kalır.",
    accentWord: "şirketinizde kalır.",
    lead:
      "Yönetim kurulu, finans, insan kaynakları… En kritik konuşmalar toplantılarda yapılır. Yazılım kurumunuzun kendi altyapısında çalışır, hiçbir kayıt harici buluta gönderilmez.",
    flow: ["Toplantı ses kaydı", "Yerel Sia sunucusu", "Ekipleriniz"],
    cards: [
      { title: "Kendi sunucunuzda", text: "Yazılım ve yapay zekâ modeli kurum sunucularınıza kurulur." },
      { title: "İnternetten bağımsız", text: "Kapalı ağlarda da çalışır, kesintiden etkilenmez." },
      { title: "Rol bazlı erişim", text: "Hangi toplantıyı kimin göreceğine siz karar verirsiniz." },
      { title: "KVKK süreçlerinize uygun", text: "Veriler kurum içinde işlenir, saklama ve silmeyi siz yönetirsiniz." },
    ],
  },
};