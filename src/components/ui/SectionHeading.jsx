export default function SectionHeading({ id, title, onNavy = false, children }) {
  return (
    <div className="max-w-3xl">
      <h2
        id={id}
        className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance md:text-6xl"
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-5 max-w-xl text-lg ${onNavy ? 'text-white/80' : 'text-muted'}`}>{children}</p>
      )}
    </div>
  );
}
