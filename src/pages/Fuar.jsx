
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUsers,
    FaHandshake,
    FaCalendarDays,
    FaIdCard,
    FaBuilding,
    FaRoute,
    FaCircleCheck,
    FaArrowRight,
    FaCheck,
    FaFileLines,
    FaMagnifyingGlass,
    FaShieldHalved,
} from "react-icons/fa6";

import yeniresim from "../assets/yeniresim.png";
import logo7 from "../assets/logo7.png";
import deikLogo from "../assets/deik.png";
import sistemGlobalLogo from "../assets/sistemglobal.png";
import musiadLogo from "../assets/musiad.png";
import tabefLogo from "../assets/tabef.png";
import "./Fuar.css";

const DEMO_URL = "https://demo.beetinq.com/demo";

const TRANSLATIONS = {
    "Fuar, İş Etkinliği ve B2B Yönetim Platformu": "Fair, Business Event and B2B Management Platform",
    "Planlamadan B2B görüşmelere, fuarın tüm süreçleri tek platformda.": "From planning to B2B meetings, manage every stage of your fair on one platform.",
    "B2B görüşme": "B2B meetings",
    "B2B görüşmesi": "B2B meetings",
    "ziyaretçi": "visitors",
    "Katılımcı & Firma Yönetimi": "Participant & Company Management",
    "B2B Eşleştirme & Randevu": "B2B Matching & Meetings",
    "Etkinlik & Fuar Yönetimi": "Event & Fair Management",
    "Raporlama & Analiz": "Reporting & Analytics",
    "Demo Talep Et": "Request a Demo",
    "Yazılım • Yapay Zekâ • Dijital Dönüşüm": "Software • Artificial Intelligence • Digital Transformation",
    "Platform hakkında": "About the Platform",
    "01 · GENEL BAKIŞ": "01 · OVERVIEW",
    "Fuarınızı, iş forumunuzu ve B2B etkinliğinizi tek ekrandan yönetin": "Manage your fair, business forum and B2B event from one screen",
    "Fuar, iş forumu ve B2B etkinlikleri; yüzlerce katılımcının, firmanın, randevunun ve oturumun aynı anda yönetilmesini gerektirir. Sia Teknoloji’nin geliştirdiği bu platform, kayıttan raporlamaya kadar tüm süreçleri tek bir dijital yapıda birleştirir. Organizatörlerin iş yükünü azaltır, katılımcılara ise planlı ve verimli bir etkinlik deneyimi sunar.":
        "Fairs, business forums and B2B events require hundreds of participants, companies, meetings and sessions to be managed simultaneously. Developed by Sia Teknoloji, this platform brings every process together in one digital environment, from registration to reporting. It reduces organizers’ workload and provides participants with an organized and productive event experience.",
    "Hangi sorunları çözer?": "What problems does it solve?",
    "Dağınık kayıtlar, Excel listeleri": "Scattered records and Excel spreadsheets",
    "Tüm katılımcı ve firma verisi tek merkezde": "All participant and company data in one place",
    "Manuel, çakışan randevular": "Manual and conflicting appointments",
    "Doğru firmalar eşleşir, görüşmeler planlı ilerler": "The right companies connect and meetings run according to plan",
    "Program, stant ve oturum karmaşası": "Confusion around schedules, booths and sessions",
    "Etkinliğin tüm akışı tek yerden yönetilir": "The entire event is managed from one place",
    "Etkinlik sonrası ölçülemeyen sonuç": "Results that cannot be measured after the event",
    "Görüşme ve katılım verisi raporlara dönüşür": "Meeting and attendance data becomes actionable reports",
    "temel modül, birbirine bağlı çalışır": "core modules work together",
    "platform; ayrı araçlara, ayrı listelere gerek kalmaz": "platform; no need for separate tools or lists",
    "Uçtan uca": "End to end",
    "planlamadan raporlamaya tüm süreç": "the entire process, from planning to reporting",
    "Platform modülleri": "Platform Modules",
    "Nasıl çalışır?": "How Does It Work?",
    "02 · SÜREÇ AKIŞI": "02 · WORKFLOW",
    "Planlamadan raporlamaya 5 adımda etkinlik": "From planning to reporting in 5 steps",
    "Planlama": "Planning",
    "Etkinlik programı, stant alanları ve oturumlar platformda oluşturulur.": "The event schedule, booth areas and sessions are created on the platform.",
    "Kayıt & Profil": "Registration & Profile",
    "Firmalar ve katılımcılar kayıt olur, profillerini tamamlar, yetkileri tanımlanır.": "Companies and participants register, complete their profiles and receive access permissions.",
    "Firmalar uygun iş ortaklarıyla eşleşir, görüşme randevuları planlanır.": "Companies are matched with suitable business partners and meetings are scheduled.",
    "Etkinlik Günü": "Event Day",
    "Görüşmeler, oturumlar ve fuar akışı planlandığı şekilde ilerler.": "Meetings, sessions and the fair proceed according to plan.",
    "Görüşmeler, katılım ve etkinlik çıktıları ölçülür, raporlanır.": "Meetings, attendance and event outcomes are measured and reported.",
    "03 · HERKES İÇİN KAZANIM": "03 · BENEFITS FOR EVERYONE",
    "Organizatör": "Organizer",
    "Daha az manuel iş, tek panelden tam kontrol ve sorunsuz bir etkinlik yönetimi.": "Less manual work, full control from one dashboard and seamless event management.",
    "Katılımcı Firmalar": "Participating Companies",
    "Doğru iş ortaklarıyla eşleşme, net görüşme programı ve verimli geçen bir etkinlik.": "Connections with the right business partners, a clear meeting schedule and a productive event.",
    "Kurum Yönetimi": "Organization Management",
    "Ölçülebilir sonuçlar, paylaşılabilir raporlar ve sonraki etkinlikler için veri.": "Measurable results, shareable reports and data for future events.",
    "Referanslar": "References",
    "04 · SAHADA KANITLANMIŞ": "04 · PROVEN IN PRACTICE",
    "4.500’den fazla B2B görüşme, tek platformda": "More than 4,500 B2B meetings on one platform",
    "ÖNE ÇIKAN PROJE": "FEATURED PROJECT",
    "Platformu kullanan kurumlar": "Organizations Using the Platform",
    "Binlerce ziyaretçiye hizmet veren, sahada test edilmiş bir altyapı.": "A field-tested infrastructure serving thousands of visitors.",
    "Tüm referanslar": "All References",
    "Başarı hikâyeleri": "Success Stories",
    "05 · ULUSLARARASI ETKİNLİKLER": "05 · INTERNATIONAL EVENTS",
    "İstanbul’dan Azerbaycan’a, sınırları aşan B2B buluşmaları": "B2B connections across borders, from Istanbul to Azerbaijan",
    "Türk ve Afrikalı iş insanlarını buluşturan forumda 2.000’den fazla B2B görüşmesi platform üzerinden gerçekleştirildi.": "More than 2,000 B2B meetings were conducted through the platform at the forum connecting Turkish and African businesspeople.",
    "Türk firmalarını gerçek alıcılarla buluşturmayı amaçlayan forumda 500’den fazla B2B görüşmesi platform üzerinden planlandı ve gerçekleştirildi.": "More than 500 B2B meetings were scheduled and conducted through the platform at the forum, which aimed to connect Turkish companies with buyers.",
    "Katılımcılar görüşmelerini, notlarını ve ajandayı mobil uygulamadan cepten takip eder.": "Participants can track their meetings, notes and agenda using the mobile app.",
    "BİZ KİMİZ?": "WHO WE ARE",
    "Sia Teknoloji; işletmelerin operasyonlarını analiz ederek özel yazılım, yapay zekâ ve dijital dönüşüm çözümleri geliştiren bir teknoloji şirketidir.": "Sia Teknoloji is a technology company that analyzes business operations and develops custom software, artificial intelligence and digital transformation solutions.",
    "Hazır paketler yerine kurumların süreçlerine özel, ölçeklenebilir ve sürdürülebilir yazılımlar geliştirir; proje teslim eden değil, uzun vadeli teknoloji iş ortağı olur.": "Instead of off-the-shelf packages, we develop scalable and sustainable software tailored to each organization’s processes. We aim to be a long-term technology partner, not just a project provider.",
    "Bireysel kullanıcı": "Individual users",
    "Kurum ve iş ortağı": "Organizations and business partners",
    "Aktif ürün ve hizmet": "Active products and services",
    "13+ yıl": "13+ years",
    "Saha tecrübesi": "Industry experience",
    "Referanslarımızdan bazıları": "Some of Our References",
    "Bir sonraki etkinliğiniz için tanışalım.": "Let’s connect for your next event.",
    "Diğer ürünlerimiz: Kurumsal Toplantı Verimlilik Platformu · Kurumsal Strateji Yönetim Platformu": "Our other products: Corporate Meeting Productivity Platform · Corporate Strategy Management Platform",
    "Kurucu": "Founder",
    "Yazılım · Yapay Zekâ · Dijital Dönüşüm": "Software · Artificial Intelligence · Digital Transformation",
    "← Ana Sayfa": "← Home",
    "MODÜL": "MODULE",
    "Kazanım:": "Benefit:",
    "Katılımcı & Firma Yönetimi": "Participant & Company Management",
    "Kayıt, profil, yetkilendirme ve katılımcı süreçleri tek panelde. Etkinliğe katılan her firma ve kişi, ilk başvurudan etkinlik gününe kadar düzenli şekilde yönetilir.": "Registration, profiles, access control and participant processes are managed from one dashboard. Every company and participant is managed from the initial application through event day.",
    "Kolay Kayıt": "Easy Registration",
    "Katılımcı ve firmalar kayıt formlarıyla etkinliğe hızla dahil olur.": "Participants and companies can quickly join the event through registration forms.",
    "Firma & Katılımcı Profili": "Company & Participant Profiles",
    "Sektör, ürün ve ilgi alanı bilgileriyle güçlü profiller oluşur.": "Detailed profiles are created using industry, product and interest information.",
    "Yetkilendirme": "Access Control",
    "Organizatör, firma ve katılımcı rollerine göre erişim tanımlanır.": "Access is assigned according to organizer, company and participant roles.",
    "Katılımcı Süreçleri": "Participant Processes",
    "Başvuru, onay ve bilgilendirme adımları tek yerden takip edilir.": "Applications, approvals and notifications are tracked in one place.",
    "Dağınık listeler yerine güncel, tek bir katılımcı veritabanı.": "One up-to-date participant database instead of scattered lists.",
    "B2B Eşleştirme & Randevu": "B2B Matching & Meetings",
    "Firmaları eşleştirin, görüşme ve randevuları planlayın. Doğru firmalar doğru zamanda bir araya gelir; etkinlik gerçek iş bağlantılarına dönüşür.": "Match companies and schedule meetings. The right companies connect at the right time, turning the event into real business opportunities.",
    "Firma Eşleştirme": "Company Matching",
    "Firmalar, profil ve ilgi alanlarına göre uygun iş ortaklarıyla buluşur.": "Companies connect with suitable business partners based on their profiles and interests.",
    "Randevu Talebi & Onay": "Meeting Request & Approval",
    "Firmalar görüşme talebi gönderir, taraflar onaylayarak randevu kesinleşir.": "Companies request meetings, and appointments are confirmed once both sides approve.",
    "Görüşme Planlama": "Meeting Scheduling",
    "Gün, saat ve yer bilgisiyle B2B görüşme takvimi oluşturulur.": "A B2B meeting schedule is created with dates, times and locations.",
    "Net Program": "Clear Schedule",
    "Her firma kendi görüşme programını görür, zaman verimli kullanılır.": "Each company can view its own meeting schedule and use its time efficiently.",
    "Daha çok ve daha nitelikli iş görüşmesi.": "More business meetings with better outcomes.",
    "Etkinlik & Fuar Yönetimi": "Event & Fair Management",
    "Program, stant, oturum ve etkinlik süreçlerini tek yerden yönetin. Hazırlık aşamasından etkinlik gününe kadar tüm akış görünür ve kontrol altında olur.": "Manage schedules, booths, sessions and event processes from one place. Keep everything visible and under control from preparation through event day.",
    "Program Yönetimi": "Schedule Management",
    "Günler, saatler ve etkinlik akışı tek bir takvimde planlanır.": "Days, times and event activities are planned in one calendar.",
    "Stant Yönetimi": "Booth Management",
    "Stant alanları ve stant sahibi firmalar düzenli şekilde takip edilir.": "Booth areas and the companies assigned to them are tracked systematically.",
    "Oturum Yönetimi": "Session Management",
    "Panel, sunum ve oturumların içerik, saat ve konuşmacı bilgileri yönetilir.": "Content, timing and speaker details for panels, presentations and sessions are managed.",
    "Etkinlik Süreçleri": "Event Processes",
    "Hazırlıktan kapanışa kadar tüm adımlar tek panelden izlenir.": "Every step, from preparation to closing, is monitored from one dashboard.",
    "Karmaşa yerine planlı, düzenli ve profesyonel bir etkinlik.": "A planned, organized and professional event instead of confusion.",
    "Raporlama & Analiz": "Reporting & Analytics",
    "Görüşmeleri, katılımı ve etkinlik çıktılarını ölçümleyin. Etkinliğin başarısı tahminle değil, verilerle ortaya konur.": "Measure meetings, attendance and event outcomes. Event success is demonstrated through data, not guesswork.",
    "Görüşme Raporları": "Meeting Reports",
    "Gerçekleşen B2B görüşmeler ve randevu sonuçları raporlanır.": "Completed B2B meetings and appointment outcomes are reported.",
    "Katılım Analizi": "Attendance Analysis",
    "Katılımcı ve firma katılımı ölçülür, ilgi yoğunluğu görülür.": "Participant and company attendance is measured, revealing levels of interest.",
    "Etkinlik Çıktıları": "Event Outcomes",
    "Etkinliğin sonuçları kurum ve paydaşlarla paylaşılabilir hale gelir.": "Event results can be shared with organizations and stakeholders.",
    "Sonraki Etkinliğe Yol Haritası": "Roadmap for the Next Event",
    "Elde edilen veriler, bir sonraki etkinliğin planlamasına ışık tutar.": "The collected data helps guide planning for the next event.",
    "Ölçülebilir, raporlanabilir etkinlik başarısı.": "Measurable and reportable event success.",
    "Türkiye–Afrika İş ve Ekonomi Forumu (TABEF)": "Türkiye–Africa Business and Economic Forum (TABEF)",
    "Azerbaycan – Türkiye İş Forumu": "Azerbaijan–Türkiye Business Forum",
    "16–17 Ekim 2025 · İstanbul Kongre Merkezi (ICC)": "16–17 October 2025 · Istanbul Congress Center (ICC)",
    "11 Şubat 2026 · AIM – Azerbaijan Innovation Center": "11 February 2026 · AIM – Azerbaijan Innovation Center",
    "50.000+ ziyaretçi · 2.000+ B2B görüşme": "50,000+ visitors · 2,000+ B2B meetings",
    "Dış Ekonomik İlişkiler Kurulu · Platform kullanıcısı": "Foreign Economic Relations Board · Platform user",
    "Platform kullanıcısı": "Platform user",
    "DEİK – Dış Ekonomik İlişkiler Kurulu": "DEİK – Foreign Economic Relations Board",
    "Elazığ Ticaret ve Sanayi Odası": "Elazığ Chamber of Commerce and Industry",
    "Elazığ Ticaret Borsası": "Elazığ Commodity Exchange",
    "Elazığ Belediyesi": "Elazığ Municipality",
    "Müstakil Fuar Organizasyon": "Independent Fair Organization",
    "Fırat Üniversitesi": "Fırat University",
    "Fırat Teknokent": "Fırat Technopark",
    "Safa Merve Taşcı": "Safa Merve Taşcı",
    "Sia Teknoloji Ltd. Şti.": "Sia Teknoloji Ltd.",
};

