const VARIANTS = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}) => {
  const classes = `${VARIANTS[variant] ?? VARIANTS.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
