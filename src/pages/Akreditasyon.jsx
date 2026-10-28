
import { Link } from "react-router-dom";
import { useState, Fragment } from "react";
import {
    FaFolderOpen,
    FaTableCells,
    FaUserTie,
    FaClock,
    FaCommentDots,
    FaRotate,
    FaListCheck,
    FaCalendarDays,
    FaFileLines,
    FaCircleCheck,
    FaUsers,
    FaEnvelope,
    FaDesktop,
    FaMagnifyingGlass,
    FaShieldHalved,
    FaClipboardCheck,
    FaArrowRight,
    FaCheck,
} from "react-icons/fa6";
import yeniresim from "../assets/yeniresim.png";
import logo8 from "../assets/logo8.jpg";
import "./Akreditasyon.css";

const TRANSLATIONS = {
    "← Ana Sayfa": "← Home",
    "AKREDİTASYON YAZILIMI": "ACCREDITATION SOFTWARE",
    "TOBB AKREDİTASYON SİSTEMİ İÇİN": "FOR THE TOBB ACCREDITATION SYSTEM",
    "Oda ve Borsa": "Chambers and Commodity Exchanges",
    "Akreditasyon Yazılımı": "Accreditation Software",
    "Akreditasyon Yönetimi": "Accreditation Management",
    "Üye İlişkileri": "Member Relations",
    "DÖF & Süreç Takibi": "Corrective Actions & Process Tracking",
    "İHTİYAÇ": "THE CHALLENGE",
    "Akreditasyon süreci neden zorlaşır?": "Why Is Accreditation Difficult?",
    "ÇÖZÜMÜMÜZ": "OUR SOLUTION",
    "Tek platform, birbirine bağlı üç modül": "One Platform, Three Connected Modules",
    "Kanıtlar dağınık": "Scattered Evidence",
    "Belgeler e-postalarda, ortak klasörlerde ve masaüstlerinde; denetimde aranan dosya bulunamaz.":
        "Documents are scattered across emails, shared folders, and desktops, making them difficult to find during audits.",
    "Excel tabloları çoğalıyor": "Too Many Spreadsheets",
    "Her birim kendi listesini tutar; hangi sürümün güncel olduğu belirsizleşir.":
        "Each department maintains its own lists, making it difficult to identify the latest version.",
    "Sorumluluk netleşmiyor": "Unclear Responsibilities",
    "Hangi kriterden kimin sorumlu olduğu ve işin hangi aşamada olduğu izlenemez.":
        "It is difficult to track who is responsible for each criterion and the current status of each task.",
    "Denetim öncesi telaş": "Last-Minute Audit Pressure",
    "Yıl içinde biriken eksikler son haftalarda topluca tamamlanmaya çalışılır.":
        "Outstanding tasks accumulated throughout the year are rushed through in the final weeks before an audit.",
    "Üye talepleri kayboluyor": "Member Requests Get Lost",
    "Telefonla, e-postayla gelen talepler kayıt altına alınmadan unutulur.":
        "Requests received by phone or email may be forgotten if they are not recorded.",
    "DÖF'ler kapanmıyor": "Corrective Actions Remain Open",
    "Açılan düzeltici faaliyetlerin takibi yapılmaz, aynı uygunsuzluk tekrar eder.":
        "Corrective actions are not consistently tracked, allowing the same nonconformities to recur.",
    "Kriter": "Criteria",
    "Faaliyet": "Activity",
    "Kanıt": "Evidence",
    "Doküman": "Document",
    "Denetime hazır": "Ready for Audit",
    "Kriter Yönetimi": "Criteria Management",
    "Akreditasyon kriterleri sistemde yapılandırılır; her kriterin karşılanma durumu anlık izlenir.":
        "Accreditation criteria are organized in the system, and the status of each criterion can be tracked in real time.",
    "Kriter bazında sorumlu birim ve kişi": "Responsible department and person for each criterion",
    "Karşılanma durumu ve ilerleme göstergesi": "Compliance status and progress indicators",
    "Eksik kriterlerin anında görünmesi": "Instant visibility of outstanding criteria",
    "Faaliyet Takibi": "Activity Tracking",
    "Kriterleri karşılamak için yürütülen çalışmalar planlanır ve takvim üzerinden izlenir.":
        "Activities carried out to meet the criteria are planned and tracked using a calendar.",
    "Faaliyet–kriter ilişkilendirmesi": "Linking activities to criteria",
    "Sorumlu, başlangıç ve bitiş tarihi": "Assigned person, start date, and end date",
    "Geciken faaliyetlerin takibi": "Tracking overdue activities",
    "Kanıt Yönetimi": "Evidence Management",
    "Her faaliyetin kanıtı ilgili kriterle bağlantılı olarak yüklenir; denetimde aranan belge hızla bulunur.":
        "Evidence for each activity is linked to the relevant criterion, making documents easy to find during an audit.",
    "Kritere bağlı kanıt arşivi": "Evidence archive linked to criteria",
    "Kanıtı eksik kriterlerin listesi": "List of criteria with missing evidence",
    "Denetçiye sunuma hazır görünüm": "Evidence organized for auditor review",
    "Doküman Yönetimi": "Document Management",
    "Prosedür, talimat, form ve kayıtlar merkezi bir arşivde düzenli ve erişilebilir tutulur.":
        "Procedures, instructions, forms, and records are kept organized and accessible in a central archive.",
    "Tek merkezde kurumsal doküman arşivi": "Centralized organizational document archive",
    "Güncel sürüme kolay erişim": "Easy access to the latest version",
    "Yetkiye göre görüntüleme": "Access based on user permissions",
    "Üye Talepleri": "Member Requests",
    "Üyeden gelen her talep kayda alınır, ilgili birime yönlendirilir ve sonuçlanana kadar izlenir. Hiçbir talep unutulmaz.":
        "Every member request is recorded, assigned to the relevant department, and tracked until resolved. No request is forgotten.",
    "Talep kaydı": "Request registration",
    "Birime yönlendirme": "Department assignment",
    "Durum takibi": "Status tracking",
    "Sonuçlandırma": "Resolution",
    "Anketler": "Surveys",
    "Üye memnuniyeti ve beklenti anketleri sistem üzerinden hazırlanır ve yayınlanır. Sonuçlar akreditasyon kanıtlarına dönüşür.":
        "Member satisfaction and expectation surveys are created and published through the system. Their results become accreditation evidence.",
    "Anket hazırlama": "Survey creation",
    "Memnuniyet ölçümü": "Satisfaction measurement",
    "Sonuç raporları": "Results reports",
    "İletişim Süreçleri": "Communication Processes",
    "Üyelerle yürütülen iletişim faaliyetleri planlanır ve kayıt altında tutulur. Kurum, iletişimini belgeleyebilir.":
        "Communication activities with members are planned and recorded, allowing the organization to document its interactions.",
    "Planlı iletişim": "Planned communication",
    "İletişim kayıtları": "Communication records",
    "Belgelenebilir süreç": "Documented processes",
    "Talep kayda alınır": "Request is recorded",
    "Birime yönlendirilir": "Assigned to a department",
    "Süreç izlenir": "Process is tracked",
    "Sonuçlandırılır": "Resolved",
    "Uygunsuzluk tespiti": "Nonconformity identified",
    "DÖF kaydı": "Corrective action recorded",
    "Sorumlu ve termin": "Responsible person and deadline",
    "Uygulama takibi": "Implementation tracking",
    "Kapanış": "Closure",
    "Düzeltici Faaliyetler": "Corrective Actions",
    "Uygunsuzluklar kayda alınır, düzeltici faaliyetler açılır ve kapanışa kadar izlenir.":
        "Nonconformities are recorded, corrective actions are initiated, and progress is tracked until closure.",
    "Görevler": "Tasks",
    "Her faaliyet görevlere ayrılır; tarihleri ve durumları tek listeden takip edilir.":
        "Each activity is divided into tasks, with dates and statuses tracked in one list.",
    "Sorumluluklar": "Responsibilities",
    "Kimin neyi, ne zamana kadar yapacağı açıkça tanımlanır ve görünür olur.":
        "Who does what, and by when, is clearly defined and visible.",
    "Yıl boyu denetime hazırlık": "Year-Round Audit Readiness",
    "Kanıtlar zamanında toplanır, son dakika telaşı ortadan kalkar.":
        "Evidence is collected on time, eliminating last-minute pressure.",
    "Şeffaflık ve hesap verebilirlik": "Transparency and Accountability",
    "Her işin sorumlusu ve durumu yönetim tarafından görülür.":
        "Management can see who is responsible for each task and its current status.",
    "Kurumsal hafıza": "Organizational Knowledge",
    "Personel değişse de süreçler ve belgeler kurumda kalır.":
        "Processes and documents remain with the organization even when staff changes.",
    "Sürekli iyileştirme": "Continuous Improvement",
    "Tekrarlayan uygunsuzluklar görünür hale gelir ve önlenir.":
        "Recurring nonconformities become visible and can be prevented.",
    "Daha az manuel iş": "Less Manual Work",
    "Excel ve e-posta trafiği yerine tek merkezden takip.":
        "Track everything centrally instead of relying on spreadsheets and email.",
    "Güçlü üye ilişkileri": "Stronger Member Relations",
    "Talepleri takip edilen üye, kurumuna daha çok güvenir.":
        "Members gain greater confidence when their requests are properly tracked.",
    "KURUMUNUZA KAZANDIRDIKLARI": "BENEFITS FOR YOUR ORGANIZATION",
    "NEDEN SİA TEKNOLOJİ?": "WHY SIA TECHNOLOGY?",
    "Proje teslim eden değil, uzun vadeli teknoloji iş ortağı":
        "More Than a Vendor: Your Long-Term Technology Partner",
    "Hazır paketler yerine kurumunuzun çalışma modeline uygun, ölçeklenebilir ve sürdürülebilir yazılımlar geliştiriyoruz. Oda, borsa ve kamu kurumlarıyla edindiğimiz saha tecrübesini her projeye taşıyoruz.":
        "Instead of off-the-shelf packages, we develop scalable and sustainable software tailored to your organization's way of working. We bring our field experience with chambers, exchanges, and public institutions to every project.",
    "yıllık saha tecrübesi": "years of field experience",
    "bireysel kullanıcı": "individual users",
    "kurum ve iş ortağı": "organizations and partners",
    "aktif ürün ve hizmet": "active products and services",
    "SAHADA KULLANILIYOR": "IN ACTIVE USE",
    "Elazığ Ticaret Borsası logosu": "Elazığ Commodity Exchange logo",
    "Elazığ Ticaret Borsası, akreditasyon süreçlerini bu platformla yönetiyor.":
        "Elazığ Commodity Exchange manages its accreditation processes with this platform.",
    "Kriterler, kanıtlar, üye ilişkileri ve DÖF süreçleri tek platformda, sahada aktif olarak kullanılıyor.":
        "Criteria, evidence, member relations, and corrective action processes are actively managed on a single platform.",
    "Referanslarımızdan bazıları": "Selected References",
    "Kurumunuza özel bir demo için tanışalım": "Let's Discuss a Demo for Your Organization",
    "Platformu kendi akreditasyon süreçleriniz üzerinden birlikte inceleyelim.":
        "Let's explore the platform using your own accreditation processes.",
    "Demo Talep Et": "Request a Demo",
    "Kurucu": "Founder",
    "Yazılım · Yapay Zekâ · Dijital Dönüşüm": "Software · Artificial Intelligence · Digital Transformation",
    "Oda ve Borsa Akreditasyon Yazılımı": "Chamber and Commodity Exchange Accreditation Software",
    "Akreditasyondan üye ilişkilerine, tüm kurumsal süreçler tek platformda.":
        "From accreditation to member relations, all organizational processes on one platform.",
    "Akreditasyon gerekliliklerini, kurumsal süreçleri ve üye ilişkilerini tek bir dijital platformda, kanıtıyla ve sorumlusuyla yönetin.":
        "Manage accreditation requirements, organizational processes, and member relations on a single digital platform, with evidence and clear accountability.",
    "Denetim günü geldiğinde, her kriterin kanıtı birkaç tık uzağınızda.":
        "When audit day arrives, the evidence for every criterion is just a few clicks away.",
    "BİR ÜYE TALEBİNİN YOLCULUĞU": "THE JOURNEY OF A MEMBER REQUEST",
    "Oda, borsa ve kamu kurumlarıyla edindiğimiz saha tecrübesini her projeye taşıyoruz.":
        "We bring our field experience with chambers, exchanges, and public institutions to every project.",
};

