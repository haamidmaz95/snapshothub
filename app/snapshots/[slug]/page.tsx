import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check, ExternalLink, Package } from "lucide-react";
import { SNAPSHOTS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SnapshotGraphic } from "@/components/ui/SnapshotGraphic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SNAPSHOTS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const snapshot = SNAPSHOTS.find((s) => s.slug === slug);
  if (!snapshot) return { title: "Snapshot Not Found" };

  return {
    title: `${snapshot.name} — SnapshotHub`,
    description: snapshot.description,
    openGraph: {
      title: `${snapshot.name} — SnapshotHub`,
      description: snapshot.description,
      type: "website",
    },
  };
}

export default async function SnapshotPage({ params }: PageProps) {
  const { slug } = await params;
  const snapshot = SNAPSHOTS.find((s) => s.slug === slug);

  if (!snapshot) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href="/#catalog"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Snapshots
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Thumbnail */}
            <div className="rounded-2xl overflow-hidden [&>div]:!h-64 md:[&>div]:!h-80">
              <SnapshotGraphic
                slug={snapshot.slug}
                gradient={snapshot.thumbnailGradient}
              />
            </div>

            {/* Title & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {snapshot.name}
                </h1>
                <Badge>{snapshot.category}</Badge>
              </div>
              <p className="text-foreground-muted leading-relaxed text-lg">
                {snapshot.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {snapshot.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-card-border bg-card/30 p-4"
                  >
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                What&apos;s Included
              </h2>
              <div className="flex flex-wrap gap-3">
                {snapshot.includes.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card/30 px-4 py-3"
                  >
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm p-6 space-y-6">
              <div>
                <div className="text-sm text-foreground-muted mb-1">Price</div>
                <div className="text-4xl font-bold text-primary">
                  ${snapshot.price}
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  One-time payment
                </div>
              </div>

              <a
                href={snapshot.ghlShareLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full" size="lg">
                  Install This Snapshot
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>

              <div className="border-t border-card-border pt-5 space-y-3">
                <div className="text-sm font-medium text-foreground">
                  This snapshot includes:
                </div>
                {snapshot.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground-muted"
                  >
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="border-t border-card-border pt-5">
                <div className="text-xs text-foreground-muted leading-relaxed">
                  Instant delivery via GHL share link. Requires an active
                  GoHighLevel account. Install into any sub-account in under
                  5 minutes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
