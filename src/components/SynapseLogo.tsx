import React from 'react';

interface SynapseLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const SynapseLogo: React.FC<SynapseLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight text-white select-none ${className}`}>
      {/* Precision Stylized S Mark inspired by official PDF brand icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-200 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(218,241,222,0.15)]"
        >
          <defs>
            <linearGradient id="synapseRedDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A0E17" />
              <stop offset="45%" stopColor="#801828" />
              <stop offset="100%" stopColor="#1E070B" />
            </linearGradient>
            <linearGradient id="synapseWhiteShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="synapseEmeraldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DAF1DE" />
              <stop offset="100%" stopColor="#8EB69B" />
            </linearGradient>
          </defs>

          {/* Top curve ribbon */}
          <path
            d="M 68 18 C 78 18 84 25 84 34 C 84 44 76 50 62 50 L 38 50 C 30 50 26 53 26 59 C 26 65 31 70 42 70 L 74 70 L 66 82 L 36 82 C 20 82 12 73 12 60 C 12 48 22 40 36 40 L 60 40 C 68 40 72 37 72 32 C 72 26 66 22 56 22 L 26 22 L 34 10 L 68 18 Z"
            fill="url(#synapseRedDark)"
          />
          {/* Inner chrome/mint core facet */}
          <path
            d="M 66 24 C 72 24 76 28 76 33 C 76 39 71 43 59 43 L 38 43 C 28 43 21 47 18 55 C 19 46 27 40 39 40 L 61 40 C 69 40 73 36 73 31 C 73 26 67 22 58 22 L 34 22 L 39 16 L 66 24 Z"
            fill="url(#synapseWhiteShine)"
            opacity="0.9"
          />
          {/* Lower chrome highlight */}
          <path
            d="M 34 76 C 26 76 21 72 20 65 C 22 72 29 76 40 76 L 70 76 L 63 82 L 36 82 C 35 82 34.5 82 34 76 Z"
            fill="url(#synapseEmeraldAccent)"
            opacity="0.85"
          />
        </svg>
      </div>

      {showText && (
        <span className={`font-semibold tracking-tight ${textSizes[size]} text-white flex items-center`}>
          <span>Synapse</span>
          <span className="text-[#8EB69B]">Core</span>
        </span>
      )}
    </div>
  );
};