function ModuleHead({ no, title, t }) {
    return (
        <div className="ak-module-head">
            <span className="ak-module-badge">{no}</span>
            <div>
                <span className="ak-kicker">{t("MODÜL")}</span>
                <h2>{t(title)}</h2>
            </div>
        </div>
    );
}

const PAIN_POINTS = [
    {
        icon: FaFolderOpen,
        title: "Kanıtlar dağınık",
        text: "Belgeler e-postalarda, ortak klasörlerde ve masaüstlerinde; denetimde aranan dosya bulunamaz.",
    },
    {
        icon: FaTableCells,
        title: "Excel tabloları çoğalıyor",
        text: "Her birim kendi listesini tutar; hangi sürümün güncel olduğu belirsizleşir.",
    },
    {
        icon: FaUserTie,
        title: "Sorumluluk netleşmiyor",
        text: "Hangi kriterden kimin sorumlu olduğu ve işin hangi aşamada olduğu izlenemez.",
    },
    {
        icon: FaClock,
        title: "Denetim öncesi telaş",
        text: "Yıl içinde biriken eksikler son haftalarda topluca tamamlanmaya çalışılır.",
    },
    {
        icon: FaCommentDots,
        title: "Üye talepleri kayboluyor",
        text: "Telefonla, e-postayla gelen talepler kayıt altına alınmadan unutulur.",
    },
    {
        icon: FaRotate,
        title: "DÖF'ler kapanmıyor",
        text: "Açılan düzeltici faaliyetlerin takibi yapılmaz, aynı uygunsuzluk tekrar eder.",
    },
];

