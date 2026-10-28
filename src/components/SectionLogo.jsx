import yeniresim from "../assets/yeniresim.png";
import yeniresim2 from "../assets/yeniresim2.jpg";

const LOGOS = {
    primary: yeniresim,
    secondary: yeniresim2,
};

export default function SectionLogo({ dark = false, variant = "primary" }) {
    return (
        <img
            src={LOGOS[variant]}
            alt=""
            aria-hidden="true"
            className={`section-logo ${dark ? "is-dark" : ""}`}
        />
    );
}