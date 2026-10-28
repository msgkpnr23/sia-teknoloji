
import "./SiaExtra.css";
import {
    FaFile,
    FaBars,
    FaBell,
    FaRepeat,
    FaMagnifyingGlass,
    FaChartColumn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import yeniresim from "../assets/yeniresim.png";
import logo4 from "../assets/logo4.jpg";
import SectionLogo from "./SectionLogo.jsx";

const TEXT = {
    tr: {
        featuresTitle: <>Öne Çıkan <span>Özellikler</span></>,
        features: [
            ["Otomatik Toplantı Tutanakları", "Paylaşılmaya hazır, profesyonel formatta."],
            ["Akıllı Özetler", "Bir saatlik toplantıyı birkaç paragrafta özetleyin."],
            ["Görev Hatırlatıcıları", "Görevleri ve son tarihleri takip edin."],
            ["Toplantılar Arası Takip", "Tamamlanmayan işler bir sonraki gündeme aktarılır."],
            ["Kurumsal Hafıza", "Geçmiş kararları saniyeler içinde bulun."],
            ["Raporlama Paneli", "Verimliliği tek bir ekrandan izleyin."],
        ],
        departmentEyebrow: "BİRİM BAZINDA TAKİP",
        departmentTitle: <>Görev durumları <span>her birimde görünür.</span></>,
        chartTitle: "Birimlere Göre Görev Durumu",
        thisWeek: "BU HAFTA",
        openTasks: "Açık görevler tek listede",
        departments: ["Satış", "Üretim", "Finans", "İnsan Kaynakları", "BT"],
        tasks: [
            "Tekliflerin karşılaştırılması",
            "Sözleşme taslağı",
            "Üretim planının güncellenmesi",
        ],
        communicationEyebrow: "BİRİMLER ARASI İLETİŞİM",
        communicationTitle: <>Her karar <span>tüm şirkete ulaşır.</span></>,
        communicationLead: <>Bilgiler birimler arasında aktarılırken kaybolabilir, gecikebilir veya yanlış anlaşılabilir. Sia, tüm birimleri <strong>ortak bir toplantı hafızasıyla</strong> bir araya getirir.</>,
        units: [
            "Yönetim", "Satış", "Üretim", "Finans",
            "İnsan Kaynakları", "BT", "Satın Alma", "Kalite",
        ],
        sharedMemory: "Ortak Toplantı Hafızası",
        scenario: "ÖRNEK SENARYO",
        salesMeeting: "Satış Toplantısı",
        deliveryDate: "Teslimat tarihini öne çek",
        decision: "KARAR",
        recorded: "Otomatik olarak kaydedildi",
        productionTask: "Üretim · görev atandı",
        purchasingTask: "Satın Alma · bilgilendirme yapıldı",
        benefits: [
            ["Tek Doğru Bilgi Kaynağı", "“Ben öyle anlamamıştım.” tartışmalarına son."],
            ["Bilgi Eksikliklerini Giderin", "Bir birimin paylaştığı bilgi herkesin erişimine açılır."],
            ["Sorunsuz Görev Devri", "Görevlerin sorumlusu olmadan kalma ihtimali azalır."],
            ["Herkesi Bilgilendirin", "İlgili güncellemeler toplantıya katılamayanlara da ulaşır."],
        ],
        whyEyebrow: "NEDEN SIA TEKNOLOJİ?",
        whyTitle: <>Bir yazılım sağlayıcısından fazlası, <span>uzun vadeli teknoloji ortağınız.</span></>,
        stats: [
            ["250.000+", "Bireysel Kullanıcı"],
            ["100+", "Kurum ve İş Ortağı"],
            ["50+", "Aktif Ürün ve Hizmet"],
            ["13+ Yıl", "Sektör Deneyimi"],
        ],
        whoWeServe: "Kimlere Hizmet Veriyoruz?",
        tags: [
            "Üretim Şirketleri",
            "Organize Sanayi Bölgeleri",
            "Ticaret ve Sanayi Odaları",
            "Belediyeler",
            "Dernekler ve Vakıflar",
            "Teknoparklar",
            "Eğitim Kurumları",
            "Hizmet Sektörü",
        ],
        otherSolutions: "Diğer Çözümlerimiz",
        others: [
            ["Özel Yazılım Geliştirme", "Web, mobil ve masaüstü çözümleri"],
            ["Fuar ve B2B Etkinlikleri", "Uçtan uca etkinlik yönetimi"],
            ["Oda ve Borsa Akreditasyonu", "TOBB akreditasyon süreçleri"],
        ],
        cta: <>Toplantılarınızı birlikte <span>ölçülebilir hâle getirelim.</span></>,
        ctaLead: "Kurumunuza özel canlı demo planlamak için bizimle iletişime geçin.",
        founder: "Kurucu",
        generalInquiries: "Genel İletişim",
        footerLinks: [
            ["#urun", "Ürün"],
            ["#nasil-calisir", "Nasıl Çalışır"],
            ["#guvenlik", "Güvenlik"],
            ["#iletisim", "İletişim"],
        ],
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Koşulları",
        tagline: "Yazılım • Yapay Zekâ • Dijital Dönüşüm",
        rights: "Tüm hakları saklıdır.",
        logoAlt: "Sia Teknoloji",
    },

    en: {
        featuresTitle: <>Key <span>Features</span></>,
        features: [
            ["Automatic Meeting Minutes", "Ready to share in a professional format."],
            ["Smart Summaries", "An hour-long meeting summarized in a few paragraphs."],
            ["Task Reminders", "Keep track of tasks and deadlines."],
            ["Cross-Meeting Follow-Up", "Outstanding items carry over to the next agenda."],
            ["Organizational Memory", "Find past decisions in seconds."],
            ["Reporting Dashboard", "Monitor productivity from a single screen."],
        ],
        departmentEyebrow: "DEPARTMENT-LEVEL TRACKING",
        departmentTitle: <>Task status is visible <span>across every department.</span></>,
        chartTitle: "Task Status by Department",
        thisWeek: "THIS WEEK",
        openTasks: "Open tasks in one list",
        departments: ["Sales", "Production", "Finance", "HR", "IT"],
        tasks: [
            "Proposal comparison",
            "Contract draft",
            "Production plan update",
        ],
        communicationEyebrow: "CROSS-DEPARTMENT COMMUNICATION",
        communicationTitle: <>Every decision reaches <span>the entire company.</span></>,
        communicationLead: <>Information can be lost, delayed, or misunderstood as it moves between departments. Sia brings every department together through a <strong>shared meeting memory</strong>.</>,
        units: [
            "Management", "Sales", "Production", "Finance",
            "Human Resources", "IT", "Purchasing", "Quality",
        ],
        sharedMemory: "Shared Meeting Memory",
        scenario: "EXAMPLE SCENARIO",
        salesMeeting: "Sales Meeting",
        deliveryDate: "Move the delivery date forward",
        decision: "DECISION",
        recorded: "Automatically recorded",
        productionTask: "Production · task assigned",
        purchasingTask: "Purchasing · action communicated",
        benefits: [
            ["One Source of Truth", 'No more "That is not what I understood."'],
            ["Eliminate Information Gaps", "Information shared by one department becomes available to everyone."],
            ["Seamless Handover", "Tasks are less likely to be left without an owner."],
            ["Keep Everyone Informed", "Relevant updates reach people who could not attend."],
        ],
        whyEyebrow: "WHY SIA TECHNOLOGY?",
        whyTitle: <>More than a software provider, <span>your long-term technology partner.</span></>,
        stats: [
            ["250,000+", "Individual Users"],
            ["100+", "Organizations and Partners"],
            ["50+", "Active Products and Services"],
            ["13+ Years", "Industry Experience"],
        ],
        whoWeServe: "Who We Serve",
        tags: [
            "Manufacturing Companies",
            "Organized Industrial Zones",
            "Chambers of Commerce and Industry",
            "Municipalities",
            "Associations and Foundations",
            "Technoparks",
            "Educational Institutions",
            "Service Industry",
        ],
        otherSolutions: "Our Other Solutions",
        others: [
            ["Custom Software Development", "Web, mobile, and desktop solutions"],
            ["Fair and B2B Events", "End-to-end event management"],
            ["Chamber and Exchange Accreditation", "TOBB accreditation processes"],
        ],
        cta: <>Let's make your meetings <span>measurable together.</span></>,
        ctaLead: "Contact us to arrange a live demo tailored to your organization.",
        founder: "Founder",
        generalInquiries: "General Inquiries",
        footerLinks: [
            ["#urun", "Product"],
            ["#nasil-calisir", "How It Works"],
            ["#guvenlik", "Security"],
            ["#iletisim", "Contact"],
        ],
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        tagline: "Software • Artificial Intelligence • Digital Transformation",
        rights: "All rights reserved.",
        logoAlt: "Sia Technology",
    },
};

export function SiaFeatures({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const icons = [
        FaFile,
        FaBars,
        FaBell,
        FaRepeat,
        FaMagnifyingGlass,
        FaChartColumn,
    ];

    return (
        <section className="sx-section" id="ozellikler">
            <h2>{t.featuresTitle}</h2>

            <div className="sx-feature-grid">
                {t.features.map(([title, text], index) => {
                    const Icon = icons[index];

                    return (
                        <article className="sx-feature" key={title}>
                            <div className="sx-feature-icon">
                                <Icon />
                            </div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export function SiaDepartments({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const values = [70, 90, 50, 75, 40];

    return (
        <section className="sx-section">
            <span className="sx-eyebrow">{t.departmentEyebrow}</span>
            <h2>{t.departmentTitle}</h2>

            <div className="sx-dept">
                <div className="sx-chart">
                    <strong>{t.chartTitle}</strong>

                    <div className="sx-bars">
                        {t.departments.map((department, index) => (
                            <div className="sx-bar" key={department}>
                                <i style={{ height: `${values[index]}%` }} />
                                <span>{department}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sx-week">
                    <small>{t.thisWeek}</small>
                    <h3>{t.openTasks}</h3>

                    {t.tasks.map((task, index) => (
                        <div
                            className={`sx-task ${index === 0 ? "is-done" : ""}`}
                            key={task}
                        >
                            <span>{index === 0 ? "✓" : ""}</span>
                            <p>{task}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SiaCommunication({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const positions = [
        { pos: "top", cx: 0, cy: -41 },
        { pos: "top-right", cx: 36, cy: -29 },
        { pos: "right", cx: 40, cy: 0 },
        { pos: "bottom-right", cx: 36, cy: 29 },
        { pos: "bottom", cx: 0, cy: 41 },
        { pos: "bottom-left", cx: -35, cy: 29 },
        { pos: "left", cx: -40, cy: 0 },
        { pos: "top-left", cx: -36, cy: -29 },
    ];

    return (
        <section className="sx-section">
            <span className="sx-eyebrow">{t.communicationEyebrow}</span>
            <h2>{t.communicationTitle}</h2>

            <p className="sx-lead">{t.communicationLead}</p>

            <div className="sx-orbit">
                <div className="sx-orbit-ring" aria-hidden="true" />

                <svg
                    className="sx-orbit-lines"
                    viewBox="-50 -50 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    {positions.map((unit, index) => (
                        <line
                            key={index}
                            x1="0"
                            y1="0"
                            x2={unit.cx}
                            y2={unit.cy}
                            vectorEffect="non-scaling-stroke"
                        />
                    ))}
                </svg>

                <div className="sx-orbit-core">
                    <img src={logo4} alt="" />
                    <strong>{t.sharedMemory}</strong>
                </div>

                {positions.map((unit, index) => (
                    <div
                        key={unit.pos}
                        className={`sx-unit sx-unit-${unit.pos} ${["right", "left", "top", "bottom"].includes(unit.pos)
                            ? "is-dark"
                            : ""
                            }`}
                    >
                        <span />
                        {t.units[index]}
                    </div>
                ))}
            </div>

            <div className="sx-scenario">
                <small className="sx-scenario-label">{t.scenario}</small>

                <div className="sx-scenario-flow">
                    <div className="sx-scenario-card is-light">
                        <strong>{t.salesMeeting}</strong>
                        <span>{t.deliveryDate}</span>
                    </div>

                    <span className="sx-arrow">→</span>

                    <div className="sx-scenario-card is-dark">
                        <strong>{t.decision}</strong>
                        <span>{t.recorded}</span>
                    </div>

                    <span className="sx-arrow">→</span>

                    <div className="sx-scenario-outs">
                        <div>{t.productionTask}</div>
                        <div>{t.purchasingTask}</div>
                    </div>
                </div>
            </div>

            <div className="sx-benefits">
                {t.benefits.map(([title, text], index) => (
                    <div
                        className={`sx-benefit ${index % 2 === 0 ? "is-dark" : "is-blue"
                            }`}
                        key={title}
                    >
                        <strong>{title}</strong>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function SiaWhy({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;

    return (
        <section className="sx-section sx-why" id="iletisim">
            <div className="sx-why-art" aria-hidden="true">
                <span className="sx-arc sx-arc-top" />
                <span className="sx-arc sx-arc-left" />
                <span className="sx-circle-br" />
            </div>

            <div className="sx-why-card">
                <SectionLogo variant="secondary" />

                <span className="sx-eyebrow">{t.whyEyebrow}</span>
                <h2>{t.whyTitle}</h2>

                <div className="sx-stats">
                    {t.stats.map(([value, label], index) => (
                        <div
                            className={`sx-stat ${index === 3 ? "is-highlight" : ""}`}
                            key={label}
                        >
                            <strong>{value}</strong>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>

                <div className="sx-kinds">
                    <h3>{t.whoWeServe}</h3>

                    <div className="sx-tags">
                        {t.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>

                    <div className="sx-divider" />

                    <h3>{t.otherSolutions}</h3>

                    <div className="sx-others">
                        {t.others.map(([title, text]) => (
                            <article key={title}>
                                <strong>{title}</strong>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <h2 className="sx-cta">{t.cta}</h2>

                <p className="sx-cta-lead">
                    <strong>{t.ctaLead}</strong>
                </p>

                <div className="sx-contact-cards">
                    <article>
                        <strong>Safa Merve Taşcı</strong>
                        <small>{t.founder}</small>
                        <a href="tel:+905385036133">+90 538 503 6133</a>
                        <a href="mailto:safa@siateknoloji.com">
                            safa@siateknoloji.com
                        </a>
                    </article>

                    <article>
                        <strong>Sia Teknoloji Ltd. Şti.</strong>
                        <small>{t.generalInquiries}</small>
                        <a href="tel:+905321707428">+90 532 170 7428</a>
                        <a href="mailto:info@siateknoloji.com">
                            info@siateknoloji.com
                        </a>
                        <a
                            href="https://www.siateknoloji.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            www.siateknoloji.com
                        </a>
                    </article>
                </div>

                <footer className="site-footer">
                    <div className="site-footer-inner">
                        <div className="footer-brand">
                            <img
                                src={yeniresim}
                                alt={t.logoAlt}
                                className="footer-logo"
                            />
                        </div>

                        <nav className="footer-links" aria-label="Footer links">
                            {t.footerLinks.map(([href, label]) => (
                                <a key={href} href={href}>
                                    {label}
                                </a>
                            ))}

                            <Link to="/privacy-policy">{t.privacy}</Link>
                            <Link to="/terms-of-service">{t.terms}</Link>
                        </nav>
                    </div>

                    <div className="site-footer-bottom">
                        <p className="footer-tagline">{t.tagline}</p>

                        <p>
                            <a
                                href="https://www.siateknoloji.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.siateknoloji.com
                            </a>
                        </p>

                        <p>
                            © 2026 Sia Teknoloji Ltd. Şti. {t.rights}
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}
