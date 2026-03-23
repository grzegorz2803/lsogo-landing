type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-amber-300/80">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-semibold tracking-tight text-amber-100 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
