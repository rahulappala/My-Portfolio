import { MdArrowOutward } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import "./styles/EngineeringLab.css";

const EngineeringLab = () => {
  const { t } = useLanguage();
  const lab = t.engineeringLab;

  const getStatusClass = (status?: string) => {
    if (!status) return "";
    const lower = status.toLowerCase();
    if (lower.includes("live")) return "live";
    if (lower.includes("r&d") || lower.includes("dev")) return "dev";
    return "complete";
  };

  return (
    <section className="lab-section section-container" id="lab">
      <div className="lab-header">
        <h2>
          {lab.title1} <span>{lab.title2}</span>
        </h2>
        <span className="lab-subtitle">{lab.subtitle}</span>
        <p className="lab-tagline">{lab.tagline}</p>
      </div>

      <div className="lab-tracks-grid">
        {lab.tracks.map((track, trackIdx) => (
          <div className="lab-track" key={trackIdx}>
            <div className="lab-track-header">
              <h3>{track.categoryTitle}</h3>
              <p>{track.categorySubtitle}</p>
            </div>

            {track.projects.map((project, pIdx) => (
              <div className="lab-card" key={pIdx}>
                <div className="lab-card-top">
                  <h4>{project.name}</h4>
                  {project.status && (
                    <span className={`lab-status-badge ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="lab-card-tag">{project.tag}</div>

                <p className="lab-card-desc">{project.desc}</p>

                <div className="lab-card-takeaway">
                  <strong>{project.takeawayLabel}</strong>
                  <p>{project.takeaway}</p>
                </div>

                <div className="lab-skills-flex">
                  {project.skills.map((skill, sIdx) => (
                    <span className="lab-skill-pill" key={sIdx}>
                      {skill}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-live-link"
                    data-cursor="disable"
                  >
                    <span>{project.liveUrlText || "Live Demo"}</span>
                    <MdArrowOutward />
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringLab;
