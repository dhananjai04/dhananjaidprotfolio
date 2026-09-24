import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28"
    >
      <SectionHeading eyebrow="Experience" title="Internships" />

      <ol className="relative mx-auto mt-14 max-w-3xl space-y-8 border-l border-border pl-8">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.company} delay={i * 100} className="relative">
            <span className="absolute -left-[41px] top-6 flex size-5 items-center justify-center rounded-full border border-primary/50 bg-background">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <div className="glass-panel rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <Briefcase className="size-4 text-primary" />
                <h3 className="text-base font-semibold">{item.company}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.role} · {item.mode}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
