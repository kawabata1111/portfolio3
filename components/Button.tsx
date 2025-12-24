import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', icon, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 ease-out font-sans font-medium";
  
  const variants = {
    primary: "bg-slate-850 text-white hover:bg-champagne-500 hover:text-white hover:shadow-lg hover:shadow-champagne-200",
    outline: "border border-slate-850 text-slate-850 hover:bg-slate-850 hover:text-white",
    text: "text-slate-850 hover:text-champagne-600 underline-offset-4 hover:underline padding-0"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
    </button>
  );
};

export default Button;