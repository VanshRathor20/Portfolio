const SectionHeading = ({ label, title }) => {
  return (
    <div>
      {label && <p>{label}</p>}
      {title && <h2>{title}</h2>}
    </div>
  );
};

export default SectionHeading;
