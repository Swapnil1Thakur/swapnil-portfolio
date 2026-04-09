import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { personalInfo } from "../data/data";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import styles from "./Hero.module.css";

export default function Hero() {
  const typedRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(elRef.current, {
      strings: personalInfo.typingStrings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 28,
      backDelay: 1400,
    });
    return () => typedRef.current.destroy();
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Open to opportunities · 2026 Graduate
          </div>

          <h1 className={styles.name}>
            Hi, I'm
            <span className={styles.nameAccent}>{personalInfo.name}</span>
          </h1>

          <p className={styles.typing}>
            I build <span className={styles.typedWrap}><span ref={elRef} /></span>
          </p>

          <p className={styles.bio}>{personalInfo.bio}</p>

          <div className={styles.actions}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects").scrollIntoView({ behavior: "smooth" }); }}
            >
              View My Work
            </a>
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <FiDownload size={15} /> Download Resume
            </a>
          </div>

          <div className={styles.socials}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <div className={styles.ring} aria-hidden="true" />
          <div className={styles.ring2} aria-hidden="true" />
          <div className={styles.imageBg} aria-hidden="true" />
          <img src="/profile.jpg" alt="Swapnil Thakur" className={styles.profileImg} draggable="false" />
          <div className={styles.floatCard1}>
            <span className={styles.floatIcon}>☕</span>
            <div>
              <div className={styles.floatTitle}>Spring Boot</div>
              <div className={styles.floatSub}>Java Backend</div>
            </div>
          </div>
          <div className={styles.floatCard2}>
            <span className={styles.floatIcon}>🔐</span>
            <div>
              <div className={styles.floatTitle}>JWT & OAuth2</div>
              <div className={styles.floatSub}>Security Expert</div>
            </div>
          </div>
        </div>
      </div>

      <button
        className={styles.scrollBtn}
        onClick={() => document.querySelector("#about").scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </button>
    </section>
  );
}
