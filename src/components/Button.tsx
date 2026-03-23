import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition duration-300 sm:w-auto";

  const variantClasses =
    variant === "primary"
      ? "bg-amber-400 text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:scale-[1.02] hover:bg-amber-300"
      : "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 hover:border-amber-300/30";

  return (
    <a className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </a>
  );
}
