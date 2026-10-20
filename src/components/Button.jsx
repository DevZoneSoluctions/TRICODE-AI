import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer select-none overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5 font-bold"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED] text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/35 hover:brightness-105 active:scale-[0.98]",
    secondary: "bg-white text-[#0F172A] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF]/60 shadow-xs active:scale-[0.98]",
    cyan: "bg-gradient-to-r from-[#0284C7] to-[#00D2FF] text-white shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/35 hover:brightness-105 active:scale-[0.98]",
    dark: "bg-[#0F172A] text-white hover:bg-[#1E293B] border border-[#334155] shadow-md shadow-slate-900/20 active:scale-[0.98]",
    outline: "bg-transparent border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white active:scale-[0.98]",
    ghost: "bg-transparent text-[#0F172A] hover:text-[#2563EB] hover:bg-[#EFF6FF]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClasses}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
