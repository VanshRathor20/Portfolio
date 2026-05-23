const Card = ({ children, className = "", interactive = false }) => {
  const base = interactive ? "surface-interactive" : "surface";
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
};

export default Card;
