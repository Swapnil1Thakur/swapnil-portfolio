import { skills } from "../data/data";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="section-subtitle">
            Technologies and tools I use to build production-grade backend systems.
          </p>
        </div>

        <div className={styles.categories}>
          {skills.map((cat, ci) => (
            <div key={ci} className={styles.category}>
              <h3 className={styles.catLabel}>{cat.category}</h3>
              <div className={styles.grid}>
                {cat.items.map((skill, si) => (
                  <div key={si} className={styles.card}>
                    <div className={styles.iconWrap}>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={styles.icon}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <span className={styles.iconFallback} style={{ display: "none" }}>
                        {skill.name[0]}
                      </span>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