const MODULES = [
    {
        no: "01",
        title: "Akreditasyon Yönetimi",
        text: "Kriter, faaliyet, kanıt ve doküman süreçleri",
    },
    {
        no: "02",
        title: "Üye İlişkileri",
        text: "Üye talepleri, anketler ve iletişim süreçleri",
    },
    {
        no: "03",
        title: "DÖF & Süreç Takibi",
        text: "Düzeltici faaliyetler, görevler ve sorumluluklar",
    },
];

const MODULE_01_STEPS = ["Kriter", "Faaliyet", "Kanıt", "Doküman", "Denetime hazır"];

const MODULE_01_CARDS = [
    {
        icon: FaListCheck,
        title: "Kriter Yönetimi",
        text: "Akreditasyon kriterleri sistemde yapılandırılır; her kriterin karşılanma durumu anlık izlenir.",
        points: [
            "Kriter bazında sorumlu birim ve kişi",
            "Karşılanma durumu ve ilerleme göstergesi",
            "Eksik kriterlerin anında görünmesi",
        ],
    },
    {
        icon: FaCalendarDays,
        title: "Faaliyet Takibi",
        text: "Kriterleri karşılamak için yürütülen çalışmalar planlanır ve takvim üzerinden izlenir.",
        points: [
            "Faaliyet–kriter ilişkilendirmesi",
            "Sorumlu, başlangıç ve bitiş tarihi",
            "Geciken faaliyetlerin takibi",
        ],
    },
    {
        icon: FaShieldHalved,
        title: "Kanıt Yönetimi",
        text: "Her faaliyetin kanıtı ilgili kriterle bağlantılı olarak yüklenir; denetimde aranan belge hızla bulunur.",
        points: [
            "Kritere bağlı kanıt arşivi",
            "Kanıtı eksik kriterlerin listesi",
            "Denetçiye sunuma hazır görünüm",
        ],
    },
    {
        icon: FaFileLines,
        title: "Doküman Yönetimi",
        text: "Prosedür, talimat, form ve kayıtlar merkezi bir arşivde düzenli ve erişilebilir tutulur.",
        points: [
            "Tek merkezde kurumsal doküman arşivi",
            "Güncel sürüme kolay erişim",
            "Yetkiye göre görüntüleme",
        ],
    },
];

