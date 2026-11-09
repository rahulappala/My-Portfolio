import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projectImages = [
  "/images/projects/project1_paas.webp",
  "/images/projects/project2_powerbi.webp",
  "/images/projects/project3_jira.webp",
  "/images/projects/project4_confluence.webp",
  "/images/projects/project5_sql.webp",
  "/images/projects/project6_python.webp",
];

const Work = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      if (!workFlex) return;

      const getScrollAmount = () => {
        const boxes = workFlex.querySelectorAll<HTMLElement>(".work-box");
        if (boxes.length === 0) return 0;
        const lastBox = boxes[boxes.length - 1];
        const totalContentWidth = lastBox.offsetLeft + lastBox.offsetWidth + 80;
        return Math.max(0, totalContentWidth - window.innerWidth);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          {t.work.title1} <span>{t.work.title2}</span>
        </h2>
        <div className="work-flex">
          {t.work.projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{t.work.toolsHeading}</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "8px", fontSize: "14px", color: "#94a3b8", lineHeight: "1.4" }}>
                  {project.desc}
                </p>
              </div>
              <WorkImage image={projectImages[index] || projectImages[0]} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
