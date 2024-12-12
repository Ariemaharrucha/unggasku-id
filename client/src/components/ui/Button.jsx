import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const buttonVariants = {
  solid: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700",
  outline: "border border-primary-800 text-primary-800",
  primary: "border-none text-white bg-primary-950 hover:bg-primary-900",
  secondary: "border-none text-black bg-secondary-300 hover:bg-secondary-400",
};

const sizeClasses = {
  small: "py-2 px-3 text-xs",
  medium: "py-3 px-4 text-sm",
  large: "py-4 px-6 text-lg",
};

const Button = ({ variant = "solid", size = "medium", className, children, ...props }) => {
  const baseStyles = "inline-flex text-center items-center gap-x-2 font-medium rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const variantStyles = buttonVariants[variant];
  const sizeStyles = sizeClasses[size];

  return (
    <button
      type="button"
      className={twMerge(baseStyles, variantStyles, sizeStyles, className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'outline', 'primary','secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
