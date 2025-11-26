import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tighter uppercase transition-all duration-200 focus:outline-none border-2 box-border";
  
  // Using inline styles or CSS vars implies mapped classes, but for standard Tailwind with custom props, we rely on the vars defined in index.html
  // Since Tailwind can't read those runtime vars for class generation easily without config, we'll use style prop or arbitrary values.
  // Actually, we can use arbitrary values like bg-[var(--accent-color)]
  
  const variants = {
    primary: "bg-[var(--accent-color)] border-[var(--accent-color)] text-white hover:bg-[var(--bg-color)] hover:text-[var(--accent-color)] hover:border-[var(--text-color)]",
    secondary: "bg-[var(--bg-color)] border-[var(--text-color)] text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-white hover:border-[var(--accent-color)]",
    outline: "border-[var(--text-color)] text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--bg-color)]",
    ghost: "border-transparent text-[var(--text-color)] hover:text-[var(--accent-color)]"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-8 py-3",
    lg: "text-lg px-12 py-4"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};