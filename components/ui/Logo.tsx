import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Camera/snapshot body */}
        <rect x="3" y="8" width="30" height="22" rx="4" fill="#14B8A6" />
        {/* Lens ring outer */}
        <circle cx="18" cy="19" r="8" fill="#0B1121" />
        {/* Lens ring inner */}
        <circle cx="18" cy="19" r="6" fill="#14B8A6" opacity="0.3" />
        {/* Lens center / hub dot */}
        <circle cx="18" cy="19" r="3" fill="#2DD4BF" />
        {/* Flash / viewfinder */}
        <rect x="22" y="4" width="8" height="5" rx="2" fill="#2DD4BF" />
        {/* Top connector bar */}
        <rect x="11" y="5" width="14" height="4" rx="2" fill="#14B8A6" opacity="0.7" />
        {/* Grid lines in lens — representing "hub" / modules */}
        <line x1="18" y1="13" x2="18" y2="25" stroke="#14B8A6" strokeWidth="0.7" opacity="0.5" />
        <line x1="12" y1="19" x2="24" y2="19" stroke="#14B8A6" strokeWidth="0.7" opacity="0.5" />
      </svg>
      {variant === "full" && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Snapshot<span className="text-primary">Hub</span>
        </span>
      )}
    </div>
  );
}