const MODULE_02_CARDS = [
    {
        icon: FaCommentDots,
        title: "Üye Talepleri",
        text: "Üyeden gelen her talep kayda alınır, ilgili birime yönlendirilir ve sonuçlanana kadar izlenir. Hiçbir talep unutulmaz.",
        tags: ["Talep kaydı", "Birime yönlendirme", "Durum takibi", "Sonuçlandırma"],
    },
    {
        icon: FaClipboardCheck,
        title: "Anketler",
        text: "Üye memnuniyeti ve beklenti anketleri sistem üzerinden hazırlanır ve yayınlanır. Sonuçlar akreditasyon kanıtlarına dönüşür.",
        tags: ["Anket hazırlama", "Memnuniyet ölçümü", "Sonuç raporları"],
    },
    {
        icon: FaEnvelope,
        title: "İletişim Süreçleri",
        text: "Üyelerle yürütülen iletişim faaliyetleri planlanır ve kayıt altında tutulur. Kurum, iletişimini belgeleyebilir.",
        tags: ["Planlı iletişim", "İletişim kayıtları", "Belgelenebilir süreç"],
    },
];

const MODULE_02_JOURNEY = [
    "Talep kayda alınır",
    "Birime yönlendirilir",
    "Süreç izlenir",
    "Sonuçlandırılır",
];

