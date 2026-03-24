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
    "inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-all duration-200 sm:w-auto";

  const variantClasses =
    variant === "primary"
      ? "bg-amber-400 text-slate-950! shadow-md hover:bg-amber-300 active:scale-95"
      : "border border-white/15 bg-white/5 text-slate-100 backdrop-blur-sm hover:bg-white/10 hover:border-amber-300/40 active:scale-95";

  return (
    <a className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </a>
  );
}
