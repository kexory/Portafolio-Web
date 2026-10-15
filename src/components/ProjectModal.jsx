import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

export function ProjectModal({ project, locale, onClose }) {
  const isEn = locale === "en";
  return (
    <div className="detail-modal">
      <div className="detail-kicker"><Code2 size={16} /> {project.category}</div>
      <h2>{project.title}</h2>
      <span className="detail-status">{project.status}</span>
      {project.image && <img className="detail-image" src={project.image} alt={`Imagen de ${project.title}`} />}
      <p className="detail-description">{project.details || project.description}</p>
      <div className="detail-meta">
        <span>{isEn ? "Technologies" : "Tecnologías"}</span>
        <div className="technology-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </div>
      <div className="detail-actions">
        {project.repository && <a className="button button-light" href={project.repository} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>}
        {project.liveUrl && <a className="button button-ghost" href={project.liveUrl} target="_blank" rel="noreferrer">{isEn ? "Live project" : "Ver proyecto"} <ExternalLink size={15} /></a>}
        {!project.repository && !project.liveUrl && <span className="detail-muted">{isEn ? "No public links added yet." : "Aún no se han añadido enlaces públicos."}</span>}
      </div>
    </div>
  );
}
