import { ButtonProps } from "./types";
import { FaAngleRight } from "react-icons/fa6";

export const Button = ({
  variant,
  children,
  onClick,
  type,
  className,
  disabled,
  inactive,
}: ButtonProps) => {
  if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        type={type ? type : "button"}
        className={`btn-secondary ${className}`}
      >
        {children}
        <FaAngleRight className="text-alt-2 dark:text-[#01A31B]" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
      className={`btn-primary group ${className ? className : ""} ${
        inactive ? "bg-white text-black/60 pointer-events-none" : ""
      }`}
    >
      <span
        className={`span--1 group-disabled:bg-[#FAD4A6] ${
          inactive ? "opacity-60" : ""
        }`}
      ></span>
      <span
        className={`span--2 group-disabled:bg-[#E7EBF0] ${
          inactive ? "opacity-60" : ""
        }`}
      ></span>
      <span
        className={`span--3 group-disabled:bg-[#B1EFD8] ${
          inactive ? "opacity-60" : ""
        }`}
      ></span>
      {children}
    </button>
  );
};
