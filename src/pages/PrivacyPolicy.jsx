import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TermsOfService.css"; // Önceki CSS dosyasını doğrudan kullanabilirsiniz

const CONTENT = {
    tr: {
        back: "← Ana Sayfa",
        switchTo: "ENGLISH",
        label: "HUKUKİ / GÜVENLİ & ŞEFFAF",
        titleA: "Gizlilik",
        titleB: "Politikası.",
        lead: "Yürürlük Tarihi: [GG.AA.YYYY]. Sia Teknoloji'nin toplantı analiz yazılımı ve web sitesi üzerinden bilgilerinizi nasıl topladığını, işlediğini ve koruduğunu açıklar.",
        tagline: "Yazılım • Yapay Zekâ • Dijital Dönüşüm",
        home: "Ana Sayfa",
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Koşulları",
        searchPlaceholder: "Metin içinde ara...",
        sections: [
            {
                id: "data-controller",
                title: "Veri sorumlusu",
                text: "Bu politikada veri sorumlusu Sia Teknoloji Ltd. Şti.'dir. Adres: [kayıtlı adres]. İletişim: info@siateknoloji.com.",
            },
            {
                id: "collected-info",
                title: "Toplanan bilgiler",
                text: "Hizmetle ilgili olarak sağladığınız ad, soyad, iletişim bilgileri, kurum bilgileri ve hesap giriş bilgileri toplanabilir. Cihaz ve kullanım bilgileri de otomatik olarak oluşabilir.",
            },
            {
                id: "meeting-data",
                title: "Toplantı verileri",
                text: "Yazılım kurumunuzun kendi altyapısında çalıştığında toplantı kayıtları ve metinleri kurum sunucularında işlenir. Sia Teknoloji, kurum tarafından açıkça yetki verilmedikçe bu verilere erişmez. [Bu bölüm ürünün gerçek mimarisiyle doğrulanmalıdır. Yapay zekâ işlemlerinin bir kısmı dış bir servise gidiyorsa metin değiştirilmelidir.]",
            },
            {
                id: "usage-info",
                title: "Bilgilerin kullanımı",
                text: "Toplanan bilgiler hizmeti sağlamak, geliştirmek, destek vermek ve yasal yükümlülükleri yerine getirmek için kullanılır.",
            },
            {
                id: "data-protection",
                title: "Veri koruma",
                text: "Kişisel verileri yetkisiz erişime, değişikliğe, ifşaya ve imhaya karşı korumak için uygun teknik ve idari önlemler uygulanır.",
            },
            {
                id: "third-party",
                title: "Üçüncü taraf hizmet sağlayıcılar",
                text: "Hizmetin sunulması için üçüncü taraf sağlayıcılar kullanılabilir. Bu sağlayıcılar yalnızca görevlerini yerine getirmek için gerekli bilgilere erişir. [Kullanılan sağlayıcılar burada listelenmelidir.]",
            },
            {
                id: "cookies",
                title: "Çerezler",
                text: "Web sitemizde deneyimi iyileştirmek ve kullanımı anlamak için çerezler kullanılabilir. [Çerez türleri ve onay mekanizması eklenmelidir.]",
            },
            {
                id: "rights",
                title: "Haklarınız",
                text: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verilerinizin işlenip işlenmediğini öğrenme, düzeltme, silme ve işleme itiraz etme haklarına sahipsiniz. Başvurularınızı info@siateknoloji.com adresine iletebilirsiniz.",
            },
            {
                id: "policy-changes",
                title: "Politikada değişiklik",
                text: "Bu politika zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayımlanır.",
            },
        ],
    },

    en: {
        back: "← Home",
        switchTo: "TÜRKÇE",
        label: "LEGAL / SECURE & TRANSPARENT",
        titleA: "Privacy",
        titleB: "Policy.",
        lead: "Effective Date: [DD.MM.YYYY]. Explains how Sia Teknoloji collects, processes and protects information through its meeting analysis software and website.",
        tagline: "Software • Artificial Intelligence • Digital Transformation",
        home: "Home",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        searchPlaceholder: "Search within policy...",
        sections: [
            {
                id: "data-controller",
                title: "Data controller",
                text: "The data controller is Sia Teknoloji Ltd. Şti. Address: [registered address]. Contact: info@siateknoloji.com.",
            },
            {
                id: "collected-info",
                title: "Information we collect",
                text: "We may collect the name, surname, contact details, company information and account login details that you provide. Device and usage information may be generated automatically.",
            },
            {
                id: "meeting-data",
                title: "Meeting data",
                text: "When the software runs on your organization's own infrastructure, meeting recordings and transcripts are processed on your servers. Sia Teknoloji does not access this data unless your organization explicitly authorizes it. [Verify against the actual architecture.]",
            },
            {
                id: "usage-info",
                title: "How we use information",
                text: "Collected information is used to provide and improve the service, offer support and meet legal obligations.",
            },
            {
                id: "data-protection",
                title: "Data protection",
                text: "Appropriate technical and administrative measures are applied to protect personal data against unauthorized access, alteration, disclosure and destruction.",
            },
            {
                id: "third-party",
                title: "Third-party providers",
                text: "Third-party providers may be used to deliver the service. They access only the information needed for their task. [List the providers.]",
            },
            {
                id: "cookies",
                title: "Cookies",
                text: "Cookies may be used on the website to improve the experience and understand usage. [Add cookie types and consent mechanism.]",
            },
            {
                id: "rights",
                title: "Your rights",
                text: "Under Turkey's Personal Data Protection Law No. 6698, you have the right to learn whether your data is processed, request correction or deletion, and object to processing. Requests can be sent to info@siateknoloji.com.",
            },
            {
                id: "policy-changes",
                title: "Changes to this policy",
                text: "This policy may be updated from time to time. The current version is published on this page.",
            },
        ],
    },
};

