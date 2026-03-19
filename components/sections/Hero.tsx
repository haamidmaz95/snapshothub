import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[200px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center pt-20">
        <div className="animate-[fadeInUp_0.6s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            25+ Industry Snapshots Available
          </div>
        </div>

        <div className="animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Pre-Built GHL Systems
            <br />
            <span className="text-primary">for Every Industry</span>
          </h1>
        </div>

        <div className="animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
          <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop building from scratch. Install a complete CRM, pipeline,
            automation, and funnel system in under 5 minutes.
          </p>
        </div>

        <div className="animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#catalog">
              <Button size="lg">
                Browse Snapshots
                <ArrowDown className="h-5 w-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="secondary" size="lg">
                How It Works
              </Button>
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
          <div className="mt-16 pt-8 border-t border-card-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
