import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--surface)] hover:opacity-90 border border-[var(--primary)]",
  outline:
    "bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--surface)]",
  ghost:
    "bg-transparent text-[var(--primary)] border border-transparent hover:bg-[var(--border)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-body-sm",
  md: "px-6 py-3 text-body-md",
  lg: "px-8 py-4 text-body-lg",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

// When href is provided, render an <a> tag
type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; as?: "a" };

// When href is not provided, render a <button> tag
type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never; as?: "button" };

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

/**
 * Shared Button/Link component.
 * Renders a <a> when href is provided, <button> otherwise.
 * Uses pill radius for primary variant per design system.
 */
export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2 cursor-pointer";

  const radius =
    variant === "primary" ? "rounded-[var(--radius-pill)]" : "rounded-[var(--radius-md)]";

  const classes = cn(base, radius, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest} />
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest} />
  );
}
