import { ArrowUpRight, Award, ExternalLink } from "lucide-react";

export function CertificateModal({ certificate, locale }) {
  const isEn = locale === "en";
  return (
    <div className="detail-modal">
      <div className="detail-kicker"><Award size={16} /> {isEn ? "Learning record" : "Registro de formación"}</div>
      <h2>{certificate.title}</h2>
      {certificate.image ? <img className="detail-image certificate-image" src={certificate.image} alt={`Imagen de ${certificate.title}`} /> : <div className="certificate-placeholder"><Award size={32} /><span>{isEn ? "Certificate image placeholder" : "Espacio para imagen del certificado"}</span></div>}
      <p className="detail-description">{certificate.description}</p>
      <div className="certificate-modal-facts">
        <div><span>{isEn ? "Institution" : "Institución"}</span><strong>{certificate.institution}</strong></div>
        <div><span>{isEn ? "Date" : "Fecha"}</span><strong>{certificate.date}</strong></div>
      </div>
      {certificate.url ? <a className="button button-light" href={certificate.url} target="_blank" rel="noreferrer">{isEn ? "Official link" : "Enlace oficial"} <ArrowUpRight size={16} /></a> : <span className="detail-muted">{isEn ? "No verification link added." : "No se ha añadido un enlace de verificación."}</span>}
    </div>
  );
}
