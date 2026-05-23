const SectionHeading = ({ label, title, description, className = "" }) => {
  return (
    <div className={`section-header ${className}`.trim()}>
      {label && <p className="text-label">{label}</p>}
      {title && <h2 className="text-heading">{title}</h2>}
      {description && <p className="text-body-lg max-w-prose">{description}</p>}
    </div>
  );
};

export default SectionHeading;
