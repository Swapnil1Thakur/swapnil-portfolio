import { experience, education, certifications } from "../data/data";
import { FiBriefcase, FiBook, FiAward, FiExternalLink } from "react-icons/fi";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={`section ${styles.exp}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Experience & <span>Education</span></h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.block}>
              <div className={styles.blockHeader}>
                <FiBriefcase className={styles.blockIcon} />
                <h3 className={styles.blockTitle}>Work Experience</h3>
              </div>
              <div className={styles.timeline}>
                {experience.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineDate}>{item.duration}</span>
                        <span className={styles.timelineType}>Trainee</span>
                      </div>
                      <h4 className={styles.timelineRole}>{item.role}</h4>
                      <p className={styles.timelineOrg}>{item.company} · {item.location}</p>
                      <ul className={styles.timelinePoints}>
                        {item.points.map((pt, j) => (
                          <li key={j}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHeader}>
                <FiBook className={styles.blockIcon} />
                <h3 className={styles.blockTitle}>Education</h3>
              </div>
              <div className={styles.timeline}>
                {education.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineDate}>{item.duration}</span>
                        <span className={styles.timelineType}>{item.status}</span>
                      </div>
                      <h4 className={styles.timelineRole}>{item.degree}</h4>
                      <p className={styles.timelineOrg}>{item.institution} · {item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.block}>
              <div className={styles.blockHeader}>
                <FiAward className={styles.blockIcon} />
                <h3 className={styles.blockTitle}>Certifications</h3>
              </div>
              <div className={styles.certList}>
                {certifications.map((cert, i) => (
                  <a key={i} href={cert.link} target="_blank" rel="noreferrer" className={styles.certCard}>
                    <div className={styles.certBadge}>{cert.issuer[0]}</div>
                    <div className={styles.certInfo}>
                      <h5 className={styles.certName}>{cert.name}</h5>
                      <p className={styles.certMeta}>{cert.issuer} · {cert.date}</p>
                    </div>
                    <FiExternalLink className={styles.certIcon} />
                  </a>
                ))}
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureGlow} aria-hidden="true" />
                <span className={styles.featureEmoji}>🏆</span>
                <h4 className={styles.featureTitle}>Oracle Certified</h4>
                <p className={styles.featureSub}>
                  OCI 2024 Foundations Associate & Generative AI Professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
