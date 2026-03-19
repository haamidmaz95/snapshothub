import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Stop Building
            <br />
            <span className="text-primary">From Scratch?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-foreground-muted mb-10 max-w-xl mx-auto">
            Pick a snapshot, install it in 60 seconds, and spend your time on
            what actually matters — growing your business.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a href="#catalog">
            <Button size="lg">
              Browse All Snapshots
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
