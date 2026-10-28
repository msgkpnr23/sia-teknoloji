import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TermsOfService.css";

const CONTENT = {
    en: {
        back: "← Home",
        switchTo: "TÜRKÇE",
        label: "LEGAL / TERMS",
        titleA: "Terms of",
        titleB: "Service.",
        lead: "The legal agreement between you and Sia Teknoloji Ltd. Şti. regarding the use of the Sia Meeting Analysis Software and related services.",
        tagline: "Software • Artificial Intelligence • Digital Transformation",
        home: "Home",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        searchPlaceholder: "Search within terms...",
        printText: "Print Document",
        placeholderNotice: "Notice: Please fill in the bracketed [ ] placeholders and consult a legal representative before publishing.",
        sections: [
            {
                id: "parties-scope",
                title: "Parties and scope",
                paragraphs: [
                    "These Terms of Service constitute the legal agreement between you and Sia Teknoloji Ltd. Şti. (\"Sia\") regarding the Sia Meeting Analysis Software (the \"Software\") and related services.",
                ],
            },
            {
                id: "acceptance",
                title: "Acceptance",
                paragraphs: [
                    "By using the Software, you confirm that you have read these Terms and agree to be bound by them. If you do not agree, you must not use the Software.",
                ],
            },
            {
                id: "license-grant",
                title: "License grant",
                paragraphs: [
                    "Subject to your compliance with these Terms, Sia grants you a limited, non-exclusive, non-transferable and non-sublicensable license to install and use the Software for your internal business purposes. In enterprise installations, the license is limited to the number of users and servers specified in your agreement.",
                ],
            },
            {
                id: "restrictions",
                title: "Restrictions on use",
                paragraphs: ["You may not:"],
                list: [
                    "Copy, modify, translate, reverse engineer, decompile or disassemble the Software, or create derivative works from it.",
                    "Install the Software on a server that is accessible through a public network, unless this is expressly permitted in your agreement.",
                    "Share the Software or your access rights with other persons or entities, or rent, lease or transfer them.",
                    "Remove or alter any copyright, legal notice or proprietary designation.",
                ],
                after: "Any prohibited use terminates your license to use the Software immediately.",
            },
            {
                id: "ownership",
                title: "Ownership",
                paragraphs: [
                    "The Software, including all revisions, modifications, improvements and derivative works, is owned by Sia and/or its licensors and is protected by copyright and other intellectual property laws.",
                ],
            },
            {
                id: "customer-data",
                title: "Customer data and meeting recordings",
                paragraphs: [
                    "You are solely responsible for the lawful collection and processing of the meeting recordings, transcripts and other data you use with the Software. It is your obligation to inform participants that a meeting is being recorded and to obtain any consent required by law.",
                    "Sia does not access customer data stored on your infrastructure unless you expressly authorize it, for example for technical support.",
                ],
            },
            {
                id: "third-party",
                title: "Third-party components",
                paragraphs: [
                    "The Software may include third-party components. These are subject to their own license terms. [List the open-source components and external services used.]",
                ],
            },
            {
                id: "updates",
                title: "Updates",
                paragraphs: [
                    "Sia may improve, update or upgrade the Software from time to time. Some updates are optional, while others may be required for the Software to operate.",
                ],
            },
            {
                id: "fees",
                title: "Fees and payment",
                paragraphs: [
                    "Fees, payment terms and renewal conditions are specified in your order form or agreement. [Insert pricing and payment terms.]",
                ],
            },
            {
                id: "warranty",
                title: "Warranty disclaimer",
                upper: true,
                paragraphs: [
                    "THE SOFTWARE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\", WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SIA DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.",
                ],
            },
            {
                id: "liability",
                title: "Limitation of liability",
                paragraphs: [
                    "To the extent permitted by law, Sia shall not be liable for indirect, special, incidental or consequential damages, including loss of data, business interruption or loss of profits.",
                    "[Insert the liability cap applicable under your agreement.]",
                ],
            },
            {
                id: "termination",
                title: "Termination",
                paragraphs: [
                    "These Terms terminate automatically if you fail to comply with any of their provisions. You may end your license at any time by stopping use of the Software and uninstalling it.",
                ],
            },
            {
                id: "governing-law",
                title: "Governing law and jurisdiction",
                paragraphs: [
                    "These Terms are governed by the laws of the Republic of Turkey. The competent courts of [yetkili mahkeme / şehir] shall have jurisdiction over any dispute arising from these Terms.",
                ],
            },
            {
                id: "miscellaneous",
                title: "Miscellaneous",
                paragraphs: [
                    "These Terms together with your order form or agreement constitute the entire agreement between you and Sia on this subject. If any provision is found unenforceable, the remaining provisions remain in effect.",
                ],
            },
        ],
    },
    tr: {
        back: "← Ana Sayfa",
        switchTo: "ENGLISH",
        label: "HUKUKİ / KOŞULLAR",
        titleA: "Kullanım",
        titleB: "Koşulları.",
        lead: "Sia Toplantı Analiz Yazılımı ve ilgili hizmetlerin kullanımına ilişkin sizinle Sia Teknoloji Ltd. Şti. arasındaki yasal anlaşma.",
        tagline: "Yazılım • Yapay Zekâ • Dijital Dönüşüm",
        home: "Ana Sayfa",
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Koşulları",
        searchPlaceholder: "Metin içinde ara...",

        sections: [
            {
                id: "parties-scope",
                title: "Taraflar ve kapsam",
                paragraphs: [
                    "Bu Kullanım Koşulları, Sia Toplantı Analiz Yazılımı (\"Yazılım\") ve ilgili hizmetlerin kullanımına ilişkin sizinle Sia Teknoloji Ltd. Şti. (\"Sia\") arasındaki yasal anlaşmadır.",
                ],
            },
            {
                id: "acceptance",
                title: "Kabul",
                paragraphs: [
                    "Yazılımı kullanarak bu koşulları okuduğunuzu ve bağlı olmayı kabul ettiğinizi onaylarsınız. Kabul etmiyorsanız Yazılımı kullanmamalısınız.",
                ],
            },
            {
                id: "license-grant",
                title: "Lisans",
                paragraphs: [
                    "Bu koşullara uymanız şartıyla Sia, Yazılımı kurum içi iş amaçlarınız için kurmanız ve kullanmanız için sınırlı, münhasır olmayan, devredilemez ve alt lisans verilemez bir lisans verir. Kurumsal kurulumlarda lisans, sözleşmenizde belirtilen kullanıcı ve sunucu sayısıyla sınırlıdır.",
                ],
            },
            {
                id: "restrictions",
                title: "Kullanım kısıtlamaları",
                paragraphs: ["Aşağıdakileri yapamazsınız:"],
                list: [
                    "Yazılımı kopyalamak, değiştirmek, çevirmek, tersine mühendislik yapmak, kaynak koduna dönüştürmek veya türev çalışmalar oluşturmak.",
                    "Sözleşmenizde açıkça izin verilmedikçe Yazılımı herkese açık bir ağdan erişilebilir bir sunucuya kurmak.",
                    "Yazılımı veya erişim haklarınızı başkalarıyla paylaşmak, kiralamak, kiraya vermek ya da devretmek.",
                    "Telif, yasal bildirim veya mülkiyet işaretlerini kaldırmak ya da değiştirmek.",
                ],
                after: "Yasaklanan herhangi bir kullanım, Yazılımı kullanma lisansınızı derhal sona erdirir.",
            },
            {
                id: "ownership",
                title: "Mülkiyet",
                paragraphs: [
                    "Tüm revizyonlar, değişiklikler, geliştirmeler ve türev çalışmalar dahil olmak üzere Yazılım, Sia ve/veya lisans verenlerine aittir ve telif hakkı ile diğer fikri mülkiyet yasalarıyla korunmaktadır.",
                ],
            },
            {
                id: "customer-data",
                title: "Müşteri verileri ve toplantı kayıtları",
                paragraphs: [
                    "Yazılımla kullandığınız toplantı kayıtlarının, metinlerin ve diğer verilerin hukuka uygun şekilde elde edilmesinden ve işlenmesinden yalnızca siz sorumlusunuz. Toplantının kaydedildiğini katılımcılara bildirmek ve yasaların gerektirdiği izinleri almak sizin yükümlülüğünüzdür.",
                    "Sia, açıkça yetki vermediğiniz sürece (örneğin teknik destek için) kendi altyapınızda saklanan müşteri verilerine erişmez.",
                ],
            },
            {
                id: "third-party",
                title: "Üçüncü taraf bileşenler",
                paragraphs: [
                    "Yazılım üçüncü taraf bileşenler içerebilir. Bunlar kendi lisans koşullarına tabidir. [Kullanılan açık kaynak bileşenler ve dış servisler burada listelenmelidir.]",
                ],
            },
            {
                id: "updates",
                title: "Güncellemeler",
                paragraphs: [
                    "Sia, Yazılımı zaman zaman geliştirebilir, güncelleyebilir veya yükseltebilir. Bazı güncellemeler isteğe bağlıyken bazıları Yazılımın çalışması için zorunlu olabilir.",
                ],
            },
            {
                id: "fees",
                title: "Ücretler ve ödeme",
                paragraphs: [
                    "Ücretler, ödeme koşulları ve yenileme şartları sipariş formunda ya da sözleşmede belirtilir. [Fiyatlandırma ve ödeme koşulları eklenmelidir.]",
                ],
            },
            {
                id: "warranty",
                title: "Garanti reddi",
                upper: true,
                paragraphs: [
                    "YAZILIM, HERHANGİ BİR GARANTİ VERİLMEKSİZİN \"OLDUĞU GİBİ\" VE \"MEVCUT OLDUĞU ŞEKLİYLE\" SUNULMAKTADIR. YÜRÜRLÜKTEKİ HUKUKUN İZİN VERDİĞİ AZAMİ ÖLÇÜDE SIA, TİCARİ ELVERİŞLİLİK, BELİRLİ BİR AMACA UYGUNLUK VE İHLAL ETMEME GARANTİLERİ DAHİL TÜM GARANTİLERİ REDDEDER.",
                ],
            },
            {
                id: "liability",
                title: "Sorumluluğun sınırlandırılması",
                paragraphs: [
                    "Yasaların izin verdiği ölçüde Sia; veri kaybı, iş kesintisi ve kâr kaybı dahil olmak üzere dolaylı, özel, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.",
                    "[Sözleşmenizde geçerli olan sorumluluk tavanı burada belirtilmelidir.]",
                ],
            },
            {
                id: "termination",
                title: "Fesih",
                paragraphs: [
                    "Bu koşullardan herhangi birine uymamanız halinde bu koşullar otomatik olarak sona erer. Yazılımın kullanımını durdurup kaldırarak lisansınızı istediğiniz zaman sonlandırabilirsiniz.",
                ],
            },
            {
                id: "governing-law",
                title: "Uygulanacak hukuk ve yetkili mahkeme",
                paragraphs: [
                    "Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu koşullardan doğan uyuşmazlıklarda [yetkili mahkeme / şehir] mahkemeleri yetkilidir.",
                ],
            },
            {
                id: "miscellaneous",
                title: "Çeşitli hükümler",
                paragraphs: [
                    "Bu koşullar ve sipariş formunuz ya da sözleşmeniz, konuyla ilgili taraflar arasındaki tüm anlaşmayı oluşturur. Herhangi bir hükmün uygulanamaz bulunması halinde diğer hükümler yürürlükte kalır.",
                ],
            },
        ],
    },
};

