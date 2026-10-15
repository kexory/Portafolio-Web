export function SectionHeading({ eyebrow, title, number }) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        <span className="section-eyebrow"><span />{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <span className="section-number">{number} <span>/ 05</span></span>
    </div>
  );
}
