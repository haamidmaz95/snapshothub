import { Search, CreditCard, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Browse",
    description:
      "Find the snapshot built for your industry. Each one includes pipelines, automations, funnels, and email templates.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Purchase",
    description:
      "One-time payment. No subscriptions, no hidden fees. You get a GHL share link delivered instantly.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Install",
    description:
      "Click the share link, pick your sub-account, and everything imports automatically. Live in 60 seconds.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Up and Running in <span className="text-primary">3 Steps</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            No complicated setup. No technical skills required. Just pick, pay,
            and install.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-card-border via-primary/30 to-card-border" />

        {STEPS.map((step, i) => (
          <FadeIn key={step.step} delay={i * 0.15}>
            <div className="relative rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm p-8 text-center hover:border-primary/30 transition-colors">
              <div className="text-xs font-mono text-primary/60 mb-4">
                {step.step}
              </div>
              <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