function translateValue(value, lang) {
    if (lang !== "en") return value;

    if (typeof value === "string") {
        return TRANSLATIONS[value] || value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => translateValue(item, lang));
    }

    if (
        value &&
        typeof value === "object" &&
        !React.isValidElement(value)
    ) {
        const translated = {};

        for (const [key, item] of Object.entries(value)) {
            translated[key] = translateValue(item, lang);
        }

        return translated;
    }

    return value;
}

function Translate({ lang, children }) {
    function translateNode(node) {
        if (typeof node === "string") {
            return translateValue(node, lang);
        }

        if (Array.isArray(node)) {
            return node.map((item, index) => (
                <React.Fragment key={index}>
                    {translateNode(item)}
                </React.Fragment>
            ));
        }

        if (!React.isValidElement(node)) {
            return node;
        }

        const props = {};

        for (const [key, value] of Object.entries(node.props)) {
            if (key === "children") {
                props.children = translateNode(value);
            } else if (key === "className" || key === "style") {
                props[key] = value;
            } else {
                props[key] = translateValue(value, lang);
            }
        }

        return React.cloneElement(node, props);
    }

    return <>{translateNode(children)}</>;
}

const PROBLEMS = [
    {
        old: "Dağınık kayıtlar, Excel listeleri",
        solution: "Tüm katılımcı ve firma verisi tek merkezde",
    },
    {
        old: "Manuel, çakışan randevular",
        solution: "Doğru firmalar eşleşir, görüşmeler planlı ilerler",
    },
    {
        old: "Program, stant ve oturum karmaşası",
        solution: "Etkinliğin tüm akışı tek yerden yönetilir",
    },
    {
        old: "Etkinlik sonrası ölçülemeyen sonuç",
        solution: "Görüşme ve katılım verisi raporlara dönüşür",
    },
];

