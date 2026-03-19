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
  BarChart3,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const INDUSTRY_CONFIG: Record<
  string,
  {
    icon: LucideIcon;
    label: string;
    accent: string;
    screenTitle: string;
    navItems: string[];
    statLabel: string;
    statValue: string;
    listItems: string[];
    heroText: string;
    heroCta: string;
  }
> = {
  "saas-agency": {
    icon: Building2, label: "SaaS Agency", accent: "#818CF8",
    screenTitle: "CRM Dashboard", navItems: ["Dashboard", "Analytics", "Customers"],
    statLabel: "SaaS MaaS", statValue: "$147", listItems: ["Revenue", "Trial Conversions", "Revenue Breakdown"],
    heroText: "Powerful SaaS Solutions for Growing Your Business", heroCta: "Schedule Demo",
  },
  "marketing-agency": {
    icon: Megaphone, label: "Marketing Agency", accent: "#6366F1",
    screenTitle: "Workflow List", navItems: ["Search", "Launchpad", "Dashboard"],
    statLabel: "Campaigns", statValue: "24", listItems: ["10 Week Nurture", "Appointment Reminders", "Lead Follow Up"],
    heroText: "Exceptional Digital Marketing & Business Solutions", heroCta: "Book Appointment",
  },
  solar: {
    icon: Sun, label: "Solar", accent: "#FBBF24",
    screenTitle: "Project Pipeline", navItems: ["Dashboard", "Projects", "Leads"],
    statLabel: "Installs", statValue: "89", listItems: ["Roof Assessment", "Proposal Sent", "Permit Status"],
    heroText: "Clean Energy Solutions for Your Home", heroCta: "Get Free Quote",
  },
  plumbing: {
    icon: Wrench, label: "Plumbing", accent: "#60A5FA",
    screenTitle: "Service Dispatch", navItems: ["Jobs", "Schedule", "Clients"],
    statLabel: "Jobs Today", statValue: "12", listItems: ["Emergency Call", "Estimate Pending", "Seasonal Maint."],
    heroText: "Professional Plumbing Services You Can Trust", heroCta: "Book Service",
  },
  "pest-control": {
    icon: Bug, label: "Pest Control", accent: "#F87171",
    screenTitle: "Service Plans", navItems: ["Routes", "Clients", "Billing"],
    statLabel: "Active Plans", statValue: "156", listItems: ["Quarterly Spray", "Termite Inspect.", "Rodent Control"],
    heroText: "Keep Your Home Pest-Free Year Round", heroCta: "Get Protected",
  },
  hvac: {
    icon: Wind, label: "HVAC", accent: "#38BDF8",
    screenTitle: "Maintenance Hub", navItems: ["Service", "Plans", "Inventory"],
    statLabel: "Tune-Ups", statValue: "43", listItems: ["AC Service Call", "Furnace Install", "Duct Cleaning"],
    heroText: "Reliable Heating & Cooling Solutions", heroCta: "Schedule Service",
  },
  roofing: {
    icon: Home, label: "Roofing", accent: "#C084FC",
    screenTitle: "Inspection Tracker", navItems: ["Inspections", "Claims", "Projects"],
    statLabel: "Estimates", statValue: "67", listItems: ["Storm Damage Lead", "Insurance Claim", "Inspection Sched."],
    heroText: "Expert Roofing Installation & Repair", heroCta: "Free Inspection",
  },
  landscaping: {
    icon: Trees, label: "Landscaping", accent: "#4ADE80",
    screenTitle: "Client Routes", navItems: ["Routes", "Estimates", "Crew"],
    statLabel: "Weekly Clients", statValue: "84", listItems: ["Lawn Maintenance", "Spring Cleanup", "Hardscaping"],
    heroText: "Transform Your Outdoor Space", heroCta: "Free Estimate",
  },
  electrician: {
    icon: Zap, label: "Electrician", accent: "#FCD34D",
    screenTitle: "Service Queue", navItems: ["Calls", "Schedule", "Parts"],
    statLabel: "Open Jobs", statValue: "18", listItems: ["Panel Upgrade", "EV Charger", "Safety Inspect."],
    heroText: "Licensed Electrical Contractor", heroCta: "Call Now",
  },
  restaurant: {
    icon: UtensilsCrossed, label: "Restaurant", accent: "#FB923C",
    screenTitle: "Reservations", navItems: ["Tables", "Orders", "Loyalty"],
    statLabel: "Tonight", statValue: "42", listItems: ["Table for 4 — 7pm", "Catering Inquiry", "Birthday Promo"],
    heroText: "Fine Dining Experience Awaits", heroCta: "Reserve Table",
  },
  "med-spa": {
    icon: Sparkles, label: "Med Spa", accent: "#F0ABFC",
    screenTitle: "Treatment Scheduler", navItems: ["Bookings", "Members", "Products"],
    statLabel: "Appointments", statValue: "28", listItems: ["Botox Consult", "Facial Package", "Membership Renew"],
    heroText: "Discover Your Mommy Makeover", heroCta: "Book Consult",
  },
  fitness: {
    icon: Dumbbell, label: "Fitness", accent: "#A78BFA",
    screenTitle: "Member Dashboard", navItems: ["Members", "Classes", "Billing"],
    statLabel: "Active Members", statValue: "312", listItems: ["Free Trial Signup", "Class Schedule", "PT Session"],
    heroText: "Join Our 4 Week Weight Loss Challenge", heroCta: "Start Trial",
  },
  "life-insurance": {
    icon: Shield, label: "Life Insurance", accent: "#38BDF8",
    screenTitle: "Policy Pipeline", navItems: ["Leads", "Policies", "Renewals"],
    statLabel: "Active Policies", statValue: "243", listItems: ["Needs Analysis", "Application", "Annual Review"],
    heroText: "Protect Your Family's Future", heroCta: "Get Quote",
  },
  "real-estate": {
    icon: Building, label: "Real Estate", accent: "#34D399",
    screenTitle: "Property Listings", navItems: ["Dashboard", "Properties", "Leads"],
    statLabel: "Listings", statValue: "47", listItems: ["$950,000 — 4 Bed", "$599,000 — 3 Bed", "$725,000 — 4 Bed"],
    heroText: "Find Your Perfect Home", heroCta: "Browse Listings",
  },
  "home-improvement": {
    icon: Hammer, label: "Home Improvement", accent: "#FB923C",
    screenTitle: "Project Tracker", navItems: ["Projects", "Estimates", "Materials"],
    statLabel: "Active Projects", statValue: "15", listItems: ["Kitchen Remodel", "Deck Build", "Bathroom Reno"],
    heroText: "Quality Home Renovations", heroCta: "Free Estimate",
  },
  dental: {
    icon: Stethoscope, label: "Dental", accent: "#22D3EE",
    screenTitle: "Patient Schedule", navItems: ["Patients", "Schedule", "Recalls"],
    statLabel: "Today's Appts", statValue: "24", listItems: ["Cleaning — 9am", "Crown Prep — 11am", "New Patient — 2pm"],
    heroText: "Your Smile, Our Priority", heroCta: "Book Cleaning",
  },
  chiropractic: {
    icon: Bone, label: "Chiropractic", accent: "#2DD4BF",
    screenTitle: "Care Plans", navItems: ["Patients", "Plans", "Billing"],
    statLabel: "Weekly Visits", statValue: "86", listItems: ["Adjustment — 10am", "New Patient Eval", "Wellness Check"],
    heroText: "Natural Pain Relief & Wellness", heroCta: "Book Visit",
  },
  cleaning: {
    icon: SprayCan, label: "Cleaning", accent: "#A78BFA",
    screenTitle: "Schedule Board", navItems: ["Jobs", "Recurring", "Teams"],
    statLabel: "This Week", statValue: "34", listItems: ["Deep Clean — 9am", "Move-Out — 1pm", "Office Weekly"],
    heroText: "Spotless Cleaning Services", heroCta: "Book Now",
  },
  "law-firm": {
    icon: Scale, label: "Law Firm", accent: "#94A3B8",
    screenTitle: "Case Management", navItems: ["Cases", "Clients", "Calendar"],
    statLabel: "Active Cases", statValue: "52", listItems: ["Personal Injury", "Family Law Consult", "Estate Planning"],
    heroText: "Experienced Legal Representation", heroCta: "Free Consult",
  },
  "auto-detailing": {
    icon: Car, label: "Auto Detailing", accent: "#FB7185",
    screenTitle: "Booking Calendar", navItems: ["Bookings", "Members", "Fleet"],
    statLabel: "This Week", statValue: "28", listItems: ["Full Detail — 10am", "Ceramic Coat — 2pm", "Fleet Wash — 8am"],
    heroText: "Premium Auto Detailing", heroCta: "Book Detail",
  },
  photography: {
    icon: Camera, label: "Photography", accent: "#FBBF24",
    screenTitle: "Session Calendar", navItems: ["Sessions", "Gallery", "Clients"],
    statLabel: "Upcoming", statValue: "16", listItems: ["Wedding — Sat", "Portrait — Mon", "Mini Session — Wed"],
    heroText: "Capturing Your Best Moments", heroCta: "Book Session",
  },
  coaching: {
    icon: Trophy, label: "Coaching", accent: "#C084FC",
    screenTitle: "Client Progress", navItems: ["Clients", "Programs", "Sessions"],
    statLabel: "Active Clients", statValue: "38", listItems: ["Discovery Call", "Group Session", "Progress Review"],
    heroText: "Unlock Your Full Potential", heroCta: "Book Discovery",
  },
  recruiting: {
    icon: Users, label: "Recruiting", accent: "#38BDF8",
    screenTitle: "Candidate Pipeline", navItems: ["Candidates", "Jobs", "Clients"],
    statLabel: "Open Roles", statValue: "23", listItems: ["Software Eng.", "Product Manager", "Sales Director"],
    heroText: "Find Your Next Great Hire", heroCta: "Post Role",
  },
  "tax-prep": {
    icon: Calculator, label: "Tax Preparation", accent: "#34D399",
    screenTitle: "Filing Tracker", navItems: ["Clients", "Filings", "Docs"],
    statLabel: "Filed", statValue: "189", listItems: ["Doc Collection", "Review — Draft", "E-File Ready"],
    heroText: "Accurate Tax Preparation", heroCta: "Start Filing",
  },
  fencing: {
    icon: Fence, label: "Fencing", accent: "#A8A29E",
    screenTitle: "Estimate Pipeline", navItems: ["Estimates", "Projects", "Materials"],
    statLabel: "Estimates", statValue: "19", listItems: ["Privacy Fence", "Pool Enclosure", "Commercial Gate"],
    heroText: "Quality Fencing Solutions", heroCta: "Free Estimate",
  },
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
        background: `linear-gradient(145deg, ${gradient[0]}dd, ${gradient[1]}cc)`,
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Industry icon + label top-left */}
      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Industry name - large text */}
      <div className="absolute top-3.5 right-3 z-10">
        <span className="text-white/40 text-xs font-bold tracking-wider uppercase">
          {config.label}
        </span>
      </div>

      {/* Device mockup layout */}
      <div className="absolute inset-0 flex items-end justify-center px-3 pb-0 pt-12">
        {/* Laptop mockup — center/main */}
        <div className="relative z-20 w-[58%] mx-auto">
          {/* Laptop screen */}
          <div className="bg-white rounded-t-md border border-gray-200 shadow-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-gray-100 px-2 py-1 flex items-center gap-1.5 border-b border-gray-200">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <div className="w-1 h-1 rounded-full bg-yellow-400" />
                <div className="w-1 h-1 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-sm h-2.5 mx-2 flex items-center px-1">
                <div className="w-1/2 h-1 bg-gray-200 rounded-full" />
              </div>
            </div>
            {/* Screen content — dashboard */}
            <div className="flex h-[72px]">
              {/* Sidebar */}
              <div className="w-14 bg-gray-50 border-r border-gray-100 py-1 px-1 space-y-1 shrink-0">
                <div className="flex items-center gap-0.5 px-0.5">
                  <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: config.accent }} />
                  <div className="h-1 bg-gray-300 rounded-full flex-1" />
                </div>
                {config.navItems.map((item, i) => (
                  <div key={item} className="flex items-center gap-0.5 px-0.5">
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[3.5px] text-gray-500 truncate">{item}</span>
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="flex-1 p-1.5">
                <div className="text-[4px] font-semibold text-gray-700 mb-1">{config.screenTitle}</div>
                {/* Stats row */}
                <div className="flex gap-1 mb-1.5">
                  <div className="flex-1 bg-gray-50 rounded-sm p-1 border border-gray-100">
                    <div className="text-[3px] text-gray-400">{config.statLabel}</div>
                    <div className="text-[5px] font-bold" style={{ color: config.accent }}>{config.statValue}</div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-sm p-1 border border-gray-100">
                    <div className="text-[3px] text-gray-400">Conversion</div>
                    <div className="text-[5px] font-bold text-green-500">2.3%</div>
                  </div>
                </div>
                {/* Chart placeholder */}
                <div className="flex items-end gap-[1px] h-5">
                  {[35, 50, 40, 65, 55, 80, 60, 75, 85, 70, 90, 78].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-[1px]"
                      style={{
                        height: `${h}%`,
                        backgroundColor: config.accent,
                        opacity: 0.4 + (i / 20),
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div className="h-1 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-sm mx-[-4px]" />
        </div>

        {/* Phone mockup — left */}
        <div className="absolute left-1 bottom-0 z-30 w-[22%]">
          <div className="bg-gray-900 rounded-md p-[2px] shadow-xl">
            {/* Phone notch */}
            <div className="bg-gray-900 rounded-t-md">
              <div className="h-1 flex justify-center">
                <div className="w-4 h-0.5 bg-gray-700 rounded-full mt-0.5" />
              </div>
            </div>
            {/* Phone screen */}
            <div className="bg-white rounded-sm overflow-hidden">
              {/* Phone header */}
              <div className="px-1.5 py-1 border-b border-gray-100" style={{ backgroundColor: `${config.accent}15` }}>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: config.accent }}>
                    <Icon className="w-2 h-2 p-[1px] text-white" />
                  </div>
                  <span className="text-[3.5px] font-semibold text-gray-700">{config.label}</span>
                </div>
              </div>
              {/* Phone content */}
              <div className="p-1.5 space-y-1 h-[60px]">
                <div className="text-[3.5px] text-gray-500">Welcome! We&apos;re here to help.</div>
                <div className="text-[7px] font-bold text-gray-800">{config.statValue}<span className="text-[3.5px] font-normal text-gray-400">/mo</span></div>
                <div className="space-y-0.5 mt-1">
                  <div className="flex items-center gap-0.5">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: config.accent }} />
                    <span className="text-[3px] text-gray-500">Unlimited users</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: config.accent }} />
                    <span className="text-[3px] text-gray-500">Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: config.accent }} />
                    <span className="text-[3px] text-gray-500">24/7 Support</span>
                  </div>
                </div>
                <div
                  className="mt-1 text-[3px] text-white text-center py-0.5 rounded-sm font-semibold"
                  style={{ backgroundColor: config.accent }}
                >
                  Start Trial
                </div>
              </div>
            </div>
            {/* Phone bottom bar */}
            <div className="bg-gray-900 h-1 flex justify-center items-center">
              <div className="w-3 h-[1px] bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Tablet / Website mockup — right */}
        <div className="absolute right-0 bottom-0 z-10 w-[40%]">
          <div className="bg-gray-900 rounded-md p-[2px] shadow-xl">
            {/* Tablet screen */}
            <div className="bg-white rounded-sm overflow-hidden">
              {/* Website header */}
              <div className="flex items-center justify-between px-1.5 py-0.5 border-b border-gray-100">
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: config.accent }} />
                  <span className="text-[3px] font-bold text-gray-700">{config.label}</span>
                </div>
                <div className="flex gap-1">
                  {["Home", "Services", "Contact"].map((n) => (
                    <span key={n} className="text-[2.5px] text-gray-400">{n}</span>
                  ))}
                </div>
              </div>
              {/* Hero section */}
              <div
                className="px-2 py-2.5 h-[65px]"
                style={{
                  background: `linear-gradient(135deg, ${gradient[0]}30, ${gradient[1]}20)`,
                }}
              >
                <div className="text-[5px] font-bold text-gray-800 leading-tight max-w-[70%]">
                  {config.heroText}
                </div>
                <div className="text-[3px] text-gray-500 mt-1 max-w-[60%]">
                  We help you grow with innovative solutions and proven strategies.
                </div>
                <div
                  className="mt-1.5 inline-block text-[3px] text-white py-0.5 px-1.5 rounded-sm font-semibold"
                  style={{ backgroundColor: config.accent }}
                >
                  {config.heroCta}
                </div>
                {/* Mini feature icons */}
                <div className="flex gap-2 mt-2">
                  {[BarChart3, TrendingUp, Mail].map((FeatIcon, i) => (
                    <div key={i} className="flex items-center gap-0.5">
                      <FeatIcon className="w-1.5 h-1.5" style={{ color: config.accent }} />
                      <span className="text-[2.5px] text-gray-400">Feature</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
