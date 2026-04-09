import { useState } from "react";
import { personalInfo } from "../data/data";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Looking for Java backend opportunities. Whether you have a role, a project, or just want to connect — I'm all ears.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrap}><FiMail /></div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrap}><FiPhone /></div>
                <div>
                  <div className={styles.infoLabel}>Phone</div>
                  <a href={`tel:${personalInfo.phone}`} className={styles.infoValue}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrap}><FiMapPin /></div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <span className={styles.infoValue}>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div>
              <p className={styles.socialTitle}>Find me on</p>
              <div className={styles.socials}>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                  <FiGithub /><span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                  <FiLinkedin /><span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text"
                  className={styles.input}
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input
                  id="email" name="email" type="email"
                  className={styles.input}
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell me about the role or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Opening email..." :
                 status === "success" ? "Email client opened ✓" :
                 <><FiSend size={14} /> Send Message</>}
              </button>
              {status === "success" && (
                <p className={styles.successMsg}>
                  Your email client should have opened. Or reach me directly at {personalInfo.email}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