const MODULE_03_STEPS = [
    "Uygunsuzluk tespiti",
    "DÖF kaydı",
    "Sorumlu ve termin",
    "Uygulama takibi",
    "Kapanış",
];

const MODULE_03_CARDS = [
    {
        icon: FaRotate,
        title: "Düzeltici Faaliyetler",
        text: "Uygunsuzluklar kayda alınır, düzeltici faaliyetler açılır ve kapanışa kadar izlenir.",
    },
    {
        icon: FaListCheck,
        title: "Görevler",
        text: "Her faaliyet görevlere ayrılır; tarihleri ve durumları tek listeden takip edilir.",
    },
    {
        icon: FaUsers,
        title: "Sorumluluklar",
        text: "Kimin neyi, ne zamana kadar yapacağı açıkça tanımlanır ve görünür olur.",
    },
];

const GAINS = [
    ["Yıl boyu denetime hazırlık", "Kanıtlar zamanında toplanır, son dakika telaşı ortadan kalkar."],
    ["Şeffaflık ve hesap verebilirlik", "Her işin sorumlusu ve durumu yönetim tarafından görülür."],
    ["Kurumsal hafıza", "Personel değişse de süreçler ve belgeler kurumda kalır."],
    ["Sürekli iyileştirme", "Tekrarlayan uygunsuzluklar görünür hale gelir ve önlenir."],
    ["Daha az manuel iş", "Excel ve e-posta trafiği yerine tek merkezden takip."],
    ["Güçlü üye ilişkileri", "Talepleri takip edilen üye, kurumuna daha çok güvenir."],
];

const STATS = [
    { value: "13+", label: "yıllık saha tecrübesi" },
    { value: "250.000+", label: "bireysel kullanıcı" },
    { value: "100+", label: "kurum ve iş ortağı" },
    { value: "50+", label: "aktif ürün ve hizmet" },
];

const REFERENCES = [
    "DEİK",
    "Elazığ Ticaret ve Sanayi Odası",
    "Elazığ Belediyesi",
    "Fırat Üniversitesi",
    "Ağrı İbrahim Çeçen Üniversitesi",
    "Fırat Teknokent",
    "Müstakil Fuar",
    "Sistem Global",
];

