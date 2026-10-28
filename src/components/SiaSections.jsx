
import {
    FaMicrophone,
    FaFileLines,
    FaStar,
    FaPaperPlane,
    FaGavel,
    FaSquareCheck,
    FaBolt,
    FaCheck,
    FaServer,
    FaShieldHalved,
    FaDiagramProject,
    FaWifi,
    FaLock,
    FaUserShield,
    FaCloud,
    FaBuilding,
    FaArrowRight,
} from "react-icons/fa6";

import siaLogo from "../assets/yeniresim.png";
import "./SiaSections.css";

const TEXT = {
    tr: {
        hero: {
            badge: "Yapay Zekâ Destekli Toplantı Analizi",
            title: ["Toplantılarınızı", "ölçülebilir hale", "getirin."],
            lead: "Toplantılarınızı yapay zekâ ile kararlara, yapılacak işlere ve ölçülebilir sonuçlara dönüştürün.",
            window: "Sia Toplantı Analizi · Haftalık Operasyon Toplantısı",
            transcriptLabel: "TOPLANTI DÖKÜMÜ",
            outputLabel: "YAPAY ZEKÂ ÇIKTILARI",
            transcript: [
                { initials: "AY", text: "Proje planını cuma gününe kadar tamamlamamız gerekiyor." },
                { initials: "MK", text: "Bütçeyi hazırlayıp ekiple paylaşacağım." },
                { initials: "ED", text: "Son sürümü bir sonraki toplantımızda gözden geçirelim." },
            ],
            outputs: [
                { kind: "decision", tag: "KARAR", text: "Proje planı cuma gününe kadar tamamlanacak." },
                { kind: "task", tag: "YAPILACAK İŞ", text: "Bütçeyi hazırla ve ekiple paylaş." },
                { kind: "note", tag: "NOT", text: "Son sürümü bir sonraki toplantıda gözden geçir." },
            ],
            completed: "Analiz tamamlandı",
            pills: [
                "Yerel ortamda çalışır",
                "Verileriniz sizde kalır",
                "Birimleri birbirine bağlar",
            ],
            foot: "Yazılım • Yapay Zekâ • Dijital Dönüşüm",
        },
        product: {
            eyebrow: "ÜRÜNÜMÜZ",
            title: "Konuşmaları sonuçlara dönüştüren toplantı analizi",
            lead: "Sia, kurumların toplantı konuşmalarını yapılandırılmış kararlara, yapılacak işlere ve ölçülebilir sonuçlara dönüştürmesine yardımcı olur.",
            beforeLabel: "ÖNCE",
            beforeTitle: "Toplantıdan sonra...",
            before: [
                "Toplantı notları elle hazırlanır.",
                "Yapılacak işler unutulabilir.",
                "Kararları takip etmek zor olabilir.",
                "Sorumluluklar belirsiz kalabilir.",
            ],
            afterLabel: "SONRA",
            afterTitle: "Sia ile toplantıdan sonra...",
            after: [
                "Toplantı kayıtları otomatik olarak analiz edilir.",
                "Yapılacak işler belirlenir ve düzenlenir.",
                "Kararlar açık bir şekilde kayıt altına alınır.",
                "Sorumlulukları ve takip süreçlerini yönetmek kolaylaşır.",
            ],
            outputsTitle: "Otomatik oluşturulan üç temel çıktı",
            outputs: [
                { title: "Kararlar", text: "Önemli kararlar belirlenir ve kayıt altına alınır." },
                { title: "Yapılacak İşler", text: "Görevler, sorumluluklar ve sonraki adımlar düzenlenir." },
                { title: "Öngörüler", text: "Yapay zekâ, toplantı konuşmalarını faydalı bilgilere dönüştürür." },
            ],
            measuresTitle: "Ölçülebilir bir toplantı nasıl görünür?",
            measures: [
                { title: "Netlik", text: "Kararların ve sorumlulukların daha kolay anlaşılmasını sağlar.", value: 90, color: "#8b9cff" },
                { title: "Takip", text: "Görevleri ve üzerinde uzlaşılan sonraki adımları takip edin.", value: 85, color: "#65d6c4" },
                { title: "Verimlilik", text: "Toplantı sonuçlarını düzenlemek için harcanan zamanı azaltın.", value: 88, color: "#f4bd69" },
            ],
        },
        steps: {
            badge: "NASIL ÇALIŞIR? · 03",
            eyebrow: "NASIL ÇALIŞIR?",
            titleStart: "Konuşmadan",
            titleAccent: "eyleme dört adımda.",
            steps: [
                { title: "Kaydet", text: "Toplantı konuşmalarını ve görüşmeleri kaydedin." },
                { title: "Metne Dönüştür", text: "Konuşmaları aranabilir metinlere dönüştürün." },
                { title: "Analiz Et", text: "Kararları, görevleri ve önemli bilgileri belirleyin." },
                { title: "Harekete Geç", text: "Sonuçları paylaşın ve sorumlulukları takip edin." },
            ],
        },
        security: {
            eyebrow: "GÜVENLİK VE GİZLİLİK",
            titleStart: "Verileriniz",
            titleAccent: "kontrolünüz altında kalır.",
            lead: "Kararlar, görevler ve aksiyonlar otomatik çıkarılır. Hepsi kendi sunucunuzda, verileriniz kurum dışına çıkmadan.",
            cards: [
                { title: "Kurum İçi Çalışma", text: "Çözümü kurumunuzun kendi altyapısında çalıştırın." },
                { title: "Kontrollü Ağ Erişimi", text: "Erişimi kurumunuzun ağ politikalarına göre yönetin." },
                { title: "Veri Koruma", text: "Hassas toplantı bilgilerini kurumunuzun kontrolünde tutun." },
                { title: "Erişim Yetkilendirmesi", text: "Toplantı kayıtlarına ve analiz sonuçlarına kimlerin erişebileceğini belirleyin." },
            ],
            flow: ["Kurumunuz", "Sia Platformu", "Toplantı Analizi"],
            inside: "KURUMUNUZUN İÇİNDE",
            cloud: "Harici bulut",
            notRequired: "GEREKLİ DEĞİL",
            closingTitle: "Verileriniz üzerindeki kontrol sizde kalır.",
            closingText: "Hassas bilgilerle çalışan kamu kurumları, belediyeler, odalar ve kuruluşlar için tasarlanmış bir çözüm.",
        },
    },
    en: {
        hero: {
            badge: "AI-Powered Meeting Analysis",
            title: ["Make your meetings", "measurable."],
            lead: "Decisions, tasks, and action items are extracted automatically. Everything runs on your own servers, keeping your data within your organization.",
            window: "Sia Meeting Analysis · Weekly Operations Meeting",
            transcriptLabel: "MEETING TRANSCRIPT",
            outputLabel: "AI-GENERATED OUTPUTS",
            transcript: [
                { initials: "AY", text: "We need to complete the project plan by Friday." },
                { initials: "MK", text: "I'll prepare the budget and share it with the team." },
                { initials: "ED", text: "Let's review the latest version at our next meeting." },
            ],
            outputs: [
                { kind: "decision", tag: "DECISION", text: "The project plan will be completed by Friday." },
                { kind: "task", tag: "ACTION ITEM", text: "Prepare the budget and share it with the team." },
                { kind: "note", tag: "NOTE", text: "Review the latest version at the next meeting." },
            ],
            completed: "Analysis completed",
            pills: [
                "Runs on-premises",
                "Your data stays with you",
                "Connects departments",
            ],
            foot: "Software • Artificial Intelligence • Digital Transformation",
        },
        product: {
            eyebrow: "OUR PRODUCT",
            title: "Meeting analysis that turns conversations into outcomes",
            lead: "Sia helps organizations transform meeting conversations into structured decisions, action items, and measurable outcomes.",
            beforeLabel: "BEFORE",
            beforeTitle: "After a meeting...",
            before: [
                "Meeting notes are prepared manually.",
                "Action items can be forgotten.",
                "Tracking decisions can be difficult.",
                "Responsibilities can remain unclear.",
            ],
            afterLabel: "AFTER",
            afterTitle: "After a meeting with Sia...",
            after: [
                "Meeting recordings are analyzed automatically.",
                "Action items are identified and organized.",
                "Decisions are clearly documented.",
                "Managing responsibilities and follow-ups becomes easier.",
            ],
            outputsTitle: "Three key outputs generated automatically",
            outputs: [
                { title: "Decisions", text: "Important decisions are identified and documented." },
                { title: "Action Items", text: "Tasks, responsibilities, and next steps are organized." },
                { title: "Insights", text: "AI transforms meeting conversations into useful insights." },
            ],
            measuresTitle: "What does a measurable meeting look like?",
            measures: [
                { title: "Clarity", text: "Makes decisions and responsibilities easier to understand.", value: 90, color: "#8b9cff" },
                { title: "Follow-up", text: "Track tasks and agreed-upon next steps.", value: 85, color: "#65d6c4" },
                { title: "Efficiency", text: "Reduce the time spent organizing meeting outcomes.", value: 88, color: "#f4bd69" },
            ],
        },
        steps: {
            badge: "HOW IT WORKS? · 03",
            eyebrow: "HOW IT WORKS",
            titleStart: "From conversation",
            titleAccent: "to action in four steps.",
            steps: [
                { title: "Record", text: "Record meeting conversations and discussions." },
                { title: "Transcribe", text: "Turn conversations into searchable text." },
                { title: "Analyze", text: "Identify decisions, tasks, and important information." },
                { title: "Take Action", text: "Share outcomes and track responsibilities." },
            ],
        },
        security: {
            eyebrow: "SECURITY & PRIVACY",
            titleStart: "Your data",
            titleAccent: "stays under your control.",
            lead: "Designed to help organizations manage sensitive meeting information according to their operational processes and security requirements.",
            cards: [
                { title: "On-Premises Operation", text: "Run the solution on your organization's own infrastructure." },
                { title: "Controlled Network Access", text: "Manage access according to your organization's network policies." },
                { title: "Data Protection", text: "Keep sensitive meeting information under your organization's control." },
                { title: "Access Authorization", text: "Determine who can access meeting recordings and analysis results." },
            ],
            flow: ["Your Organization", "Sia Platform", "Meeting Analysis"],
            inside: "WITHIN YOUR ORGANIZATION",
            cloud: "External cloud",
            notRequired: "NOT REQUIRED",
            closingTitle: "You remain in control of your data.",
            closingText: "A solution designed for public institutions, municipalities, chambers, and organizations handling sensitive information.",
        },
    },
};

