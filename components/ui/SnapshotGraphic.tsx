import {
  Building2,
  Megaphone,
  Sun,
  Wrench,
  Bug,
  Wind,
  Home,
  Trees,
  Zap,
  UtensilsCrossed,
  Sparkles,
  Dumbbell,
  Shield,
  Building,
  Hammer,
  Stethoscope,
  Bone,
  SprayCan,
  Scale,
  Car,
  Camera,
  Trophy,
  Users,
  Calculator,
  Fence,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const INDUSTRY_CONFIG: Record<
  string,
  { icon: LucideIcon; label: string; accent: string }
> = {
  "saas-agency": { icon: Building2, label: "SaaS Agency", accent: "#818CF8" },
  "marketing-agency": { icon: Megaphone, label: "Marketing", accent: "#6366F1" },
  solar: { icon: Sun, label: "Solar", accent: "#FBBF24" },
  plumbing: { icon: Wrench, label: "Plumbing", accent: "#60A5FA" },
  "pest-control": { icon: Bug, label: "Pest Control", accent: "#F87171" },
  hvac: { icon: Wind, label: "HVAC", accent: "#38BDF8" },
  roofing: { icon: Home, label: "Roofing", accent: "#C084FC" },
  landscaping: { icon: Trees, label: "Landscaping", accent: "#4ADE80" },
  electrician: { icon: Zap, label: "Electrical", accent: "#FCD34D" },
  restaurant: { icon: UtensilsCrossed, label: "Restaurant", accent: "#FB923C" },
  "med-spa": { icon: Sparkles, label: "Med Spa", accent: "#F0ABFC" },
  fitness: { icon: Dumbbell, label: "Fitness", accent: "#A78BFA" },
  "life-insurance": { icon: Shield, label: "Insurance", accent: "#38BDF8" },
  "real-estate": { icon: Building, label: "Real Estate", accent: "#34D399" },
  "home-improvement": { icon: Hammer, label: "Home Improvement", accent: "#FB923C" },
  dental: { icon: Stethoscope, label: "Dental", accent: "#22D3EE" },
  chiropractic: { icon: Bone, label: "Chiropractic", accent: "#2DD4BF" },
  cleaning: { icon: SprayCan, label: "Cleaning", accent: "#A78BFA" },
  "law-firm": { icon: Scale, label: "Law Firm", accent: "#94A3B8" },
  "auto-detailing": { icon: Car, label: "Auto Detail", accent: "#FB7185" },
  photography: { icon: Camera, label: "Photography", accent: "#FBBF24" },
  coaching: { icon: Trophy, label: "Coaching", accent: "#C084FC" },
  recruiting: { icon: Users, label: "Recruiting", accent: "#38BDF8" },
  "tax-prep": { icon: Calculator, label: "Tax Prep", accent: "#34D399" },
  fencing: { icon: Fence, label: "Fencing", accent: "#A8A29E" },
};

interface SnapshotGraphicProps {
  slug: string;
  gradient: [string, string];
}

export function SnapshotGraphic({ slug, gradient }: SnapshotGraphicProps) {
  const config = INDUSTRY_CONFIG[slug];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <div
      className="relative h-44 w-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Large faded icon in background */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.12]">
        <Icon className="h-36 w-36" strokeWidth={1} />
      </div>

      {/* Dashboard mockup card */}
      <div className="absolute inset-x-6 top-5 bottom-4 flex gap-3">
        {/* Left panel — mini dashboard */}
        <div className="flex-1 rounded-lg bg-white/12 backdrop-blur-sm border border-white/15 p-3 flex flex-col gap-2">
          {/* Header with icon */}
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${config.accent}30` }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: config.accent }} />
            </div>
            <div className="h-2 rounded-full bg-white/30 flex-1" />
          </div>
          {/* Stats row */}
          <div className="flex gap-2 mt-1">
            <div className="flex-1 rounded-md bg-white/8 p-1.5">
              <div className="h-1.5 w-6 rounded-full bg-white/25 mb-1" />
              <div
                className="h-3 w-8 rounded font-bold text-[8px] flex items-center"
                style={{ color: config.accent }}
              >
                247
              </div>
            </div>
            <div className="flex-1 rounded-md bg-white/8 p-1.5">
              <div className="h-1.5 w-5 rounded-full bg-white/25 mb-1" />
              <div
                className="h-3 w-7 rounded font-bold text-[8px] flex items-center"
                style={{ color: config.accent }}
              >
                89%
              </div>
            </div>
          </div>
          {/* List items */}
          <div className="space-y-1.5 mt-auto">
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: config.accent }}
              />
              <div className="h-1.5 rounded-full bg-white/20 flex-1" />
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: config.accent, opacity: 0.6 }}
              />
              <div className="h-1.5 rounded-full bg-white/15 w-4/5" />
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: config.accent, opacity: 0.4 }}
              />
              <div className="h-1.5 rounded-full bg-white/10 w-3/5" />
            </div>
          </div>
        </div>

        {/* Right panel — pipeline / workflow */}
        <div className="w-24 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 p-2.5 flex flex-col gap-2">
          {/* Pipeline stages */}
          <div
            className="text-[7px] font-semibold tracking-wide uppercase opacity-70"
            style={{ color: config.accent }}
          >
            Pipeline
          </div>
          {["New", "Active", "Won"].map((stage, i) => (
            <div key={stage} className="space-y-1">
              <div className="text-[7px] text-white/50">{stage}</div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${90 - i * 25}%`,
                    backgroundColor: config.accent,
                    opacity: 1 - i * 0.2,
                  }}
                />
              </div>
            </div>
          ))}
          {/* Mini chart */}
          <div className="mt-auto flex items-end gap-0.5 h-6">
            {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: config.accent,
                  opacity: 0.3 + (i / 10),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
