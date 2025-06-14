import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

interface CommonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  width?: "compact" | "default" | "wide" | "full";
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = 
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    width = "default",
    children, 
    href, 
    ...props 
  }, ref) => {
    
    // Base styles applied to all buttons
    const baseStyles = cn(
      "btn-base",
      "inline-flex items-center justify-center",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "cursor-pointer"
    );
    
    // Variant-specific styles
    const variantStyles = {
      primary: cn(
        "bg-primary-gold hover:bg-primary-gold-hover",
        "text-white",
        "btn-shadow"
      ),
      secondary: cn(
        "bg-neutral-light hover:bg-neutral-dark",
        "text-neutral-text-dark hover:text-white",
        "btn-shadow"
      ),
      outline: cn(
        "border-2 border-primary-gold",
        "text-primary-gold hover:text-white",
        "hover:bg-primary-gold",
        "bg-transparent"
      ),
    };

    // Width-based styles
    const widthStyles = {
      compact: "btn-width-compact",
      default: "btn-width-default", 
      wide: "btn-width-wide",
      full: "btn-width-full"
    };

    // Determine width based on variant if not explicitly set
    const getWidthVariant = () => {
      if (width !== "default") return width;
      
      // Auto-adjust width based on variant and content
      switch (variant) {
        case "outline":
          return "compact";
        case "secondary":
          return "wide";
        default:
          return "default";
      }
    };

    const finalWidth = getWidthVariant();
    
    const buttonClasses = cn(
      baseStyles,
      variantStyles[variant],
      widthStyles[finalWidth],
      className
    );

    if (href) {
      return (
        <a
          className={buttonClasses}
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