const HERO_PILLS_ICONS = [FaServer, FaShieldHalved, FaDiagramProject];

export function SiaHero({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const { hero } = t;

    return (
        <section className="sia-hero">
            <div className="sia-hero-art" aria-hidden="true">
                <span className="sia-arc sia-arc-1" />
                <span className="sia-arc sia-arc-2" />
                <span className="sia-dots" />
                <span className="sia-blob" />
            </div>

            <div className="sia-hero-inner">
                <span className="sia-badge">
                    <FaStar />
                    {hero.badge}
                </span>

                <h1>
                    {hero.title.map((line) => (
                        <span className="sia-h1-line" key={line}>{line}</span>
                    ))}
                </h1>

                <p className="sia-lead">{hero.lead}</p>

                <div className="sia-window-wrap">
                    <div className="sia-window">
                        <div className="sia-window-top">
                            <span />
                            <span />
                            <span />
                            <small>{hero.window}</small>
                        </div>

                        <div className="sia-window-body">
                            <div className="sia-col">
                                <small className="sia-col-label">{hero.transcriptLabel}</small>
                                {hero.transcript.map((row) => (
                                    <div className="sia-line" key={row.text}>
                                        <b>{row.initials}</b>
                                        <p>{row.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="sia-col">
                                <small className="sia-col-label">{hero.outputLabel}</small>
                                {hero.outputs.map((o) => (
                                    <div className={`sia-output is-${o.kind}`} key={o.text}>
                                        <span>{o.tag}</span>
                                        <p>{o.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sia-float-pill">
                        <FaCheck />
                        {hero.completed}
                    </div>
                </div>

                <div className="sia-pills">
                    {hero.pills.map((text, i) => {
                        const Icon = HERO_PILLS_ICONS[i];
                        return (
                            <span key={text}>
                                <i><Icon /></i>
                                {text}
                            </span>
                        );
                    })}
                </div>

                <div className="sia-hero-foot">
                    <span>{hero.foot}</span>
                    <a href="https://www.siateknoloji.com" target="_blank" rel="noopener noreferrer">
                        www.siateknoloji.com
                    </a>
                </div>
            </div>
        </section>
    );
}

function Ring({ value, color }) {
    const r = 26;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (value / 100) * circumference;

    return (
        <svg className="sia-ring" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="6" />
            <circle
                cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="6"
                strokeLinecap="round" strokeDasharray={circumference}
                strokeDashoffset={offset} transform="rotate(-90 32 32)"
            />
        </svg>
    );
}

export function SiaProduct({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const p = t.product;

    return (
        <section className="sia-product">
            <span className="sia-big-num" aria-hidden="true">01</span>
            <span className="sia-eyebrow">{p.eyebrow}</span>
            <h2>{p.title}</h2>
            <p className="sia-lead">{p.lead}</p>

            <div className="sia-compare">
                <div className="sia-compare-side">
                    <small>{p.beforeLabel}</small>
                    <h3>{p.beforeTitle}</h3>
                    <ul>
                        {p.before.map((text) => (
                            <li className="is-no" key={text}>{text}</li>
                        ))}
                    </ul>
                </div>

                <div className="sia-compare-side is-after">
                    <small>{p.afterLabel}</small>
                    <h3>{p.afterTitle}</h3>
                    <ul>
                        {p.after.map((text) => (
                            <li className="is-yes" key={text}>{text}</li>
                        ))}
                    </ul>
                </div>

                <span className="sia-compare-arrow" aria-hidden="true"><FaArrowRight /></span>
            </div>

            <h3 className="sia-subhead">{p.outputsTitle}</h3>
            <div className="sia-outputs">
                {[FaGavel, FaSquareCheck, FaBolt].map((Icon, i) => {
                    const output = p.outputs[i];
                    return (
                        <article className="sia-output-card" key={output.title}>
                            <div className="sia-output-icon"><Icon /></div>
                            <h3>{output.title}</h3>
                            <p>{output.text}</p>
                        </article>
                    );
                })}
            </div>

            <div className="sia-measures">
                <h3>{p.measuresTitle}</h3>
                <div className="sia-measure-grid">
                    {p.measures.map((measure) => (
                        <div className="sia-measure" key={measure.title}>
                            <Ring value={measure.value} color={measure.color} />
                            <strong>{measure.title}</strong>
                            <p>{measure.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SiaSteps({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const s = t.steps;
    const icons = [FaMicrophone, FaFileLines, FaStar, FaPaperPlane];

    return (
        <section className="sia-steps">
            <div className="sia-steps-card">
                <div className="sia-steps-art" aria-hidden="true">
                    <span className="sia-steps-arc" />
                    <span className="sia-steps-num">02</span>
                </div>

                <div className="sia-steps-top">
                    <img src={siaLogo} alt="Sia Teknoloji" className="sia-steps-logo" />
                    <span className="sia-steps-badge">{s.badge}</span>
                </div>

                <span className="sia-steps-eyebrow">{s.eyebrow}</span>
                <h2>{s.titleStart} <span>{s.titleAccent}</span></h2>

                <div className="sia-step-grid">
                    {s.steps.map((step, i) => {
                        const Icon = icons[i];
                        return (
                            <article className={`sia-step ${i === 2 ? "is-active" : ""}`} key={step.title}>
                                <div className="sia-step-icon"><Icon /></div>
                                <small>{String(i + 1).padStart(2, "0")}</small>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function SiaSecurity({ language = "tr" }) {
    const t = TEXT[language] || TEXT.tr;
    const s = t.security;
    const cardIcons = [FaServer, FaWifi, FaLock, FaUserShield];

    return (
        <section className="sia-security">
            <div className="sia-security-top">
                <div className="sia-security-text">
                    <span className="sia-eyebrow">{s.eyebrow}</span>
                    <h2>{s.titleStart} <span>{s.titleAccent}</span></h2>
                    <p className="sia-lead">{s.lead}</p>
                </div>

                <div className="sia-shield" aria-hidden="true">
                    <div className="sia-shield-core"><FaShieldHalved /></div>
                </div>
            </div>

            <div className="sia-flow-row">
                <div className="sia-flow-box">
                    <span className="sia-flow-label"><FaBuilding /> {s.inside}</span>
                    <div className="sia-flow">
                        {s.flow.map((item, i) => (
                            <span className="sia-flow-item" key={item}>
                                {i > 0 && <FaArrowRight className="sia-flow-arrow" />}
                                <b className={i === 1 ? "is-core" : ""}>{item}</b>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="sia-flow-no">
                    <FaCloud />
                    <span>{s.cloud}</span>
                    <strong>{s.notRequired}</strong>
                </div>
            </div>

            <div className="sia-security-grid">
                {s.cards.map((card, i) => {
                    const Icon = cardIcons[i];
                    return (
                        <article key={card.title}>
                            <div className="sia-card-icon"><Icon /></div>
                            <div>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="sia-closing">
                <strong>100%</strong>
                <div>
                    <h3>{s.closingTitle}</h3>
                    <p>{s.closingText}</p>
                </div>
            </div>
        </section>
    );
}
