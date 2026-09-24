import { Download, Eye, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal className="glass-panel relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
        <div className="hero-aura pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative flex flex-col items-center">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-secondary/50 text-primary">
            <FileText className="size-5" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Resume / CV</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A full overview of my education, internships and projects in one document.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={profile.resumeViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Eye className="size-4" />
              View Resume
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              <Download className="size-4" />
              Download
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
