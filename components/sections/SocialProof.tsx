import { Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/data";

export function SocialProof() {
  return (
    <SectionWrapper>
      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">Agency Owners</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            Hear from GHL professionals who saved hours with our pre-built
            snapshots.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm p-6 h-full flex flex-col">
              <Quote className="h-8 w-8 text-primary/30 mb-4 shrink-0" />
              <p className="text-foreground-muted leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-foreground-muted">
                  {t.title} &middot; {t.industry}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
