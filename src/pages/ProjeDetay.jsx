
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ProjeDetay.css";

const projeler = {
  "creative-digital": {
    number: "01",
    category: "Web Design · Development",
    title: "Creative Digital",
    shortTitle: "Creative Digital",
    description:
      "Yaratıcı fikirleri modern bir dijital deneyime dönüştüren, güçlü görsel dili ve akıcı kullanıcı deneyimiyle öne çıkan bir web projesi.",
    about:
      "Creative Digital, geleneksel tasarım disiplinlerini ileri teknoloji ve sanatsal vizyonla buluşturan modern bir tasarım yaklaşımıdır. Kod, veri, yapay zekâ ve estetik bir araya gelerek etkileşimli ve dinamik dijital deneyimler oluşturur.",
    detailLabel: "CREATIVE DIGITAL REHBERİ",
    detailHeading: "Dijital tasarımın",
    detailHeadingAccent: "yeni dünyası.",
    detailIntro:
      "Yaratıcı fikirleri ileri teknoloji ve sanatsal vizyonla buluşturan modern tasarım yaklaşımını keşfedin.",
    details: [
      {
        number: "01",
        title: "Temel Estetik ve Görsel Trendler",
        description:
          "Creative Digital yaklaşımında görsel dil, kullanıcının dijital platformla kurduğu bağı doğrudan belirler.",
        items: [
          {
            title: "Bento Grid Düzeni",
            text: "Ekranı farklı boyutlardaki modüler kutulara bölerek bilgiyi verimli ve estetik şekilde sunan yerleşim yaklaşımı.",
          },
          {
            title: "Karanlık Mod ve Neon Kontrastı",
            text: "Koyu arka planlar üzerinde asit yeşili, elektrik mavisi ve canlı mor gibi neon renklerle odak noktaları oluşturmak.",
          },
          {
            title: "Cam Morfizmi",
            text: "Yarı saydam katmanlar, renkli gradyanlar ve buzlu cam hissiyle derinlik algısı oluşturmak.",
          },
          {
            title: "Kinetik ve Değişken Tipografi",
            text: "Sayfa kaydırıldıkça büyüyen, şekil değiştiren veya hareket eden dinamik yazı tasarımları.",
          },
        ],
      },
      {
        number: "02",
        title: "Teknolojik Altyapı ve Etkileşim",
        description:
          "Creative Tech, statik görselleri etkileşimli ve dinamik dijital deneyimlere dönüştürür.",
        items: [
          {
            title: "WebGL ve 3D Web Deneyimleri",
            text: "Three.js gibi teknolojilerle geliştirilen, kullanıcı hareketlerine tepki verebilen üç boyutlu web deneyimleri.",
          },
          {
            title: "Generatif Tasarım",
            text: "Algoritmalar ve kullanıcı verileriyle şekil, renk ve form değiştiren dinamik görsel yapılar.",
          },
          {
            title: "Akışkan Mikro Etkileşimler",
            text: "Butonlara tıklama veya üzerlerine gelme gibi hareketlere animasyonlarla yanıt veren arayüzler.",
          },
        ],
      },
      {
        number: "03",
        title: "Kullanıcı Deneyimi ve Gelecek",
        description:
          "Creative Digital, insan ile teknoloji arasındaki etkileşimi daha doğal ve kişiselleştirilmiş hâle getirmeyi amaçlar.",
        items: [
          {
            title: "Yapay Zekâ Entegrasyonu",
            text: "Kullanıcı davranışlarına göre arayüzü kişiselleştiren akıllı paneller.",
          },
          {
            title: "Scrollytelling",
            text: "Kullanıcı sayfayı kaydırdıkça hikâyeyi aşamalı olarak anlatan görsel ve etkileşimli deneyimler.",
          },
          {
            title: "Uzamsal Bilişim",
            text: "AR ve VR teknolojileriyle dijital tasarımları üç boyutlu ortamlara taşıma yaklaşımı.",
          },
        ],
      },
    ],
    services: [
      "UI / UX Design",
      "Frontend Development",
      "Responsive Design",
      "Motion Design",
    ],
    year: "2026",
    client: "Creative Studio",
    duration: "8 Hafta",
    type: "Digital Experience",
    theme: "green",
    next: "brand-identity",
  },

  "brand-identity": {
    number: "02",
    category: "Branding · Creative",
    title: "Brand Identity",
    shortTitle: "Brand Identity",
    description:
      "Markanın karakterini güçlü bir görsel kimliğe dönüştüren modern ve özgün bir branding çalışması.",
    about:
      "Brand Identity projesinde markanın dijital dünyadaki görünümünü baştan ele aldık. Logo, tipografi, renk sistemi ve dijital kullanım alanlarını tek bir görsel dil altında birleştirerek tutarlı ve akılda kalıcı bir marka deneyimi oluşturduk.",
    detailLabel: "BRAND IDENTITY REHBERİ",
    detailHeading: "Markanın",
    detailHeadingAccent: "kimliği.",
    detailIntro:
      "Bir markanın görsel dilini, stratejik değerlerini ve dijital dünyada gelişen kimliğini keşfedin.",
    details: [
      {
        number: "01",
        title: "Görsel Marka Kimliği Elementleri",
        description:
          "Markanın dijital ve fiziksel dünyada anında tanınmasını sağlayan güçlü görsel bileşenler.",
        items: [
          {
            title: "Dinamik Logotip",
            text: "Dijital ekranlara, uygulamalara ve aydınlık veya karanlık modlara uyum sağlayabilen esnek logo sistemleri.",
          },
          {
            title: "Renk Teorisi ve Stratejik Palet",
            text: "Markanın duygusunu yansıtan ana renkler ile neon veya pastel vurgu renklerinin stratejik biçimde seçilmesi.",
          },
          {
            title: "Kurumsal Tipografi",
            text: "Markanın ses tonunu yansıtan, dijital ekranlarda ve basılı materyallerde okunabilirliği yüksek yazı karakterleri.",
          },
          {
            title: "İkonografi ve Grafik Öğeler",
            text: "Markaya özel illüstrasyonlar, 3D ikon setleri ve arayüzlerde kullanılan özgün grafik desenler.",
          },
        ],
      },
      {
        number: "02",
        title: "Stratejik ve Felsefi Altyapı",
        description:
          "Görsel tasarımın arkasındaki marka değerlerini, pazardaki konumunu ve iletişim yaklaşımını belirleyen temel unsurlar.",
        items: [
          {
            title: "Marka Pozisyonlaması",
            text: "Markanın pazardaki yerini, rakiplerinden farkını ve sunduğu benzersiz değer önerisini belirlemek.",
          },
          {
            title: "Misyon ve Vizyon",
            text: "Markanın bugün ne yaptığını ve gelecekte ulaşmayı hedeflediği noktayı ortaya koyan temel felsefe.",
          },
          {
            title: "Marka Sesi ve Tonu",
            text: "Markanın kullanıcılarla profesyonel, arkadaş canlısı, esprili, asi veya teknoloji odaklı bir dille iletişim kurması.",
          },
        ],
      },
      {
        number: "03",
        title: "Dijital Çağda Yaşayan Marka Kimliği",
        description:
          "Geleneksel marka kılavuzlarını aşarak dijital ekosistemle birlikte gelişen modern kimlik yaklaşımı.",
        items: [
          {
            title: "Tasarım Sistemleri",
            text: "Tasarımcıların ve yazılımcıların ortak kullandığı; butonları, kartları ve formları standartlaştıran tasarım kütüphaneleri. Figma ve kod entegrasyonu bu yapının önemli parçalarıdır.",
          },
          {
            title: "Hareket Kimliği",
            text: "Logo animasyonları, geçiş efektleri ve video ritmiyle markanın hareket biçimini de kimliğinin bir parçası hâline getirmek.",
          },
          {
            title: "Çoklu Kanal Tutarlılığı",
            text: "Sosyal medya, mobil uygulamalar, akıllı saatler, dijital ortamlar ve fiziksel ürünlerde tutarlı bir marka hissi sunmak.",
          },
        ],
      },
    ],
    services: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Digital Guidelines",
    ],
    year: "2026",
    client: "Brand Project",
    duration: "6 Hafta",
    type: "Brand Identity",
    theme: "black",
    next: "modern-website",
  },

  "modern-website": {
    number: "03",
    category: "UI / UX · Development",
    title: "Modern Website",
    shortTitle: "Modern Web Sitesi",
    description:
      "Estetik, hız, yapay zekâ ve yüksek etkileşimi bir araya getiren yeni nesil dijital deneyim alanı.",
    about:
      "Modern Website, yalnızca bilgi veren statik bir sayfa değil; kullanıcıyı ilk saniyede yakalamayı ve pürüzsüz bir yolculuk sunmayı hedefleyen yaşayan bir dijital deneyim alanıdır. Modern arayüz, gelişmiş etkileşim ve güçlü performans bir araya gelir.",
    detailLabel: "MODERN WEB TEKNOLOJİLERİ",
    detailHeading: "Dijital deneyimin",
    detailHeadingAccent: "yeni nesli.",
    detailIntro:
      "Creative Digital vizyonuyla modern web sitelerini oluşturan arayüz trendlerini, etkileşim teknolojilerini ve mühendislik standartlarını keşfedin.",
    details: [
      {
        number: "01",
        title: "Modern Arayüz (UI) ve Düzen Trendleri",
        description:
          "Görsel hiyerarşiyi minimalizm ve teknolojiyle harmanlayan güncel tasarım yaklaşımları.",
        items: [
          {
            title: "Bento Grid Tasarımı",
            text: "İçerikleri farklı boyutlardaki estetik panellerde organize ederek bilgiyi dağıtmadan, düzenli ve etkileyici biçimde sunan yerleşim sistemi.",
          },
          {
            title: "Akışkan Gradyanlar ve Derinlik",
            text: "Cam morfizmi panellerin altında süzülen neon ve pastel renk geçişleriyle arayüze derinlik, hareket ve modern bir görünüm kazandırılması.",
          },
          {
            title: "Büyük ve Kinetik Tipografi",
            text: "Sayfa açıldığında kullanıcıyı karşılayan büyük, sanatsal başlıkların fare hareketlerine veya kaydırmaya tepki vererek etkileşimli hâle gelmesi.",
          },
        ],
      },
      {
        number: "02",
        title: "Gelişmiş Etkileşim ve Teknolojik Altyapı",
        description:
          "Kullanıcı deneyimini geliştiren, arayüzü daha canlı ve etkileşimli hâle getiren modern teknolojiler.",
        items: [
          {
            title: "Scrollytelling",
            text: "Kullanıcı sayfayı aşağı kaydırdıkça elementlerin hareket ettiği, 3D modellerin döndüğü ve metinlerin sinematik bir anlatımla ilerlediği deneyimler.",
          },
          {
            title: "WebGL ve 3D Entegrasyonu",
            text: "Three.js gibi teknolojilerle web sayfasına eklenen, kullanıcının fareyle döndürebildiği ve inceleyebildiği üç boyutlu nesneler.",
          },
          {
            title: "Fizik Tabanlı Mikro Animasyonlar",
            text: "Butonların, menülerin ve kartların üzerine gelindiğinde yay benzeri doğal hareketlerle tepki vermesini sağlayan animasyonlar.",
          },
        ],
      },
      {
        number: "03",
        title: "Performans, Erişilebilirlik ve Gelecek",
        description:
          "Bir web sitesinin başarısını belirleyen hız, erişilebilirlik, uyumluluk ve akıllı arama standartları.",
        items: [
          {
            title: "Ultra Hız ve Performans",
            text: "Next.js ve Nuxt.js gibi teknolojiler, sunucu taraflı render yaklaşımları ve optimize edilmiş görsellerle hızlı sayfa yüklenmesini hedefleyen altyapılar.",
          },
          {
            title: "Mobil Öncelikli Esneklik",
            text: "Web sitesinin bilgisayar, akıllı telefon, tablet, katlanabilir ekran ve farklı ekran boyutlarında tutarlı ve kullanışlı görünmesini sağlayan responsive tasarım.",
          },
          {
            title: "Yapılandırılmış Veri ve Yapay Zekâ Destekli Arama",
            text: "Kullanıcının arama niyetini anlamayı hedefleyen doğal dil işleme ve akıllı içerik eşleştirme sistemleri.",
          },
        ],
      },
    ],
    services: [
      "UX Research",
      "Frontend Development",
    ],
    year: "2026",
    client: "Digital Brand",
    duration: "7 Hafta",
    type: "Web Experience",
    theme: "white",
    next: "creative-digital",
  },
};

