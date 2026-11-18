import {
  FaGithub,
  FaLinkedinIn,
  FaXing,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { MdArrowOutward, MdClose } from "react-icons/md";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HoverLinks from "./HoverLinks";
import { useLanguage } from "../context/LanguageContext";

const SocialIcons = () => {
  const { t } = useLanguage();
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCvModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isCvModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCvModalOpen]);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/rahulappala" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/rahul-appala" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.xing.com/profile/Rahul_Appala/" target="_blank" rel="noreferrer" title="Xing">
            <FaXing />
          </a>
        </span>
        <span>
          <a href="tel:+4917683342097" title="Call +4917683342097">
            <FaPhone />
          </a>
        </span>
        <span>
          <a href="mailto:mail.rahulappala@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </span>
      </div>
      <button
        type="button"
        className="resume-button"
        onClick={() => setIsCvModalOpen(true)}
        aria-label="Download CV / Lebenslauf"
        data-cursor="pointer"
      >
        <HoverLinks text={t.social.resume} />
        <span>
          <TbNotes />
        </span>
      </button>

      {isCvModalOpen &&
        createPortal(
          <div
            className="cv-modal-backdrop"
            onClick={() => setIsCvModalOpen(false)}
          >
            <div
              className="cv-modal-box"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="cv-modal-header">
                <div className="cv-modal-header-text">
                  <h3>{t.cvDownload.title}</h3>
                  <p>{t.cvDownload.subtitle}</p>
                </div>
                <button
                  type="button"
                  className="cv-modal-close-icon"
                  onClick={() => setIsCvModalOpen(false)}
                  aria-label={t.cvDownload.close}
                >
                  <MdClose />
                </button>
              </div>

              <div className="cv-options-list">
                <a
                  href="/CV_Rahul_Appala_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-option-card"
                  onClick={() => setIsCvModalOpen(false)}
                >
                  <div className="cv-option-content">
                    <span className="cv-option-flag">🇬🇧</span>
                    <div className="cv-option-text">
                      <h4>{t.cvDownload.englishCv}</h4>
                      <p>{t.cvDownload.englishSub}</p>
                    </div>
                  </div>
                  <MdArrowOutward className="cv-option-arrow" />
                </a>

                <a
                  href="/Lebenslauf_Rahul_Appala_DE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-option-card de-version"
                  onClick={() => setIsCvModalOpen(false)}
                >
                  <div className="cv-option-content">
                    <span className="cv-option-flag">🇩🇪</span>
                    <div className="cv-option-text">
                      <h4>{t.cvDownload.germanCv}</h4>
                      <p>{t.cvDownload.germanSub}</p>
                    </div>
                  </div>
                  <MdArrowOutward className="cv-option-arrow" />
                </a>
              </div>

              <div className="cv-modal-footer">
                <button
                  type="button"
                  className="cv-modal-cancel-btn"
                  onClick={() => setIsCvModalOpen(false)}
                >
                  {t.cvDownload.close}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SocialIcons;
