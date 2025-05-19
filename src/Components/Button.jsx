// Button.jsx

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Enhanced Button component with different variants
 * @param {Object} props - Component props
 * @param {string} props.to - Route to navigate to
 * @param {string} props.text - Button text
 * @param {string} props.variant - Button variant ('filled', 'outline', 'ghost')
 * @param {string} props.size - Button size ('sm', 'md', 'lg')
 * @param {boolean} props.disabled - Button disabled state
 * @returns {JSX.Element} - Button component
 */
const Button = ({ 
  to, 
  text, 
  variant = 'outline',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  ...props 
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-20 py-3 text-md',
    lg: 'px-24 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    filled: 'bg-main text-white hover:bg-main-dark',
    outline: 'border border-main text-main hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-main',
    ghost: 'text-main hover:bg-main/10',
  };

  // Disabled state
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  // Combine all classes
  const buttonClasses = `
    rounded-xl
    font-light
    transition-all
    duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${className}
  `;

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={!disabled ? onClick : undefined}
        {...props}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;