const OVERVIEW_STATS = [
    { value: "4", label: "temel modül, birbirine bağlı çalışır" },
    {
        value: "1",
        label: "platform; ayrı araçlara, ayrı listelere gerek kalmaz",
    },
    {
        value: "Uçtan uca",
        label: "planlamadan raporlamaya tüm süreç",
        wide: true,
    },
];

const MODULES = [
    {
        no: "01",
        title: "Katılımcı & Firma Yönetimi",
        text: "Kayıt, profil, yetkilendirme ve katılımcı süreçleri tek panelde. Etkinliğe katılan her firma ve kişi, ilk başvurudan etkinlik gününe kadar düzenli şekilde yönetilir.",
        cards: [
            {
                icon: FaIdCard,
                title: "Kolay Kayıt",
                text: "Katılımcı ve firmalar kayıt formlarıyla etkinliğe hızla dahil olur.",
            },
            {
                icon: FaBuilding,
                title: "Firma & Katılımcı Profili",
                text: "Sektör, ürün ve ilgi alanı bilgileriyle güçlü profiller oluşur.",
            },
            {
                icon: FaUsers,
                title: "Yetkilendirme",
                text: "Organizatör, firma ve katılımcı rollerine göre erişim tanımlanır.",
            },
            {
                icon: FaRoute,
                title: "Katılımcı Süreçleri",
                text: "Başvuru, onay ve bilgilendirme adımları tek yerden takip edilir.",
            },
        ],
        gain: "Dağınık listeler yerine güncel, tek bir katılımcı veritabanı.",
    },
    {
        no: "02",
        title: "B2B Eşleştirme & Randevu",
        text: "Firmaları eşleştirin, görüşme ve randevuları planlayın. Doğru firmalar doğru zamanda bir araya gelir; etkinlik gerçek iş bağlantılarına dönüşür.",
        cards: [
            {
                icon: FaHandshake,
                title: "Firma Eşleştirme",
                text: "Firmalar, profil ve ilgi alanlarına göre uygun iş ortaklarıyla buluşur.",
            },
            {
                icon: FaCalendarDays,
                title: "Randevu Talebi & Onay",
                text: "Firmalar görüşme talebi gönderir, taraflar onaylayarak randevu kesinleşir.",
            },
            {
                icon: FaCalendarDays,
                title: "Görüşme Planlama",
                text: "Gün, saat ve yer bilgisiyle B2B görüşme takvimi oluşturulur.",
            },
            {
                icon: FaFileLines,
                title: "Net Program",
                text: "Her firma kendi görüşme programını görür, zaman verimli kullanılır.",
            },
        ],
        gain: "Daha çok ve daha nitelikli iş görüşmesi.",
    },
    {
        no: "03",
        title: "Etkinlik & Fuar Yönetimi",
        text: "Program, stant, oturum ve etkinlik süreçlerini tek yerden yönetin. Hazırlık aşamasından etkinlik gününe kadar tüm akış görünür ve kontrol altında olur.",
        cards: [
            {
                icon: FaCalendarDays,
                title: "Program Yönetimi",
                text: "Günler, saatler ve etkinlik akışı tek bir takvimde planlanır.",
            },
            {
                icon: FaBuilding,
                title: "Stant Yönetimi",
                text: "Stant alanları ve stant sahibi firmalar düzenli şekilde takip edilir.",
            },
            {
                icon: FaUsers,
                title: "Oturum Yönetimi",
                text: "Panel, sunum ve oturumların içerik, saat ve konuşmacı bilgileri yönetilir.",
            },
            {
                icon: FaRoute,
                title: "Etkinlik Süreçleri",
                text: "Hazırlıktan kapanışa kadar tüm adımlar tek panelden izlenir.",
            },
        ],
        gain: "Karmaşa yerine planlı, düzenli ve profesyonel bir etkinlik.",
    },
    {
        no: "04",
        title: "Raporlama & Analiz",
        text: "Görüşmeleri, katılımı ve etkinlik çıktılarını ölçümleyin. Etkinliğin başarısı tahminle değil, verilerle ortaya konur.",
        cards: [
            {
                icon: FaHandshake,
                title: "Görüşme Raporları",
                text: "Gerçekleşen B2B görüşmeler ve randevu sonuçları raporlanır.",
            },
            {
                icon: FaUsers,
                title: "Katılım Analizi",
                text: "Katılımcı ve firma katılımı ölçülür, ilgi yoğunluğu görülür.",
            },
            {
                icon: FaFileLines,
                title: "Etkinlik Çıktıları",
                text: "Etkinliğin sonuçları kurum ve paydaşlarla paylaşılabilir hale gelir.",
            },
            {
                icon: FaRoute,
                title: "Sonraki Etkinliğe Yol Haritası",
                text: "Elde edilen veriler, bir sonraki etkinliğin planlamasına ışık tutar.",
            },
        ],
        gain: "Ölçülebilir, raporlanabilir etkinlik başarısı.",
    },
];

