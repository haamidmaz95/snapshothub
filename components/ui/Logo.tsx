import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect x="2" y="2" width="12" height="12" rx="3" fill="#14B8A6" />
        <rect x="18" y="2" width="12" height="12" rx="3" fill="#14B8A6" opacity="0.7" />
        <rect x="2" y="18" width="12" height="12" rx="3" fill="#14B8A6" opacity="0.7" />
        <rect x="18" y="18" width="12" height="12" rx="3" fill="#14B8A6" opacity="0.4" />
      </svg>
      {variant === "full" && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Snapshot<span className="text-primary">Hub</span>
        </span>
      )}
    </div>
  );
}
