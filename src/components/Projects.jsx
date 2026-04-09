import { projects } from "../data/data";
import { FiGithub, FiZap } from "react-icons/fi";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Production-grade systems built with real-world security and scalability in mind — not just tutorial projects.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card} style={{ "--card-accent": project.color }}>
              <div className={styles.cardTop}>
                <div className={styles.cardGlow} aria-hidden="true" />
                <div className={styles.cardNum}>0{i + 1}</div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.githubBtn}
                  aria-label="View on GitHub"
                >
                  <FiGithub />
                </a>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardDuration}>{project.duration}</span>
                </div>
                <h3 className={styles.cardName}>{project.name}</h3>
                <span className={styles.cardSubtitle}>{project.subtitle}</span>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.highlights}>
                  {project.highlights.map((h, j) => (
                    <div key={j} className={styles.highlight}>
                      <FiZap className={styles.zapIcon} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.techStack}>
                  {project.tech.split(", ").map((t, k) => (
                    <span key={k} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn btn-outline ${styles.viewBtn}`}
                >
                  <FiGithub /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
