import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { contact } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s+/g, "")}`,
  },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: contact.linkedin },
  { icon: Github, label: "GitHub", value: "View my GitHub", href: contact.github },
  { icon: Instagram, label: "Instagram", value: "Follow on Instagram", href: contact.instagram },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Open to internships, collaborations and conversations about security and software."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item.label} delay={i * 70}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="group glass-panel flex h-full items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/40">
                <item.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <span className="block truncate text-sm font-medium">{item.value}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhananjai D
        </p>
        <ul className="flex items-center gap-3">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <item.icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
