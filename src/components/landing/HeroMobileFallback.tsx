export function HeroMobileFallback() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem]"
      aria-hidden="true"
    >
      {/* Ambient background glow - restrained luxury */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f8b8d]/10 via-transparent to-[#d6a84b]/08" />

      {/* Outer ambient blur */}
      <div className="absolute h-64 w-64 rounded-full bg-[#0f8b8d]/15 blur-3xl lg:h-80 lg:w-80" />
      <div className="absolute h-56 w-56 rounded-full bg-[#d6a84b]/10 blur-3xl lg:h-72 lg:w-72" />

      {/* SVG Orbital Rings & Accents */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[440px] lg:w-[440px] xl:h-[480px] xl:w-[480px] transition-transform duration-700"
      >
        <defs>
          <linearGradient id="orb-grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f8b8d" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="orb-grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d6a84b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b4842d" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="sphere-core" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="35%" stopColor="#0f8b8d" />
            <stop offset="70%" stopColor="#162033" />
            <stop offset="100%" stopColor="#0b1220" />
          </radialGradient>
          <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Ring 1 (tilted teal) */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="55"
          stroke="url(#orb-grad-teal)"
          strokeWidth="1.5"
          transform="rotate(-25 200 200)"
          strokeDasharray="4 2"
          opacity="0.85"
        />

        {/* Outer Ring 2 (tilted champagne gold) */}
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="60"
          stroke="url(#orb-grad-gold)"
          strokeWidth="1.5"
          transform="rotate(35 200 200)"
          opacity="0.75"
        />

        {/* Ring 3 (horizontal subtle teal ring) */}
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="65"
          stroke="#14b8a6"
          strokeWidth="1"
          strokeOpacity="0.25"
          transform="rotate(-5 200 200)"
        />

        {/* Central 3D-styled Sphere */}
        <circle cx="200" cy="200" r="82" fill="url(#sphere-core)" filter="url(#core-glow)" />

        {/* Specular highlight on sphere */}
        <ellipse
          cx="175"
          cy="168"
          rx="32"
          ry="18"
          fill="#f7f3e8"
          opacity="0.25"
          transform="rotate(-30 175 168)"
        />

        {/* Orbital Nodes */}
        <circle cx="95" cy="145" r="4.5" fill="#14b8a6" opacity="0.9" />
        <circle cx="310" cy="245" r="4" fill="#d6a84b" opacity="0.85" />
        <circle cx="280" cy="120" r="3.5" fill="#2dd4bf" opacity="0.8" />
        <circle cx="120" cy="275" r="3.5" fill="#14b8a6" opacity="0.7" />
        <circle cx="200" cy="70" r="3" fill="#d6a84b" opacity="0.85" />
      </svg>
    </div>
  );
}
