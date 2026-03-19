import { FadeIn } from "@/components/ui/FadeIn";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQ() {
  return (
    <SectionWrapper id="faq" narrow>
      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            Everything you need to know about our GHL snapshots.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Accordion items={FAQ_ITEMS} />
      </FadeIn>
    </SectionWrapper>
  );
}