const STEPS = [
    {
        title: "Planlama",
        text: "Etkinlik programı, stant alanları ve oturumlar platformda oluşturulur.",
    },
    {
        title: "Kayıt & Profil",
        text: "Firmalar ve katılımcılar kayıt olur, profillerini tamamlar, yetkileri tanımlanır.",
    },
    {
        title: "B2B Eşleştirme & Randevu",
        text: "Firmalar uygun iş ortaklarıyla eşleşir, görüşme randevuları planlanır.",
    },
    {
        title: "Etkinlik Günü",
        text: "Görüşmeler, oturumlar ve fuar akışı planlandığı şekilde ilerler.",
    },
    {
        title: "Raporlama & Analiz",
        text: "Görüşmeler, katılım ve etkinlik çıktıları ölçülür, raporlanır.",
    },
];

const AUDIENCES = [
    {
        title: "Organizatör",
        text: "Daha az manuel iş, tek panelden tam kontrol ve sorunsuz bir etkinlik yönetimi.",
    },
    {
        title: "Katılımcı Firmalar",
        text: "Doğru iş ortaklarıyla eşleşme, net görüşme programı ve verimli geçen bir etkinlik.",
    },
    {
        title: "Kurum Yönetimi",
        text: "Ölçülebilir sonuçlar, paylaşılabilir raporlar ve sonraki etkinlikler için veri.",
    },
];

