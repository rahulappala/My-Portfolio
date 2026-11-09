import { PropsWithChildren } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{t.landing.hello}</h2>
            <h1>
              {t.landing.name}
              <br />
              <span>{t.landing.surname}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{t.landing.role}</h3>
            <h2 className="landing-title-main">
              {t.landing.title1}
              <br />
              {t.landing.title2}
              <br />
              <span>{t.landing.title3}</span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
