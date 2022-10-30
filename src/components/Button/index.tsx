import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "w-full py-2 px-4  rounded text-white text-lg",
        {
          "bg-primary hover:bg-hover-primary": variant === "default",
          "border-2 border-primary text-primary font-bold hover:border-hover-primary hover:text-hover-primary":
            variant === "outline",
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
