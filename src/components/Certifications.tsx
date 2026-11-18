import { useState, useMemo } from "react";
import { MdArrowOutward, MdExpandMore, MdExpandLess } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import { certificationsData, Certification } from "../data/certificationsData";
import "./styles/Certifications.css";

type CategoryFilter = "all" | "ai" | "data" | "cloud" | "agile";

const INITIAL_VISIBLE_COUNT = 8;

const Certifications = () => {
  const { t } = useLanguage();
  const c = t.certifications;

  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Newest first
  const sortedCerts = useMemo(() => {
    return [...certificationsData].reverse();
  }, []);

  // Filtered certifications
  const filteredCerts = useMemo(() => {
    if (activeFilter === "all") return sortedCerts;
    return sortedCerts.filter((item) => item.category === activeFilter);
  }, [sortedCerts, activeFilter]);

  // Dynamic counts for each category
  const categoryCounts = useMemo(() => {
    return {
      all: sortedCerts.length,
      ai: sortedCerts.filter((item) => item.category === "ai").length,
      data: sortedCerts.filter((item) => item.category === "data").length,
      cloud: sortedCerts.filter((item) => item.category === "cloud").length,
      agile: sortedCerts.filter((item) => item.category === "agile").length,
    };
  }, [sortedCerts]);

  // Visible subset
  const visibleCerts = useMemo(() => {
    if (isExpanded) return filteredCerts;
    return filteredCerts.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredCerts, isExpanded]);

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    setIsExpanded(false);
  };

  const getAuthorityClass = (authority: string) => {
    const lower = authority.toLowerCase();
    if (lower.includes("microsoft")) return "auth-microsoft";
    if (lower.includes("amazon") || lower.includes("aws")) return "auth-aws";
    if (lower.includes("google")) return "auth-google";
    if (lower.includes("datacamp")) return "auth-datacamp";
    if (lower.includes("linkedin")) return "auth-linkedin";
    if (lower.includes("apssdc")) return "auth-apssdc";
    return "auth-default";
  };

  return (
    <section className="certs-section section-container" id="certifications">
      <div className="certs-header">
        <h2>
          {c.title1} <span>{c.title2}</span>
        </h2>
        <span className="certs-subtitle">{c.subtitle}</span>
        <p className="certs-tagline">{c.tagline}</p>
      </div>

      <div className="certs-controls">
        <div className="certs-tabs">
          <button
            type="button"
            className={`cert-tab-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            <span>{c.filterAll}</span>
            <span className="cert-tab-count">{categoryCounts.all}</span>
          </button>

          <button
            type="button"
            className={`cert-tab-btn ${activeFilter === "ai" ? "active" : ""}`}
            onClick={() => handleFilterChange("ai")}
          >
            <span>{c.filterAi}</span>
            <span className="cert-tab-count">{categoryCounts.ai}</span>
          </button>

          <button
            type="button"
            className={`cert-tab-btn ${activeFilter === "data" ? "active" : ""}`}
            onClick={() => handleFilterChange("data")}
          >
            <span>{c.filterData}</span>
            <span className="cert-tab-count">{categoryCounts.data}</span>
          </button>

          <button
            type="button"
            className={`cert-tab-btn ${activeFilter === "cloud" ? "active" : ""}`}
            onClick={() => handleFilterChange("cloud")}
          >
            <span>{c.filterCloud}</span>
            <span className="cert-tab-count">{categoryCounts.cloud}</span>
          </button>

          <button
            type="button"
            className={`cert-tab-btn ${activeFilter === "agile" ? "active" : ""}`}
            onClick={() => handleFilterChange("agile")}
          >
            <span>{c.filterAgile}</span>
            <span className="cert-tab-count">{categoryCounts.agile}</span>
          </button>
        </div>

        <div className="certs-count-summary">
          {c.showing} {visibleCerts.length} {c.of} {filteredCerts.length} {c.credentials}
        </div>
      </div>

      <div className="certs-grid">
        {visibleCerts.map((cert: Certification) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-card-top">
              <span
                className={`cert-authority-badge ${getAuthorityClass(cert.authority)}`}
              >
                {cert.authority}
              </span>
              <span className="cert-date">{cert.date}</span>
            </div>

            <div className="cert-card-body">
              <h3 className="cert-name">{cert.name}</h3>
              {cert.licenseNumber && (
                <div className="cert-license">
                  {c.licenseLabel}: {cert.licenseNumber}
                </div>
              )}
            </div>

            <div className="cert-card-footer">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link"
                data-cursor="pointer"
              >
                <span>{c.verifyButton}</span>
                <MdArrowOutward className="cert-verify-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredCerts.length > INITIAL_VISIBLE_COUNT && (
        <div className="certs-expand-wrap">
          <button
            type="button"
            className="certs-expand-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
            data-cursor="pointer"
          >
            {isExpanded ? (
              <>
                <span>{c.showLess}</span>
                <MdExpandLess />
              </>
            ) : (
              <>
                <span>
                  {c.showMore} ({filteredCerts.length})
                </span>
                <MdExpandMore />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certifications;
