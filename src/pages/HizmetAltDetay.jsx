import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { hizmetler } from "./HizmetDetay.jsx";
import { HIZMET_ALT, slugify } from "../data/hizmetAlt.js";
import { ARTICLES } from "../data/articles.js";
import ServiceArticle from "../components/ServiceArticle.jsx";
import "./HizmetDetay.css";
import "./HizmetAltDetay.css";

const ARTICLE_FOR_PAGE = {
    "ui-ux/kullanici-deneyimi": "ux-research",
    "ui-ux/wireframe": "wireframe",
    "ui-ux/prototip": "prototip",
    "ui-ux/responsive-tasarim": "responsive",
    "ui-ux/modern-web-arayuzleri": "modern-web-arayuzleri",

    "frontend/react-js": "react-js",
    "frontend/javascript": "javascript",
    "frontend/api-entegrasyonu": "api-entegrasyonu",
    "frontend/performans-optimizasyonu": "performans-optimizasyonu",
    "frontend/responsive-development": "responsive-development",

    "responsive/responsive-web": "responsive-web",
    "responsive/mobil-uyumluluk": "mobil-uyumluluk",
    "responsive/dijital-urunler": "dijital-urunler",
    "responsive/kullanici-deneyimi": "kullanici-deneyimi",
    "responsive/performans": "performans",
    "responsive/ozel-cozumler": "ozel-cozumler",
};

export default function HizmetAltDetay() {
    const { hizmet, alt } = useParams();
    const service = hizmetler[hizmet];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [hizmet, alt]);

    if (!service) return <Navigate to="/" replace />;

    const item = (service.services ?? []).find((s) => slugify(s) === alt);
    if (!item) return <Navigate to={`/hizmetler/${hizmet}`} replace />;

    const articleKey = ARTICLE_FOR_PAGE[`${hizmet}/${alt}`];
    const article = articleKey ? ARTICLES[articleKey] : null;
    const detail = HIZMET_ALT[hizmet]?.[item];
    const others = (service.services ?? []).filter((s) => s !== item);

    return (
        <div className="service-page">
            <nav className="service-navbar">
                <Link to="/" className="service-logo">
                    Beetinq<span>.</span>
                </Link>

                <div className="service-nav-center">
                    <span>HİZMET</span>
                    <strong>{service.number}</strong>
                </div>

                <Link to={`/hizmetler/${hizmet}`} className="service-back">
                    ← {service.title}
                </Link>
            </nav>

            <main>
                {article ? (
                    <div className="alt-article">
                        <ServiceArticle article={article} />
                    </div>
                ) : (
                    <>
                        <section className="alt-hero">
                            <span className="alt-eyebrow">{service.category}</span>

                            <h1>
                                {item}
                                <span>.</span>
                            </h1>

                            <p className="alt-lead">{detail?.intro ?? service.description}</p>
                        </section>

                        <section className="alt-body">
                            {detail ? (
                                <div className="alt-points">
                                    {detail.points.map((point, i) => (
                                        <article className="alt-point" key={point}>
                                            <span>{String(i + 1).padStart(2, "0")}</span>
                                            <h3>{point}</h3>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <p className="alt-fallback">{service.about}</p>
                            )}
                        </section>
                    </>
                )}

                {others.length > 0 && (
                    <section className="alt-related">
                        <span className="alt-eyebrow">DİĞER HİZMETLER</span>

                        <div className="alt-related-list">
                            {others.map((o) => (
                                <Link key={o} to={`/hizmetler/${hizmet}/${slugify(o)}`}>
                                    {o} ↗
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <footer className="service-footer">
                <Link to="/" className="service-logo">
                    Beetinq<span>.</span>
                </Link>

                <p>© 2026 Beetinq. Tüm hakları saklıdır.</p>

                <Link to={`/hizmetler/${hizmet}`}>{service.title} ↗</Link>
            </footer>
        </div>
    );
} 