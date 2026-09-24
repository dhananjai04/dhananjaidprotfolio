import { Bot, Code2, PenTool, ShieldCheck, Terminal, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [ShieldCheck, Terminal, PenTool, Code2, Bot, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="Areas I'm actively developing"
        description="These are learning tracks, not claims of mastery — each one is a space I keep practising in."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => {
          const Icon = icons[i % icons.length] ?? ShieldCheck;
          return (
            <Reveal as="li" key={skill.title} delay={i * 70}>
              <div className="group glass-panel h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/40">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {skill.level}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
