const VARIANTS = {
  accent: 'bg-accent text-navy hover:bg-accent-soft',
  ink: 'bg-ink text-paper hover:opacity-90',
  outline: 'border-2 border-current hover:border-accent hover:bg-accent hover:text-navy',
};

/** Renders an <a> when given an href (external links open safely), otherwise a <button>. */
export default function Button({ href, variant = 'accent', className = '', children, ...rest }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${className}`;

  if (href) {
    const isExternal = /^https?:/.test(href);
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