export default function Akreditasyon() {
    const [lang, setLang] = useState("tr");

    const t = (text) => {
        if (lang === "tr") return text;
        return TRANSLATIONS[text] || text;
    };

    return (
        <div className="ak-page">
            <header className="ak-topbar">
                <Link to="/" className="ak-brand">
                    <img src={yeniresim} alt="Sia Teknoloji" />
                </Link>

                <span className="ak-topbar-label">
                    {t("AKREDİTASYON YAZILIMI")}
                </span>

                <div className="lang-toggle">
                    <button
                        type="button"
                        className={lang === "tr" ? "is-active" : ""}
                        onClick={() => setLang("tr")}
                    >
                        TR
                    </button>
                    <button
                        type="button"
                        className={lang === "en" ? "is-active" : ""}
                        onClick={() => setLang("en")}
                    >
                        EN
                    </button>
                </div>
            </header>

            <div className="ak-topbar">
                <Link to="/" className="ak-home-button">
                    {t("← Ana Sayfa")}
                </Link>
            </div>

            <section className="ak-hero">
                <div className="ak-container">
                    <span className="ak-eyebrow">
                        {t("TOBB AKREDİTASYON SİSTEMİ İÇİN")}
                    </span>

                    <h1>
                        {t("Oda ve Borsa")}{" "}
                        <span>{t("Akreditasyon Yazılımı")}</span>
                    </h1>

                    <p className="ak-lead">
                        {t("Akreditasyon gerekliliklerini, kurumsal süreçleri ve üye ilişkilerini tek bir dijital platformda, kanıtıyla ve sorumlusuyla yönetin.")}
                    </p>

                    <div className="ak-pills">
                        <span>
                            <FaCircleCheck /> {t("Akreditasyon Yönetimi")}
                        </span>
                        <span>
                            <FaUsers /> {t("Üye İlişkileri")}
                        </span>
                        <span>
                            <FaRotate /> {t("DÖF & Süreç Takibi")}
                        </span>
                    </div>

                    <p className="ak-hero-tagline">
                        {t("Akreditasyondan üye ilişkilerine, tüm kurumsal süreçler tek platformda.")}
                    </p>

                    <p className="ak-hero-contact">
                        www.siateknoloji.com · info@siateknoloji.com
                    </p>
                </div>
            </section>

            <section className="ak-section">
                <div className="ak-container">
                    <span className="ak-kicker">{t("İHTİYAÇ")}</span>

                    <h2>{t("Akreditasyon süreci neden zorlaşır?")}</h2>

                    <p className="ak-intro">
                        {t("Akreditasyon tek seferlik bir sınav değil, yıl boyu süren bir çalışmadır. Kriterler, kanıtlar, sorumlular ve üyelerden gelen talepler farklı dosyalara, klasörlere ve kişilere dağıldığında denetim dönemi kurum için yoğun bir telaşa dönüşür.")}
                    </p>

                    <div className="ak-grid-3">
                        {PAIN_POINTS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <article className="ak-card ak-card-soft" key={p.title}>
                                    <div className="ak-icon-sm"><Icon /></div>
                                    <h3>{t(p.title)}</h3>
                                    <p>{t(p.text)}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="ak-solution">
                <div className="ak-container">
                    <span className="ak-kicker light">{t("ÇÖZÜMÜMÜZ")}</span>
                    <h2>{t("Tek platform, birbirine bağlı üç modül")}</h2>

                    <div className="ak-grid-3">
                        {MODULES.map((m) => (
                            <article className="ak-module-tile" key={m.no}>
                                <span className="ak-module-no">{m.no}</span>
                                <h3>{t(m.title)}</h3>
                                <p>{t(m.text)}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ak-section">
                <div className="ak-container">
                    <ModuleHead no="01" title="Akreditasyon Yönetimi" t={t} />

                    <p className="ak-intro">
                        {t("Akreditasyon kriterlerinden başlayarak her faaliyeti, her kanıtı ve her dokümanı birbirine bağlar. Böylece hangi kriterin ne ölçüde karşılandığı, eksiklerin nerede olduğu ve kimin üzerinde çalıştığı tek ekranda görünür.")}
                    </p>

                    <div className="ak-flow">
                        {MODULE_01_STEPS.map((step, i) => (
                            <Fragment key={step}>
                                {i > 0 && (
                                    <span className="ak-flow-arrow" aria-hidden="true">
                                        <FaArrowRight />
                                    </span>
                                )}
                                <div className="ak-flow-step">
                                    <span className={`ak-flow-dot ${i === MODULE_01_STEPS.length - 1 ? "is-done" : ""}`}>
                                        {i === MODULE_01_STEPS.length - 1 ? <FaCheck /> : i + 1}
                                    </span>
                                    <span className="ak-flow-label">{t(step)}</span>
                                </div>
                            </Fragment>
                        ))}
                    </div>

                    <div className="ak-grid-2">
                        {MODULE_01_CARDS.map((c) => {
                            const Icon = c.icon;
                            return (
                                <article className="ak-card" key={c.title}>
                                    <h3><Icon /> {t(c.title)}</h3>
                                    <p>{t(c.text)}</p>
                                    <ul className="ak-checks">
                                        {c.points.map((pt) => (
                                            <li key={pt}><FaCheck /> {t(pt)}</li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>

                    <div className="ak-banner">
                        <FaMagnifyingGlass />
                        <p>
                            {t("Denetim günü geldiğinde, her kriterin kanıtı birkaç tık uzağınızda.")}
                        </p>
                    </div>
                </div>
            </section>

            <section className="ak-section ak-alt">
                <div className="ak-container">
                    <ModuleHead no="02" title="Üye İlişkileri" t={t} />

                    <p className="ak-intro">
                        {t("Üyelerinizle kurduğunuz her temas kayıt altına alınır. Talepler doğru birime ulaşır, anketlerle üye memnuniyeti ölçülür, iletişim süreçleri planlı ve izlenebilir şekilde yürütülür.")}
                    </p>

                    <div className="ak-stack">
                        {MODULE_02_CARDS.map((c) => {
                            const Icon = c.icon;
                            return (
                                <article className="ak-wide-card" key={c.title}>
                                    <div className="ak-icon-lg"><Icon /></div>
                                    <div>
                                        <h3>{t(c.title)}</h3>
                                        <p>{t(c.text)}</p>
                                        <div className="ak-tags">
                                            {c.tags.map((tag) => (
                                                <span key={tag}>{t(tag)}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="ak-journey">
                        <span className="ak-journey-label">
                            {t("BİR ÜYE TALEBİNİN YOLCULUĞU")}
                        </span>
                        <div className="ak-journey-grid">
                            {MODULE_02_JOURNEY.map((step, i) => (
                                <div
                                    className={`ak-journey-card ${i === MODULE_02_JOURNEY.length - 1 ? "is-final" : ""}`}
                                    key={step}
                                >
                                    <strong>{i + 1}</strong>
                                    <span>{t(step)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="ak-section">
                <div className="ak-container">
                    <ModuleHead no="03" title="DÖF & Süreç Takibi" t={t} />

                    <p className="ak-intro">
                        {t("Tespit edilen her uygunsuzluk, düzeltici faaliyete dönüşür ve kapanana kadar takip edilir. Görevler ve sorumluluklar netleşir; kurum, sürekli iyileştirme kültürünü kanıtlarıyla birlikte ortaya koyar.")}
                    </p>

                    <div className="ak-steps">
                        {MODULE_03_STEPS.map((s, i) => (
                            <div
                                className={`ak-step ${i === MODULE_03_STEPS.length - 1 ? "is-final" : ""}`}
                                key={s}
                            >
                                <strong>{i + 1}</strong>
                                <span>{t(s)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="ak-grid-3">
                        {MODULE_03_CARDS.map((c) => {
                            const Icon = c.icon;
                            return (
                                <article className="ak-card" key={c.title}>
                                    <div className="ak-icon-sm plain"><Icon /></div>
                                    <h3>{t(c.title)}</h3>
                                    <p>{t(c.text)}</p>
                                </article>
                            );
                        })}
                    </div>

                    <div className="ak-gains">
                        <span className="ak-gains-label">
                            {t("KURUMUNUZA KAZANDIRDIKLARI")}
                        </span>
                        <div className="ak-gains-grid">
                            {GAINS.map(([title, text]) => (
                                <div className="ak-gain-item" key={title}>
                                    <span className="ak-gain-dot" aria-hidden="true" />
                                    <div>
                                        <strong>{t(title)}</strong>
                                        <p>{t(text)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="ak-why">
                <div className="ak-container">
                    <span className="ak-kicker light">{t("NEDEN SİA TEKNOLOJİ?")}</span>

                    <h2>
                        {t("Proje teslim eden değil, uzun vadeli teknoloji iş ortağı")}
                    </h2>

                    <p className="ak-intro light">
                        {t("Hazır paketler yerine kurumunuzun çalışma modeline uygun, ölçeklenebilir ve sürdürülebilir yazılımlar geliştiriyoruz. Oda, borsa ve kamu kurumlarıyla edindiğimiz saha tecrübesini her projeye taşıyoruz.")}
                    </p>

                    <div className="ak-stats">
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <strong>{s.value}</strong>
                                <span>{t(s.label)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="ak-sahada">
                        <div className="ak-sahada-media">
                            <img src={logo8} alt={t("Elazığ Ticaret Borsası logosu")} />
                        </div>

                        <div className="ak-sahada-text">
                            <span className="ak-kicker light">
                                <FaCircleCheck /> {t("SAHADA KULLANILIYOR")}
                            </span>
                            <h3>
                                {t("Elazığ Ticaret Borsası, akreditasyon süreçlerini bu platformla yönetiyor.")}
                            </h3>
                            <p>
                                {t("Kriterler, kanıtlar, üye ilişkileri ve DÖF süreçleri tek platformda, sahada aktif olarak kullanılıyor.")}
                            </p>
                        </div>
                    </div>

                    <h3 className="ak-refs-title">
                        {t("Referanslarımızdan bazıları")}
                    </h3>

                    <div className="ak-tags light">
                        {REFERENCES.map((r) => (
                            <span key={r}>{t(r)}</span>
                        ))}
                    </div>

                    <div className="ak-demo">
                        <div className="ak-demo-icon"><FaDesktop /></div>
                        <div>
                            <h3>{t("Kurumunuza özel bir demo için tanışalım")}</h3>
                            <p>{t("Platformu kendi akreditasyon süreçleriniz üzerinden birlikte inceleyelim.")}</p>
                        </div>
                        <a
                            href="https://demo.beetinq.com/demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ak-demo-btn"
                        >
                            {t("Demo Talep Et")} <FaArrowRight />
                        </a>
                    </div>

                    <div className="ak-contacts">
                        <article className="light-card">
                            <strong>Safa Merve Taşcı</strong>
                            <small>{t("Kurucu")}</small>
                            <a href="tel:+905385036133">+90 538 503 6133</a>
                            <a href="mailto:safa@siateknoloji.com">safa@siateknoloji.com</a>
                        </article>

                        <article className="dark-card">
                            <strong>Sia Teknoloji Ltd. Şti.</strong>
                            <small>{t("Yazılım · Yapay Zekâ · Dijital Dönüşüm")}</small>
                            <a href="tel:+905321707428">+90 532 170 7428</a>
                            <a href="mailto:info@siateknoloji.com">info@siateknoloji.com</a>
                            <a
                                href="https://www.siateknoloji.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.siateknoloji.com
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            <footer className="ak-footer">
                <div className="ak-container ak-footer-inner">
                    <span>{t("Oda ve Borsa Akreditasyon Yazılımı")}</span>
                    <Link to="/">{t("← Ana Sayfa")}</Link>
                </div>
            </footer>
        </div>
    );
}
