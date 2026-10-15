import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, Code2,
  ExternalLink, Github, Globe2, Instagram, Mail, MapPin, Menu,
  X, Youtube, Layers3, Sparkles
} from "lucide-react";
import { profile, projects, certificates } from "./data/profile.js";
import { useLocale } from "./hooks/useLocale.js";
import { SectionHeading } from "./components/SectionHeading.jsx";
import { Modal } from "./components/Modal.jsx";
import { ProjectModal } from "./components/ProjectModal.jsx";
import { CertificateModal } from "./components/CertificateModal.jsx";
import "./styles/app.css";

function BrandIcon({ brand, size = 19 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (brand === "tiktok") return <svg {...common}><path d="M14.2 3v11.1a4.2 4.2 0 1 1-3.4-4.1"/><path d="M14.2 3c.4 2.8 2.1 4.5 4.8 4.8"/><path d="M14.2 6.1c.9 1.3 2.4 2.1 4.8 2.2"/></svg>;
  if (brand === "threads") return <svg {...common}><path d="M17.7 10.2c-.4-3.7-2.4-5.7-5.8-5.7-4.1 0-6.6 2.9-6.6 7.6 0 4.8 2.4 7.4 6.3 7.4 3.1 0 5.3-1.8 5.3-4.5 0-2.2-1.5-3.7-4-3.7-2.3 0-3.8 1.2-3.8 3 0 1.5 1.1 2.5 2.8 2.5 2.8 0 4.5-2.3 4.5-5.8 0-1.7-.4-3.2-1.1-4.3"/></svg>;
  if (brand === "x") return <svg {...common}><path d="M4 3h4.7L20 21h-4.7L4 3Z"/><path d="M20 3 4 21"/></svg>;
  if (brand === "instagram") return <Instagram size={size} strokeWidth={1.8} />;
  if (brand === "youtube") return <Youtube size={size} strokeWidth={1.8} />;
  return <Github size={size} strokeWidth={1.8} />;
}

export default function App() {
  const { locale, setLocale, t } = useLocale();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const validSocials = profile.socials.filter((social) => social.url);
  const emailLink = profile.email ? `mailto:${profile.email}` : null;
  const gmailComposeLink = profile.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}` : null;

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kexory, inicio" onClick={closeMenu}>
          <img className="wordmark-logo" src={profile.logo} alt="Logotipo de Kexory" /><span>ERICK CRUZ</span>
        </a>
        <button className="mobile-menu-button icon-button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Navegación principal">
          <a href="#about" onClick={closeMenu}>{t("nav.about")}</a>
          <a href="#projects" onClick={closeMenu}>{t("nav.work")}</a>
          <a href="#focus" onClick={closeMenu}>{t("nav.focus")}</a>
          <a href="#contact" onClick={closeMenu}>{t("nav.contact")}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Seleccionar idioma">
            <button className={locale === "es" ? "active" : ""} onClick={() => setLocale("es")} aria-pressed={locale === "es"}>ES</button>
            <span />
            <button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")} aria-pressed={locale === "en"}>EN</button>
          </div>
          <a className="header-contact" href={gmailComposeLink || "#contact"} target={gmailComposeLink ? "_blank" : undefined} rel={gmailComposeLink ? "noreferrer" : undefined}>{t("nav.contact")} <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />{t("hero.eyebrow")}</div>
            <h1>{t("hero.headline").split("|").map((part, index, parts) => <span key={part}>{part}{index < parts.length - 1 && <br />}</span>)}</h1>
            <p className="hero-intro">{t("hero.intro")}</p>
            <div className="profile-meta">
              <span><MapPin size={15} />{profile.location}</span>
              <span><span className="meta-divider" />{profile.age}</span>
              <span><span className="meta-divider" />{profile.role}</span>
            </div>
            <div className="hero-actions">
              <a className="button button-light" href={profile.kivoplix.url} target="_blank" rel="noreferrer">{t("hero.primary")} <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#projects">{t("hero.secondary")} <ArrowDown size={16} /></a>
            </div>
            <div className="hero-availability"><span className="availability-line" />{t("hero.availability")}</div>
          </div>

          <div className="hero-visual" aria-label="Espacio reservado para fotografía de perfil">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="profile-frame">
              <div className="photo-placeholder logo-placeholder">
                <img src={profile.logo} alt="Logotipo de Kexory" />
                <span>KEXORY</span>
              </div>
            </div>
            <div className="visual-label visual-label-top"><span className="tiny-square" /> INDEPENDENT BUILDER</div>
            <div className="visual-label visual-label-bottom"><span>01 / 04</span><span className="visual-label-line" /><span>TECHNOLOGY</span></div>
            <div className="floating-note"><Code2 size={16} /><span>Building with intent</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-cue-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} number="01" />
          <div className="about-content">
            <div className="about-main">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>
            <aside className="principle-card">
              <div className="principle-icon"><Sparkles size={19} /></div>
              <span className="mini-label">{t("principles.eyebrow")}</span>
              <h3>{t("principles.title")}</h3>
              <p>{t("principles.body")}</p>
              <div className="principle-index">EC — 001</div>
            </aside>
          </div>
        </section>

        <section className="featured-section section-wrap" id="kivoplix">
          <div className="featured-card">
            <div className="featured-visual">
              <div className="featured-glow" />
              <div className="kivoplix-mark">K<span>.</span></div>
              <div className="featured-grid" />
              <div className="featured-chip"><span className="status-dot" />{t("kivoplix.status")}</div>
              <span className="featured-index">FEATURED / 001</span>
            </div>
            <div className="featured-copy">
              <div className="eyebrow">{t("kivoplix.eyebrow")}</div>
              <h2>{t("kivoplix.title")}</h2>
              <p>{t("kivoplix.description")}</p>
              <div className="featured-actions">
                <a className="button button-light" href={profile.kivoplix.url} target="_blank" rel="noreferrer">{t("kivoplix.learn")} <ArrowUpRight size={17} /></a>
              </div>
              <div className="featured-foot"><span>KEXORY</span><span>LEARNING · PRODUCT</span></div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow={t("projects.eyebrow")} title={t("projects.title")} number="02" />
          <p className="section-description">{t("projects.description")}</p>
          <div className="project-grid">
            {projects.map((project, index) => (
              <button className="project-card" key={project.id} onClick={() => setSelectedProject(project)}>
                <div className="project-art">
                  {project.image ? <img src={project.image} alt="" /> : <div className={`project-art-pattern pattern-${index + 1}`}><span className="art-ring ring-one" /><span className="art-ring ring-two" /><span className="art-code">{["</>", "↗", "◫"][index]}</span></div>}
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-open"><ArrowUpRight size={18} /></span>
                </div>
                <div className="project-info">
                  <div className="project-tags"><span>{project.category}</span><span className="demo-tag">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="card-link">{t("projects.view")} <ArrowRight size={15} /></span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="certificates-section section-wrap" id="certificates">
          <SectionHeading eyebrow={t("certificates.eyebrow")} title={t("certificates.title")} number="03" />
          <p className="section-description">{t("certificates.description")}</p>
          <div className="certificate-list">
            {certificates.map((certificate, index) => (
              <button className="certificate-row" key={certificate.id} onClick={() => setSelectedCertificate(certificate)}>
                <div className="certificate-symbol"><Award size={19} /></div>
                <div className="certificate-details">
                  <span className="certificate-index">0{index + 1}</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.institution} <span>·</span> {certificate.date}</p>
                </div>
                <span className="certificate-arrow"><ArrowUpRight size={18} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="focus-section section-wrap" id="focus">
          <SectionHeading eyebrow={t("focus.eyebrow")} title={t("focus.title")} number="04" />
          <div className="focus-grid">
            {t("focus.items").map((item, index) => (
              <article className="focus-card" key={item.title}>
                <span className="focus-number">0{index + 1}</span>
                <div className="focus-icon">{index === 0 ? <Layers3 size={18} /> : index === 1 ? <Globe2 size={18} /> : <Code2 size={18} />}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="focus-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="social-section section-wrap" id="social">
          <SectionHeading eyebrow={t("social.eyebrow")} title={t("social.title")} number="05" />
          <p className="section-description">{t("social.description")}</p>
          <div className="social-grid">
            {validSocials.map((social, index) => {
              return <a key={social.id} className="social-card" href={social.url} target="_blank" rel="noreferrer">
                <span className="social-index">0{index + 1}</span>
                <span className="social-icon"><BrandIcon brand={social.id} size={19} /></span>
                <span className="social-text"><strong>{social.label}</strong><small>{social.handle}</small></span>
                <ArrowUpRight className="social-arrow" size={17} />
              </a>;
            })}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration" aria-hidden="true"><span /><span /><span /></div>
            <div className="eyebrow">{t("contact.eyebrow")}</div>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.description")}</p>
            {emailLink && <a className="button button-light" href={gmailComposeLink || emailLink} target="_blank" rel="noreferrer"><Mail size={17} /> {t("contact.button")} <ArrowUpRight size={16} /></a>}
            <div className="contact-bottom"><span><span className="status-dot" /> TAMPICO, MÉXICO</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#top"><img className="wordmark-logo" src={profile.logo} alt="Logotipo de Kexory" /><span>ERICK CRUZ</span></a>
        <p>{t("footer.line")}</p>
        <a className="footer-brand" href={profile.kivoplix.url} target="_blank" rel="noreferrer">{t("footer.brand")} <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} ERICK CRUZ</span>
      </footer>

      {selectedProject && <Modal onClose={() => setSelectedProject(null)} label={selectedProject.title}><ProjectModal project={selectedProject} locale={locale} onClose={() => setSelectedProject(null)} /></Modal>}
      {selectedCertificate && <Modal onClose={() => setSelectedCertificate(null)} label={selectedCertificate.title}><CertificateModal certificate={selectedCertificate} locale={locale} onClose={() => setSelectedCertificate(null)} /></Modal>}
    </div>
  );
}
