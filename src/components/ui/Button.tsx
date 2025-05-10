import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-[48px] min-h-[48px]';
  
  const variantStyles = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white focus:ring-slate-500',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white focus:ring-teal-500'
  };

  const sizeStyles = {
    sm: 'text-sm px-4 py-3 rounded',
    md: 'text-base px-6 py-3 rounded-md',
    lg: 'text-lg px-8 py-4 rounded-md'
  };

  const disabledStyles = disabled 
    ? 'opacity-60 cursor-not-allowed' 
    : 'transform hover:-translate-y-0.5 active:translate-y-0';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;