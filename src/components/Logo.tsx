import { cn } from "@/lib/utils";

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 140 160" 
      className={cn("text-white", className)} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="car-mask">
          {/* Base shape remains solid white to preserve the map pin */}
          <rect width="140" height="160" fill="white" />
          
          {/* The Car Body Cutout (black) */}
          <path 
            d="M 28,70 
               C 28,55 40,48 55,44 
               C 70,40 85,42 98,52 
               C 105,58 108,62 108,68 
               C 108,72 102,75 95,75 
               L 32,75 
               C 28,75 28,73 28,70 Z" 
            fill="black" 
          />
          
          {/* The Wheels (black) */}
          <circle cx="45" cy="75" r="8" fill="black" />
          <circle cx="85" cy="75" r="8" fill="black" />
          
          {/* Windows (White, to leave a solid piece inside the black car cutout) */}
          <path d="M 55,48 C 65,44 78,46 86,53 L 56,53 Z" fill="white" />
          
          {/* Front headlight (White) */}
          <ellipse cx="36" cy="65" rx="5" ry="2" fill="white" transform="rotate(-10 36 65)" />

          {/* Speed Lines trailing out the back (Black) */}
          <path d="M 110,48 Q 130,44 140,44 Q 120,51 108,51 Z" fill="black" />
          <path d="M 112,58 Q 135,55 150,55 Q 125,61 110,61 Z" fill="black" />
          <path d="M 105,68 Q 130,68 135,70 Q 115,72 102,72 Z" fill="black" />
        </mask>
      </defs>

      {/* Main Map Pin Drop Shape */}
      <path 
        d="M 70,140 
           C 70,140 10,85 10,50 
           A 60,60 0 1,1 130,50 
           C 130,85 70,140 70,140 Z" 
        fill="currentColor" 
        mask="url(#car-mask)" 
      />
      
      {/* Floor Shadow */}
      <ellipse cx="70" cy="152" rx="30" ry="5" fill="black" opacity="0.4" />
    </svg>
  );
};
