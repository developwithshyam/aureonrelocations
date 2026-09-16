import { cn } from "@/lib/utils";

type CinematicOverlayProps = {
  className?: string;
};

export function CinematicOverlay({ className }: CinematicOverlayProps) {
  return (
    <div aria-hidden="true" className={cn("overlay-cinematic absolute inset-0", className)} />
  );
}
