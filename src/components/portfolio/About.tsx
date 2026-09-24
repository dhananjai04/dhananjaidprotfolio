import { GraduationCap, Target } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="About"
        title="A student engineer, learning by building"
        description="Curious about how systems work — and how they break."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        <Reveal className="glass-panel rounded-3xl p-7 sm:p-9 lg:col-span-3">
          <div className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:col-span-2">
          <Reveal delay={80} className="glass-panel rounded-3xl p-7">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="mt-4 text-base font-semibold">Education</h3>
            <p className="mt-3 text-sm font-medium text-foreground">
              {profile.education.degree}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.education.institution}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.education.graduation}
            </p>
          </Reveal>

          <Reveal delay={160} className="glass-panel rounded-3xl p-7">
            <Target className="size-5 text-accent" />
            <h3 className="mt-4 text-base font-semibold">Career goal</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To become a skilled Software Engineer and Ethical Hacker.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
