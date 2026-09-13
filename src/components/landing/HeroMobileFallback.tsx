export function HeroMobileFallback() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem]"
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

      {/* Outer ambient blur */}
      <div className="absolute h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />

      {/* SVG Orbital Rings & Accents */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-72 w-72 sm:h-80 sm:w-80"
      >
        <defs>
          <linearGradient id="orb-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orb-grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="sphere-core" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="35%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Ring 1 (tilted cyan) */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="55"
          stroke="url(#orb-grad-cyan)"
          strokeWidth="1.5"
          transform="rotate(-25 200 200)"
          strokeDasharray="4 2"
          opacity="0.85"
        />

        {/* Outer Ring 2 (tilted violet) */}
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="60"
          stroke="url(#orb-grad-violet)"
          strokeWidth="1.5"
          transform="rotate(35 200 200)"
          opacity="0.75"
        />

        {/* Ring 3 (horizontal subtle blue) */}
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="65"
          stroke="#60a5fa"
          strokeWidth="1"
          strokeOpacity="0.4"
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
          fill="#ffffff"
          opacity="0.35"
          transform="rotate(-30 175 168)"
        />

        {/* Orbital Nodes */}
        <circle cx="95" cy="145" r="4.5" fill="#22d3ee" opacity="0.9" />
        <circle cx="310" cy="245" r="4" fill="#a855f7" opacity="0.85" />
        <circle cx="280" cy="120" r="3.5" fill="#60a5fa" opacity="0.8" />
        <circle cx="120" cy="275" r="3.5" fill="#22d3ee" opacity="0.7" />
        <circle cx="200" cy="70" r="3" fill="#a855f7" opacity="0.8" />
      </svg>
    </div>
  );
}
