import { personalInfo, achievements } from "../data/data";
import { FiPhone, FiMail, FiMapPin, FiAward, FiDownload } from "react-icons/fi";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imgFrame}>
              <img src="/profile.jpg" alt="Swapnil Thakur" className={styles.img} draggable="false" />
              <div className={styles.imgAccent} aria-hidden="true" />
            </div>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>300+</span>
                <span className={styles.statLabel}>DSA Problems</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Certifications</span>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h3 className={styles.subHeading}>
              Java <span>Backend Engineer</span>
            </h3>
            <p className={styles.bio}>{personalInfo.bio}</p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <FiPhone className={styles.infoIcon} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className={styles.infoItem}>
                <FiMail className={styles.infoIcon} />
                <span>{personalInfo.email}</span>
              </div>
              <div className={styles.infoItem}>
                <FiMapPin className={styles.infoIcon} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className={styles.achieveSection}>
              <h4 className={styles.achieveTitle}>
                <FiAward className={styles.achieveIcon} /> Key Achievements
              </h4>
              <ul className={styles.achieveList}>
                {achievements.map((a, i) => (
                  <li key={i} className={styles.achieveItem}>
                    <span className={styles.achieveDot} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FiDownload size={15} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
