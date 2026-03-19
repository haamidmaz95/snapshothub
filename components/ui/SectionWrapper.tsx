import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}

export function SectionWrapper({ children, className, id, narrow }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("px-6 py-20 md:py-28", className)}>
      <div className={cn("mx-auto", narrow ? "max-w-3xl" : "max-w-6xl")}>
        {children}
      </div>
    </section>
  );
}
