import { personalInfo } from "../data/data";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}><span className={styles.logoAccent}>S</span>T</span>
          <p className={styles.tagline}>Building scalable backends, one endpoint at a time.</p>
        </div>
        <div className={styles.socials}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FiMail /></a>
        </div>
        <p className={styles.copy}>
          © {year} Swapnil Thakur · Made with <FiHeart className={styles.heart} />
        </p>
      </div>
    </footer>
  );
}
