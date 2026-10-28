import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ children }) {
    const [lang, setLang] = useState(() => localStorage.getItem("lang") || "tr");

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}