/* PROJE GÖRSELİ */

function ProjectVisual({ theme }) {
  if (theme === "green") {
    return (
      <div className="case-visual case-green">
        <div className="green-orbit green-orbit-one"></div>
        <div className="green-orbit green-orbit-two"></div>

        <div className="green-content">
          <span>CREATIVE</span>
          <h2>
            Digital
            <br />
            <strong>Experience.</strong>
          </h2>

          <div className="green-bottom">
            <span>BEETINQ / 01</span>
            <span>↗</span>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "black") {
    return (
      <div className="case-visual case-black">
        <div className="black-grid"></div>

        <div className="black-content">
          <span>BRAND</span>
          <strong>01</strong>
          <h2>IDENTITY</h2>
          <div className="black-symbol">✦</div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-visual case-white">
      <div className="modern-orbit modern-orbit-one"></div>
      <div className="modern-orbit modern-orbit-two"></div>

      <div className="modern-content">
        <span>MODERN WEB</span>

        <h2>
          Modern
          <br />
          <strong>Experience.</strong>
        </h2>

        <div className="modern-bottom">
          <span>BEETINQ / 03</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}

/* PROJE DETAY */

function ProjeDetay() {
  const { proje } = useParams();
  const project = projeler[proje];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [proje]);

  if (!project) {
    return (
      <div className="case-not-found">
        <span>404</span>
        <h1>Proje bulunamadı.</h1>
        <p>
          Aradığınız proje mevcut değil veya kaldırılmış olabilir.
        </p>

        <Link to="/" className="case-back-button">
          ← Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  const nextProject = projeler[project.next];
  const hasDetails = Boolean(project.details);

  return (
    <div className="case-page">
      <header className="case-navbar">
        <Link to="/" className="case-logo">
          Beetinq<span>.</span>
        </Link>

        <div className="case-nav-center">
          Proje / {project.number}
        </div>

        <Link to="/" className="case-nav-back">
          ← Geri Dön
        </Link>
      </header>

      <main>
        <section className="case-hero">
          <div className="case-hero-top">
            <div className="case-number">
              <span>{project.number}</span>
              <small>CASE STUDY</small>
            </div>

            <div className="case-category">
              {project.category}
            </div>
          </div>

          <h1>
            {project.title}
            <span>.</span>
          </h1>

          <p className="case-description">
            {project.description}
          </p>
        </section>

        <section className="case-main-visual">
          <ProjectVisual theme={project.theme} />
        </section>

        <section className="case-meta">
          <div className="case-meta-item">
            <span>MÜŞTERİ</span>
            <strong>{project.client}</strong>
          </div>

          <div className="case-meta-item">
            <span>YIL</span>
            <strong>{project.year}</strong>
          </div>

          <div className="case-meta-item">
            <span>SÜRE</span>
            <strong>{project.duration}</strong>
          </div>

          <div className="case-meta-item">
            <span>PROJE TÜRÜ</span>
            <strong>{project.type}</strong>
          </div>
        </section>

        {project.about && (
          <section className="case-about">
            <div className="case-section-label">
              <span>01</span>
              PROJE HAKKINDA
            </div>

            <div className="case-about-content">
              <h2>
                Projenin
                <br />
                <em>hikâyesi.</em>
              </h2>

              <p>{project.about}</p>
            </div>
          </section>
        )}

        {hasDetails && (
          <section className="case-details">
            <div className="case-section-label">
              <span>02</span>
              {project.detailLabel}
            </div>

            <div className="case-details-intro">
              <h2>
                {project.detailHeading}
                <br />
                <em>{project.detailHeadingAccent}</em>
              </h2>

              <p>{project.detailIntro}</p>
            </div>

            <div className="case-details-grid">
              {project.details.map((section) => (
                <article
                  className="case-detail-card"
                  key={section.number}
                >
                  <span className="case-detail-number">
                    {section.number}
                  </span>

                  <h3>{section.title}</h3>
                  <p>{section.description}</p>

                  <div className="case-detail-items">
                    {section.items.map((item, index) => (
                      <div
                        className="case-detail-item"
                        key={item.title}
                      >
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="case-services">
          <div className="case-section-label">
            <span>{hasDetails ? "03" : "02"}</span>
            HİZMETLER
          </div>

          <div className="case-services-content">
            <h2>
              Projede
              <br />
              neler yaptık?
            </h2>

            <div className="case-service-list">
              {project.services.map((service, index) => (
                <div className="case-service" key={service}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{service}</strong>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-process">
          <div className="case-section-label">
            <span>{hasDetails ? "04" : "03"}</span>
            ÇALIŞMA SÜRECİ
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>01</span>
              <div className="process-icon">◎</div>
              <h3>Keşif</h3>
              <p>
                Markayı, hedefleri ve kullanıcı ihtiyaçlarını analiz
                ederek projenin temelini oluşturduk.
              </p>
            </article>

            <article className="process-card">
              <span>02</span>
              <div className="process-icon">✦</div>
              <h3>Tasarım</h3>
              <p>
                Projenin görsel dilini ve kullanıcı deneyimini
                modern bir tasarım sistemiyle oluşturduk.
              </p>
            </article>

            <article className="process-card">
              <span>03</span>
              <div className="process-icon">↗</div>
              <h3>Geliştirme</h3>
              <p>
                Tasarımı performanslı, responsive ve modern bir
                dijital ürüne dönüştürdük.
              </p>
            </article>
          </div>
        </section>

        <section className="case-results">
          <div className="results-title">
            <div className="case-section-label">
              <span>{hasDetails ? "05" : "04"}</span>
              SONUÇ
            </div>

            <h2>
              Sadece güzel değil,
              <br />
              <em>etkili.</em>
            </h2>
          </div>

          <div className="results-grid">
            <div className="result-item">
              <strong>01</strong>
              <span>Özgün Tasarım</span>
            </div>

            <div className="result-item">
              <strong>100%</strong>
              <span>Responsive</span>
            </div>

            <div className="result-item">
              <strong>03</strong>
              <span>Temel Hizmet</span>
            </div>

            <div className="result-item">
              <strong>∞</strong>
              <span>Yaratıcı Fikir</span>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-label">
            SONRAKİ PROJE
          </div>

          <Link
            to={`/projeler/${project.next}`}
            className="next-project-link"
          >
            <div>
              <span>{nextProject?.number ?? "01"}</span>

              <h2>
                {nextProject?.shortTitle ?? "Projeler"}
                <em>.</em>
              </h2>
            </div>

            <div className="next-arrow">↗</div>
          </Link>
        </section>
      </main>

      <footer className="case-footer">
        <Link to="/" className="case-logo">
          Beetinq<span>.</span>
        </Link>

        <p>© 2026 Beetinq. Tüm hakları saklıdır.</p>

        <Link to="/" className="case-footer-link">
          Ana Sayfa ↗
        </Link>
      </footer>
    </div>
  );
}

export default ProjeDetay;