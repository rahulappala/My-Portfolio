import "./styles/TechStack.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const badgeImages = [
  "/images/tech_badges/badge_paas.webp",
  "/images/tech_badges/badge_powerbi.webp",
  "/images/tech_badges/badge_sql.webp",
  "/images/tech_badges/badge_confluence.webp",
  "/images/tech_badges/badge_jira.webp",
  "/images/tech_badges/badge_python.webp",
];

const TechStack = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const techFlex = document.querySelector(".techstack-flex") as HTMLElement;
      if (!techFlex) return;

      const getScrollAmount = () => {
        const boxes = techFlex.querySelectorAll<HTMLElement>(".techstack-box");
        if (boxes.length === 0) return 0;
        const lastBox = boxes[boxes.length - 1];
        const totalContentWidth = lastBox.offsetLeft + lastBox.offsetWidth + 80;
        return Math.max(0, totalContentWidth - window.innerWidth);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".techstack-section",
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "techstack",
        },
      });

      timeline.to(".techstack-flex", {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("techstack")?.kill();
      };
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="techstack-section" id="techstack">
      <div className="techstack-container section-container">
        <h2>
          {t.techStack.title} <span>&amp; {t.techStack.subtitle}</span>
        </h2>
        <div className="techstack-flex">
          {t.techStack.domains.map((domain, index) => (
            <div className="techstack-box" key={index}>
              <div className="techstack-info">
                <div className="techstack-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{domain.title}</h4>
                    <p className="techstack-sub">{domain.subtitle}</p>
                  </div>
                </div>

                <div className="techstack-tags">
                  {domain.tags.map((tag, sIdx) => (
                    <span className="techstack-tag" key={sIdx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="techstack-desc">{domain.desc}</p>
              </div>

              <div className="techstack-image">
                <div className="techstack-image-card">
                  <img
                    src={badgeImages[index] || badgeImages[0]}
                    alt={domain.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
