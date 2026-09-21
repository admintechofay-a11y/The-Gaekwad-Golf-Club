import React from 'react';
import PropTypes from 'prop-types';

export function GradientPanel({
  gradient,
  label = '[ Photography ]',
  className = '',
}) {
  return (
    <div
      style={{ background: gradient }}
      className={`relative w-full h-full overflow-hidden ${className}`.trim()}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-body text-xs text-white/30 tracking-widest uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

GradientPanel.propTypes = {
  gradient: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default GradientPanel;
