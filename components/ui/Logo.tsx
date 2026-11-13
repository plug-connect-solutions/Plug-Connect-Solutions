import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <img
      src="/logo.png"
      alt="Plug Connect Solutions Logo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`block shrink-0 object-contain ${className}`}
    />
  );
};
