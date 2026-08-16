import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {eyebrow && (
        <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/70 max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
};
