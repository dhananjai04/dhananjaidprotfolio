import { Activity, CheckCircle2, Cpu, Rocket, UserRound } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work"
        description="A closer look at what I've built, how it works and where it's heading."
      />

      <div className="mt-14 space-y-8">
        {projects.map((project) => (
          <Reveal as="article" key={project.name}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-10">
              <div
                className="hero-aura pointer-events-none absolute inset-0 opacity-70"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary/30 bg-secondary/50 text-primary">
                    <Activity className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold sm:text-3xl">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.summary}</p>
                  </div>
                </div>

                <p className="mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>

                <div className="mt-8">
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <Cpu className="size-4 text-primary" />
                    Technologies & components
                  </h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs text-foreground/90"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-background/40 p-6">
                    <h4 className="flex items-center gap-2 text-sm font-semibold">
                      <CheckCircle2 className="size-4 text-primary" />
                      Key features
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/40 p-6">
                    <h4 className="flex items-center gap-2 text-sm font-semibold">
                      <UserRound className="size-4 text-accent" />
                      My contribution
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.contribution}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/40 p-6">
                    <h4 className="flex items-center gap-2 text-sm font-semibold">
                      <Rocket className="size-4 text-accent" />
                      Future improvements
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {project.future.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
