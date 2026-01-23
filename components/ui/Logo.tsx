
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * High-fidelity SVG reconstruction of the official Plug Connect logo.
 * Recreated from the user's provided image for maximum clarity and reliability.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', size = 42 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${className}`}
    >
      {/* The Circular Cord */}
      <path 
        d="M 68 102 C 105 100 115 65 110 45 C 100 10 60 5 40 15 C 10 30 5 80 40 105 C 48 110 55 110 60 105 L 60 90" 
        stroke="#3b82f6" 
        strokeWidth="7" 
        strokeLinecap="round" 
        fill="none"
      />
      
      {/* The Plug Head */}
      <path 
        d="M 42 55 C 42 50 45 48 48 48 H 72 C 75 48 78 50 78 55 V 75 C 78 85 72 92 60 92 C 48 92 42 85 42 75 V 55 Z" 
        fill="#3b82f6"
      />
      
      {/* The Prongs */}
      <rect x="50" y="32" width="6" height="16" rx="3" fill="#3b82f6" />
      <rect x="64" y="32" width="6" height="16" rx="3" fill="#3b82f6" />
      
      {/* Connection Point detail */}
      <circle cx="60" cy="92" r="3.5" fill="#3b82f6" />
    </svg>
  );
};
