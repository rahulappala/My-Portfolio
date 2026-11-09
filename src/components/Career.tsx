import { useLanguage } from "../context/LanguageContext";
import "./styles/Career.css";

const Career = () => {
  const { t } = useLanguage();

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          {t.career.title1} <span>&amp;</span>
          <br /> {t.career.title2}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {t.career.roles.map((role, idx) => (
            <div className="career-info-box" key={idx}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{role.title}</h4>
                  <h5>{role.company}</h5>
                </div>
                <h3>{role.period}</h3>
              </div>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
