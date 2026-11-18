import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import "./styles/Contact.css";

const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{t.contact.title}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mail.rahulappala@gmail.com" data-cursor="disable">
                mail.rahulappala@gmail.com
              </a>
            </p>
            <h4>{t.contact.phoneLabel}</h4>
            <p>
              <a href="tel:+4917683342097" data-cursor="disable">
                +49 (0)176 83342097
              </a>
            </p>
            <h4>{t.contact.locationLabel}</h4>
            <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "4px" }}>
              {lang === "de" ? "Grevenbroich, Deutschland" : "Grevenbroich, Germany"}
              <br />
              <span style={{ fontSize: "13px", color: "#38bdf8", lineHeight: "1.6", display: "inline-block", marginTop: "4px" }}>
                {lang === "de"
                  ? "Unbefristeter Aufenthaltstitel (Deutschland) • Umzugsbereit • Führerschein - Klasse B"
                  : "German permanent residence • Open to relocation • Driving License - Class B"}
              </span>
            </p>
          </div>
          <div className="contact-box">
            <h4>{t.contact.letsConnect}</h4>
            <a
              href="mailto:mail.rahulappala@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              {lang === "de" ? "Direkt per E-Mail" : "Email Direct"} <MdArrowOutward />
            </a>
            <a
              href="tel:+4917683342097"
              data-cursor="disable"
              className="contact-social"
            >
              {lang === "de" ? "Anrufen +4917683342097" : "Call +4917683342097"} <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-appala"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn Profile <MdArrowOutward />
            </a>
            <a
              href="https://www.xing.com/profile/Rahul_Appala/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              XING Profil <MdArrowOutward />
            </a>
            <a
              href="https://github.com/rahulappala"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <div style={{ marginTop: "16px", fontSize: "14px", color: "#cbd5e1" }}>
              <strong>{lang === "de" ? "Sprachen:" : "Languages:"}</strong>{" "}
              {lang === "de" ? "Deutsch (C1) • Englisch (C1)" : "German (C1) • English (C1)"}
            </div>
            <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#94a3b8", marginBottom: "8px", fontWeight: 600 }}>
                {t.cvDownload.contactDownloadLabel}
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="/CV_Rahul_Appala_EN.pdf"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                  style={{ fontSize: "13px", padding: "6px 12px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                >
                  🇬🇧 English CV <MdArrowOutward />
                </a>
                <a
                  href="/Lebenslauf_Rahul_Appala_DE.pdf"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                  style={{ fontSize: "13px", padding: "6px 12px", background: "rgba(167, 139, 250, 0.08)", borderRadius: "8px", border: "1px solid rgba(167, 139, 250, 0.25)", color: "#c4b5fd" }}
                >
                  🇩🇪 Deutscher Lebenslauf <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              {lang === "de" ? "Technische Implementierung" : "Technical Implementation"} <br />
              {lang === "de" ? "& BI-Architekt" : "& BI Architect"} <br />
              <span>Rahul Appala</span>
            </h2>
            <h5>
              <MdCopyright /> {t.contact.footerText}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
