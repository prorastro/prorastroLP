import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

// GPS route paths - curved lines across the screen
const GPS_ROUTES = [
  "M-100,800 C200,750 400,300 600,350 S1000,200 1300,280 S1700,150 2020,200",
  "M-100,600 C300,550 500,700 800,500 S1200,350 1500,450 S1800,300 2020,380",
  "M-100,400 C150,350 350,500 600,400 S900,250 1100,350 S1500,200 2020,300",
  "M2020,700 C1700,650 1400,800 1100,600 S700,500 400,650 S100,550 -100,600",
  "M-100,900 C300,850 600,600 900,700 S1300,500 1600,600 S1900,450 2020,500",
];

// Floating particles
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  x: (i * 137.5) % 1920,
  y: (i * 89.3) % 1080,
  size: 2 + (i % 4) * 1.5,
  speed: 0.3 + (i % 5) * 0.15,
  phase: (i * 0.7) % (Math.PI * 2),
}));

// GPS node dots along routes
const NODES = [
  { x: 600, y: 350 }, { x: 1300, y: 280 }, { x: 800, y: 500 },
  { x: 1100, y: 350 }, { x: 400, y: 400 }, { x: 900, y: 700 },
  { x: 1500, y: 450 }, { x: 300, y: 750 }, { x: 1600, y: 600 },
  { x: 500, y: 550 }, { x: 1000, y: 200 }, { x: 700, y: 650 },
];

export const MainVideo = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Slow pulsing background gradient
  const bgPulse = Math.sin(frame * 0.02) * 0.15 + 0.85;
  const bgRotation = interpolate(frame, [0, durationInFrames], [0, 360]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Radial gradient background pulse */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 30% 40%, 
              rgba(180, 20, 30, ${0.12 * bgPulse}) 0%, 
              transparent 70%),
            radial-gradient(ellipse 60% 50% at 70% 60%, 
              rgba(180, 20, 30, ${0.08 * bgPulse}) 0%, 
              transparent 60%),
            radial-gradient(ellipse 100% 80% at 50% 50%, 
              rgba(20, 10, 10, 0.9) 0%, 
              rgba(5, 5, 5, 1) 100%)
          `,
        }}
      />

      {/* Rotating subtle grid */}
      <AbsoluteFill
        style={{
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(180, 20, 30, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 20, 30, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `rotate(${bgRotation * 0.02}deg) scale(1.2)`,
          transformOrigin: "center center",
        }}
      />

      {/* GPS Route Lines SVG */}
      <AbsoluteFill>
        <svg width="1920" height="1080" viewBox="0 0 1920 1080">
          {GPS_ROUTES.map((d, i) => {
            const dashOffset = interpolate(
              frame,
              [0, durationInFrames],
              [3000, -3000 * (i % 2 === 0 ? 1 : -1)]
            );
            const routeOpacity = interpolate(
              Math.sin(frame * 0.015 + i * 1.2),
              [-1, 1],
              [0.08, 0.3]
            );
            return (
              <g key={i}>
                {/* Glow */}
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(200, 30, 40, 0.15)"
                  strokeWidth={6}
                  strokeDasharray="20 40"
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  style={{ filter: "blur(4px)" }}
                />
                {/* Main line */}
                <path
                  d={d}
                  fill="none"
                  stroke={`rgba(200, 40, 50, ${routeOpacity})`}
                  strokeWidth={2}
                  strokeDasharray="15 30"
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          {/* GPS Nodes - pulsing dots */}
          {NODES.map((node, i) => {
            const pulse = Math.sin(frame * 0.04 + i * 0.8);
            const nodeOpacity = interpolate(pulse, [-1, 1], [0.2, 0.8]);
            const nodeScale = interpolate(pulse, [-1, 1], [0.8, 1.5]);
            const glowSize = interpolate(pulse, [-1, 1], [8, 20]);
            return (
              <g key={`node-${i}`}>
                {/* Outer glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={glowSize}
                  fill={`rgba(200, 40, 50, ${nodeOpacity * 0.2})`}
                  style={{ filter: "blur(3px)" }}
                />
                {/* Inner dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={3 * nodeScale}
                  fill={`rgba(220, 50, 60, ${nodeOpacity})`}
                />
                {/* Core */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={1.5}
                  fill={`rgba(255, 150, 150, ${nodeOpacity})`}
                />
              </g>
            );
          })}
        </svg>
      </AbsoluteFill>

      {/* Floating particles */}
      <AbsoluteFill>
        {PARTICLES.map((p, i) => {
          const px = p.x + Math.sin(frame * 0.01 * p.speed + p.phase) * 60;
          const py = p.y + Math.cos(frame * 0.008 * p.speed + p.phase) * 40;
          const pOpacity = interpolate(
            Math.sin(frame * 0.025 + p.phase),
            [-1, 1],
            [0.05, 0.4]
          );
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: px,
                top: py,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: `rgba(200, 60, 70, ${pOpacity})`,
                boxShadow: `0 0 ${p.size * 3}px rgba(200, 40, 50, ${pOpacity * 0.5})`,
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Horizontal scanning line */}
      {(() => {
        const scanY = interpolate(
          frame % 300,
          [0, 300],
          [-50, 1130]
        );
        const scanOpacity = interpolate(
          frame % 300,
          [0, 20, 280, 300],
          [0, 0.15, 0.15, 0],
          { extrapolateRight: "clamp" }
        );
        return (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: scanY,
              width: "100%",
              height: 2,
              background: `linear-gradient(90deg, transparent, rgba(200, 40, 50, ${scanOpacity}), transparent)`,
              boxShadow: `0 0 30px 10px rgba(200, 40, 50, ${scanOpacity * 0.3})`,
            }}
          />
        );
      })()}

      {/* Vignette overlay */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