function TermsOfService() {
    const [language, setLanguage] = useState("en");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSection, setActiveSection] = useState("");
    const t = CONTENT[language];
    const nextLanguage = language === "en" ? "tr" : "en";

    // Sayfa kaydırıldıkça aktif başlığı belirleme
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

    const filteredSections = t.sections.filter((section) => {
        if (!searchTerm) return true;
        const q = searchTerm.toLowerCase();
        return (
            section.title.toLowerCase().includes(q) ||
            section.paragraphs.some((p) => p.toLowerCase().includes(q)) ||
            (section.list && section.list.some((item) => item.toLowerCase().includes(q)))
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

            {/* HERO SECTION */}
            <header className="terms-hero">
                <div className="terms-hero-badge">02</div>

                <div className="terms-hero-content">
                    <span className="terms-label">{t.label}</span>
                    <h1>
                        {t.titleA} <span>{t.titleB}</span>
                    </h1>
                    <p className="terms-lead">{t.lead}</p>
                </div>
            </header>

            {/* MAIN CONTENT AREA WITH SIDEBAR */}
            <div className="terms-container">
                {/* SOL NAVİGASYON (TOC) */}
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

                {/* İÇERİK METİNLERİ */}
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
                                {section.paragraphs.map((p, idx) => (
                                    <p
                                        key={idx}
                                        className={section.upper ? "terms-uppercase" : undefined}
                                    >
                                        {p}
                                    </p>
                                ))}

                                {section.list && (
                                    <ul className="terms-list">
                                        {section.list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.after && <p className="terms-after">{section.after}</p>}
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

export default TermsOfService;