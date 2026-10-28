import { useLang } from "./LangContext.jsx";
import "./LangSwitch.css";

export default function LangSwitch() {
    const { lang, setLang } = useLang();

    return (
        <div className="lang-switch" role="group" aria-label="Dil seçimi">
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
    );
}