function PrivacyPolicy() {
    const [language, setLanguage] = useState("tr");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSection, setActiveSection] = useState("");
    const t = CONTENT[language];
    const nextLanguage = language === "tr" ? "en" : "tr";

    // Sayfa kaydırıldıkça aktif başlığı seçme
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".terms-section");
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Metin içi arama filtresi
    const filteredSections = t.sections.filter((section) => {
        if (!searchTerm) return true;
        const q = searchTerm.toLowerCase();
        return (
            section.title.toLowerCase().includes(q) ||
            section.text.toLowerCase().includes(q)
        );
    });

    return (
        <div className="terms-page">
            {/* NAVBAR */}
            <nav className="terms-navbar">
                <Link to="/" className="terms-logo">
                    Sia<span>.</span>
                </Link>

                <div className="terms-nav-right">
                    <Link to="/" className="terms-back">
                        {t.back}
                    </Link>

                    <button
                        className="terms-language"
                        onClick={() => setLanguage(nextLanguage)}
                    >
                        {t.switchTo}
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <header className="terms-hero">
                <div className="terms-hero-badge">01</div>

                <div className="terms-hero-content">
                    <span className="terms-label">{t.label}</span>

                    <h1>
                        {t.titleA} <span>{t.titleB}</span>
                    </h1>

                    <p className="terms-lead">{t.lead}</p>
                </div>
            </header>

            {/* MAIN CONTAINER */}
            <div className="terms-container">
                {/* SOL İÇİNDEKİLER MENÜSÜ */}
                <aside className="terms-sidebar">
                    <div className="terms-search-box">
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <nav className="terms-toc">
                        <h4>İÇİNDEKİLER</h4>
                        <ul>
                            {t.sections.map((sec, idx) => (
                                <li key={sec.id}>
                                    <a
                                        href={`#${sec.id}`}
                                        className={activeSection === sec.id ? "active" : ""}
                                    >
                                        <span className="toc-num">{String(idx + 1).padStart(2, "0")}</span>
                                        <span className="toc-title">{sec.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* İÇERİK BÖLÜMLERİ */}
                <main className="terms-content">

                    {filteredSections.map((section, i) => (
                        <section
                            className="terms-section"
                            id={section.id}
                            key={section.id || i}
                        >
                            <div className="terms-section-header">
                                <span className="terms-section-number">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h2>{section.title}</h2>
                            </div>

                            <div className="terms-section-body">
                                <p>{section.text}</p>
                            </div>
                        </section>
                    ))}
                </main>
            </div>

            {/* FOOTER */}
            <footer className="terms-footer">
                <div className="terms-footer-brand">
                    <strong>Sia Teknoloji.</strong>
                    <span>{t.tagline}</span>
                </div>

                <div className="terms-footer-links">
                    <Link to="/">{t.home}</Link>
                    <Link to="/privacy-policy">{t.privacy}</Link>
                    <Link to="/terms-of-service">{t.terms}</Link>
                </div>
            </footer>
        </div>
    );
}

export default PrivacyPolicy;