import { useLanguage } from "../context/LanguageContext";
import "./styles/About.css";

const About = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 key={`about-title-${lang}`} className="title">
          {t.about.title}
        </h3>
        <div className="about-profile-card">
          <img
            src="/images/rahul_portrait.png"
            alt="Rahul Appala"
            className="about-avatar-image"
          />
          <div className="about-profile-details">
            <span className="about-profile-tag">{t.about.tag}</span>
            <h4>Rahul Appala</h4>
            <p>{t.about.location}</p>
          </div>
        </div>
        <p key={`about-para-${lang}`} className="para">
          {t.about.para}
        </p>
        <div className="about-badges">
          <span className="about-badge highlight">
            {t.about.badges.location}
          </span>
          <span className="about-badge highlight">
            {t.about.badges.languages}
          </span>
          <span className="about-badge">
            {t.about.badges.education}
          </span>
          <span className="about-badge">
            {t.about.badges.dashboards}
          </span>
          <span className="about-badge">
            {t.about.badges.releases}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
