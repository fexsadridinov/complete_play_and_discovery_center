import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "donate" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-card focus-visible:ring-2 focus-visible:ring-brand/50",
  secondary:
    "border border-ink/10 bg-white text-ink shadow-soft hover:border-brand/25 hover:bg-cream-soft/50",
  donate:
    "bg-coral text-white shadow-card hover:bg-coral-dark hover:shadow-soft focus-visible:ring-2 focus-visible:ring-coral/50",
  ghost:
    "border border-transparent bg-transparent font-semibold text-brand hover:bg-mint/15",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type AnchorButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function AnchorButton({
  variant = "primary",
  children,
  className = "",
  href,
  ...rest
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
