import { ArrowRight, Download, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import portraitAsset from "@/assets/dhananjai-portrait.jpeg.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-aura pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
        <Reveal className="flex flex-col items-center text-center">
          <div className="glow-ring mb-8 size-40 overflow-hidden rounded-full border-2 border-primary/50 bg-surface p-1 sm:size-48">
            <img
              src={portraitAsset.url}
              alt="Dhananjai D"
              className="size-full rounded-full object-cover object-[center_36%]"
            />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            B.Tech CSE Student · MBITS · 2028
          </span>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            {profile.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground/90">
            {profile.intro}
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="glow-ring group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              icon: ShieldCheck,
              title: "Cybersecurity focus",
              text: "Learning security concepts and ethical hacking practice.",
            },
            {
              icon: GraduationCap,
              title: "MBITS · 2028",
              text: "B.Tech Computer Science Engineering.",
            },
            {
              icon: Sparkles,
              title: "Builds & experiments",
              text: "Practical projects across web, AI and hardware.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-panel rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
