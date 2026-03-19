"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import type { Snapshot } from "@/lib/types";

interface SnapshotCardProps {
  snapshot: Snapshot;
}

export function SnapshotCard({ snapshot }: SnapshotCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/snapshots/${snapshot.slug}`}
        className="group block rounded-2xl border border-card-border bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      >
        {/* Thumbnail */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${snapshot.thumbnailGradient[0]}, ${snapshot.thumbnailGradient[1]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative flex flex-col items-center gap-2">
            <div className="w-48 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="space-y-1.5 px-3 w-full">
                <div className="h-2 bg-white/30 rounded-full w-3/4" />
                <div className="h-2 bg-white/20 rounded-full w-1/2" />
                <div className="h-2 bg-white/20 rounded-full w-5/6" />
                <div className="h-1.5 bg-white/10 rounded-full w-2/3 mt-2" />
                <div className="h-1.5 bg-white/10 rounded-full w-1/2" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <Badge>{snapshot.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1.5">
            {snapshot.name}
          </h3>
          <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2 mb-4">
            {snapshot.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${snapshot.price}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground-muted group-hover:text-primary transition-colors">
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
