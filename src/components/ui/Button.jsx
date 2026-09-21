import React from 'react';
import PropTypes from 'prop-types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}) {
  const baseStyles = 'font-body font-medium uppercase tracking-widest transition-colors rounded-none inline-flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold';

  const variants = {
    primary: 'bg-gold text-ink hover:bg-yellow-600',
    ghost: 'border border-current hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`.trim();

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
