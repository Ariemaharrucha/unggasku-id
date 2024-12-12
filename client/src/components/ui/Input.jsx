import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const sizeClasses = {
  small: "py-1 px-2 text-sm rounded-md",
  medium: "py-2 px-3 text-base rounded-lg",
  large: "py-3 px-4 text-lg rounded-xl",
};

const Input = React.forwardRef(({ size = "medium", type = "text", placeholder = '', className, ...props }, ref) => {
  const baseStyles = "block w-full border font-medium placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 shadow-sm transition duration-200";
  const sizeStyles = sizeClasses[size];

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={twMerge(baseStyles, sizeStyles, className)}
      {...props}
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