const STORIES = [
    {
        org: "DEİK",
        title: "Türkiye–Afrika İş ve Ekonomi Forumu (TABEF)",
        meta: "16–17 Ekim 2025 · İstanbul Kongre Merkezi (ICC)",
        stat: "2.000+",
        statLabel: "B2B görüşmesi",
        text: "Türk ve Afrikalı iş insanlarını buluşturan forumda 2.000’den fazla B2B görüşmesi platform üzerinden gerçekleştirildi.",
        logo: tabefLogo,
        logoAlt: "TABEF",
    },
    {
        org: "Sistem Global · IDDA · TÜBİSAD",
        title: "Azerbaycan – Türkiye İş Forumu",
        meta: "11 Şubat 2026 · AIM – Azerbaijan Innovation Center",
        stat: "500+",
        statLabel: "B2B görüşmesi",
        text: "Türk firmalarını gerçek alıcılarla buluşturmayı amaçlayan forumda 500’den fazla B2B görüşmesi platform üzerinden planlandı ve gerçekleştirildi.",
        logo: sistemGlobalLogo,
        logoAlt: "Sistem Global",
    },
];

const REFERENCE_CARDS = [
    {
        name: "DEİK",
        logo: deikLogo,
        text: "Dış Ekonomik İlişkiler Kurulu · Platform kullanıcısı",
    },
    {
        name: "Sistem Global",
        logo: sistemGlobalLogo,
        text: "Platform kullanıcısı",
    },
    {
        name: "MÜSİAD EXPO 2026",
        logo: musiadLogo,
        text: "50.000+ ziyaretçi · 2.000+ B2B görüşme",
    },
];

