import { cn } from "@/lib/utils";

type TrustRippleLinesProps = {
  className?: string;
};

const lineWidths = [44, 36, 28, 20];

export function TrustRippleLines({ className }: TrustRippleLinesProps) {
  return (
    <svg
      viewBox="0 0 48 18"
      className={cn("trust-ripple-lines h-[1.125rem] w-full max-w-12", className)}
      aria-hidden="true"
    >
      {lineWidths.map((width, index) => {
        const x = (48 - width) / 2;
        const y = 3 + index * 3.5;

        return (
          <line
            key={index}
            x1={x}
            y1={y}
            x2={x + width}
            y2={y}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity={0.45 + index * 0.12}
          />
        );
      })}
    </svg>
  );
}
