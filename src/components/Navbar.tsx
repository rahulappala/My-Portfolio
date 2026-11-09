import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "../plugins/ScrollSmoother";
import { useLanguage } from "../context/LanguageContext";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);
    ScrollTrigger.refresh();

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          RAHUL APPALA
        </a>
        <a
          href="mailto:mail.rahulappala@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          mail.rahulappala@gmail.com
        </a>
        <div className="navbar-controls">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text={t.nav.about} />
              </a>
            </li>
            <li>
              <a data-href="#career" href="#career">
                <HoverLinks text={t.nav.career} />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text={t.nav.work} />
              </a>
            </li>
            <li>
              <a data-href="#techstack" href="#techstack">
                <HoverLinks text={t.nav.skills} />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text={t.nav.contact} />
              </a>
            </li>
          </ul>
          <button
            className="lang-toggle-btn"
            onClick={toggleLang}
            title={lang === "en" ? "Auf Deutsch umschalten" : "Switch to English"}
            data-cursor="pointer"
          >
            <span className="lang-globe">🌐</span>
            <span className={`lang-opt ${lang === "en" ? "active" : ""}`}>EN</span>
            <span className="lang-sep">|</span>
            <span className={`lang-opt ${lang === "de" ? "active" : ""}`}>DE</span>
          </button>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