const REFERENCES = [
    "DEİK – Dış Ekonomik İlişkiler Kurulu",
    "Elazığ Ticaret ve Sanayi Odası",
    "Elazığ Ticaret Borsası",
    "Elazığ Belediyesi",
    "Müstakil Fuar Organizasyon",
    "Sistem Global",
    "Fırat Üniversitesi",
    "Fırat Teknokent",
];

const STATS = [
    { value: "250.000+", label: "Bireysel kullanıcı" },
    { value: "100+", label: "Kurum ve iş ortağı" },
    { value: "50+", label: "Aktif ürün ve hizmet" },
    { value: "13+ yıl", label: "Saha tecrübesi" },
];

function PageBar({ title }) {
    return (
        <div className="fr-bar">
            <h2 className="fr-bar-title">{title}</h2>
        </div>
    );
}

export default function Fuar() {
    const [lang, setLang] = useState("tr");

    return (
        <Translate lang={lang}>
            <div className="fr-page">
                <section className="fr-cover">
                    <div className="fr-cover-top">
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 64,
                                padding: "8px 12px",
                                borderRadius: 12,
                                background: "#ffffff",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={logo7}
                                alt="B2Meet"
                                style={{
                                    display: "block",
                                    height: 48,
                                    width: "auto",
                                    maxWidth: 180,
                                    objectFit: "contain",
                                }}
                            />
                        </div>

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
                    </div>

                    <div className="fr-cover-body">
                        <h1>Fuar, İş Etkinliği ve B2B Yönetim Platformu</h1>
                        <p className="fr-cover-lead">
                            Planlamadan B2B görüşmelere, fuarın tüm süreçleri tek platformda.
                        </p>

                        <div className="fr-cover-stats">
                            <div>
                                <strong>5.000+</strong>
                                <span>B2B görüşme</span>
                            </div>
                            <div>
                                <strong>50.000+</strong>
                                <span>ziyaretçi</span>
                            </div>
                        </div>

                        <div className="fr-cover-grid">
                            <span>Katılımcı & Firma Yönetimi</span>
                            <span>B2B Eşleştirme & Randevu</span>
                            <span>Etkinlik & Fuar Yönetimi</span>
                            <span>Raporlama & Analiz</span>
                        </div>

                        <a
                            href={DEMO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fr-demo-btn"
                        >
                            Demo Talep Et <FaArrowRight />
                        </a>
                    </div>

                    <div className="fr-cover-foot">
                        <span>Yazılım • Yapay Zekâ • Dijital Dönüşüm</span>
                        <span>www.siateknoloji.com</span>
                    </div>
                </section>

                <section className="fr-section">
                    <PageBar title="Platform hakkında" />
                    <div className="fr-body">
                        <span className="fr-kicker">01 · GENEL BAKIŞ</span>
                        <h2 className="fr-title">
                            Fuarınızı, iş forumunuzu ve B2B etkinliğinizi tek ekrandan yönetin
                        </h2>
                        <p className="fr-intro">
                            Fuar, iş forumu ve B2B etkinlikleri; yüzlerce katılımcının, firmanın, randevunun ve oturumun aynı anda yönetilmesini gerektirir. Sia Teknoloji’nin geliştirdiği bu platform, kayıttan raporlamaya kadar tüm süreçleri tek bir dijital yapıda birleştirir. Organizatörlerin iş yükünü azaltır, katılımcılara ise planlı ve verimli bir etkinlik deneyimi sunar.
                        </p>

                        <div className="fr-panel">
                            <h3>Hangi sorunları çözer?</h3>
                            <div className="fr-problem-grid">
                                {PROBLEMS.map((p) => (
                                    <article className="fr-problem" key={p.old}>
                                        <p className="fr-problem-old">{p.old}</p>
                                        <p className="fr-problem-new">{p.solution}</p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="fr-overview-stats">
                            {OVERVIEW_STATS.map((s) => (
                                <div
                                    className={`fr-overview-stat ${s.wide ? "is-wide" : ""}`}
                                    key={s.value}
                                >
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fr-section">
                    <PageBar title="Platform modülleri" />
                    <div className="fr-body">
                        {MODULES.slice(0, 2).map((m) => (
                            <ModuleBlock key={m.no} m={m} />
                        ))}
                    </div>
                </section>

                <section className="fr-section">
                    <PageBar title="Platform modülleri" />
                    <div className="fr-body">
                        {MODULES.slice(2).map((m) => (
                            <ModuleBlock key={m.no} m={m} />
                        ))}
                    </div>
                </section>

                <section className="fr-section">
                    <PageBar title="Nasıl çalışır?" />
                    <div className="fr-body">
                        <span className="fr-kicker">02 · SÜREÇ AKIŞI</span>
                        <h2 className="fr-title">
                            Planlamadan raporlamaya 5 adımda etkinlik
                        </h2>

                        <div className="fr-steps">
                            {STEPS.map((s, i) => (
                                <div
                                    className={`fr-step ${i === 2 ? "is-active" : ""}`}
                                    key={s.title}
                                >
                                    <span className="fr-step-num">{i + 1}</span>
                                    <div>
                                        <h4>{s.title}</h4>
                                        <p>{s.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <span className="fr-kicker fr-kicker-spaced">
                            03 · HERKES İÇİN KAZANIM
                        </span>

                        <div className="fr-audience-grid">
                            {AUDIENCES.map((a) => (
                                <article className="fr-audience" key={a.title}>
                                    <h4>{a.title}</h4>
                                    <p>{a.text}</p>
                                </article>
                            ))}
                        </div>

                        <div className="fr-banner">
                            <FaMagnifyingGlass />
                            <p>
                                Planlamadan B2B görüşmelere, fuarın tüm süreçleri tek platformda.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="fr-section">
                    <PageBar title="Referanslar" />
                    <div className="fr-body">
                        <span className="fr-kicker">04 · SAHADA KANITLANMIŞ</span>
                        <h2 className="fr-title">
                            4.500’den fazla B2B görüşme, tek platformda
                        </h2>

                        <div className="fr-highlight">
                            <span className="fr-highlight-tag">ÖNE ÇIKAN PROJE</span>
                            <h3>MÜSİAD EXPO 2026</h3>

                            <div className="fr-highlight-stats">
                                <div>
                                    <strong>50.000+</strong>
                                    <span>ziyaretçi</span>
                                </div>
                                <div>
                                    <strong>2.000+</strong>
                                    <span>B2B görüşme</span>
                                </div>
                            </div>

                            <p>
                                MÜSİAD EXPO 2026’da 50.000’den fazla ziyaretçinin dijital altyapısı Sia Teknoloji’nin platformu ile yönetildi; fuarda 2.000’den fazla B2B görüşme gerçekleşti.
                            </p>
                        </div>

                        <h3 className="fr-subhead">Platformu kullanan kurumlar</h3>
                        <div className="fr-ref-grid">
                            {REFERENCE_CARDS.map((r) => (
                                <article className="fr-ref-card" key={r.name}>
                                    <div className="fr-ref-logo-wrap">
                                        <img
                                            src={r.logo}
                                            alt={r.name}
                                            className="fr-ref-logo"
                                        />
                                    </div>
                                    <strong>{r.name}</strong>
                                    <span>{r.text}</span>
                                </article>
                            ))}
                        </div>

                        <div className="fr-banner fr-banner-soft">
                            <FaShieldHalved />
                            <p>
                                Binlerce ziyaretçiye hizmet veren, sahada test edilmiş bir altyapı.
                            </p>
                        </div>

                        <h3 className="fr-subhead">Tüm referanslar</h3>
                        <div className="fr-chips">
                            {REFERENCES.map((r) => (
                                <span key={r}>{r}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fr-section">
                    <PageBar title="Başarı hikâyeleri" />
                    <div className="fr-body">
                        <span className="fr-kicker">05 · ULUSLARARASI ETKİNLİKLER</span>
                        <h2 className="fr-title">
                            İstanbul’dan Azerbaycan’a, sınırları aşan B2B buluşmaları
                        </h2>

                        <div className="fr-story-list">
                            {STORIES.map((s, i) => (
                                <article
                                    className={`fr-story ${i === 0 ? "is-dark" : "is-light"}`}
                                    key={s.title}
                                >
                                    <div className="fr-story-logo">
                                        <img src={s.logo} alt={s.logoAlt} />
                                    </div>
                                    <div className="fr-story-content">
                                        <span className="fr-story-org">{s.org}</span>
                                        <h3>{s.title}</h3>
                                        <small>{s.meta}</small>
                                        <div className="fr-story-stat">
                                            <strong>{s.stat}</strong>
                                            <span>{s.statLabel}</span>
                                        </div>
                                        <p>{s.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="fr-banner">
                            <FaCircleCheck />
                            <p>
                                Katılımcılar görüşmelerini, notlarını ve ajandayı mobil uygulamadan cepten takip eder.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="fr-why">
                    <div className="fr-why-body">
                        <img
                            src={yeniresim}
                            alt="Sia Teknoloji"
                            className="fr-why-logo"
                        />

                        <span className="fr-kicker light">BİZ KİMİZ?</span>

                        <h2>
                            Sia Teknoloji; işletmelerin operasyonlarını analiz ederek özel yazılım, yapay zekâ ve dijital dönüşüm çözümleri geliştiren bir teknoloji şirketidir.
                        </h2>

                        <p className="fr-why-lead">
                            Hazır paketler yerine kurumların süreçlerine özel, ölçeklenebilir ve sürdürülebilir yazılımlar geliştirir; proje teslim eden değil, uzun vadeli teknoloji iş ortağı olur.
                        </p>

                        <div className="fr-why-stats">
                            {STATS.map((s) => (
                                <div key={s.label}>
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="fr-why-refs">
                            <h4>Referanslarımızdan bazıları</h4>
                            <ul>
                                {REFERENCES.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <h3 className="fr-why-cta">
                            Bir sonraki etkinliğiniz için tanışalım.
                        </h3>

                        <p className="fr-why-other">
                            Diğer ürünlerimiz: Kurumsal Toplantı Verimlilik Platformu · Kurumsal Strateji Yönetim Platformu
                        </p>

                        <div className="fr-contacts">
                            <article className="fr-contact-light">
                                <strong>Safa Merve Taşcı</strong>
                                <small>Kurucu</small>
                                <a href="tel:+905385036133">+90 538 503 6133</a>
                                <a href="mailto:safa@siateknoloji.com">
                                    safa@siateknoloji.com
                                </a>
                            </article>

                            <article className="fr-contact-dark">
                                <strong>Sia Teknoloji Ltd. Şti.</strong>
                                <small>Yazılım · Yapay Zekâ · Dijital Dönüşüm</small>
                                <a href="tel:+905321707428">+90 532 170 7428</a>
                                <a href="mailto:info@siateknoloji.com">
                                    info@siateknoloji.com
                                </a>
                                <a
                                    href="https://www.siateknoloji.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.siateknoloji.com
                                </a>
                            </article>
                        </div>

                        <a
                            href={DEMO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fr-demo-btn fr-demo-btn-light"
                        >
                            Demo Talep Et <FaArrowRight />
                        </a>
                    </div>

                    <div className="fr-why-foot">
                        <span>Fuar, İş Etkinliği ve B2B Yönetim Platformu</span>
                        <Link to="/">← Ana Sayfa</Link>
                    </div>
                </section>
            </div>
        </Translate>
    );
}

function ModuleBlock({ m }) {
    return (
        <div className="fr-module">
            <div className="fr-module-head">
                <span className="fr-module-badge">MODÜL {m.no}</span>
                <h2>{m.title}</h2>
            </div>

            <p className="fr-intro">{m.text}</p>

            <div className="fr-module-grid">
                {m.cards.map((c) => {
                    const Icon = c.icon;

                    return (
                        <article className="fr-module-card" key={c.title}>
                            <h4>
                                <Icon /> {c.title}
                            </h4>
                            <p>{c.text}</p>
                        </article>
                    );
                })}
            </div>

            <p className="fr-gain">
                <FaCheck /> <strong>Kazanım:</strong> {m.gain}
            </p>
        </div>
    );
}
