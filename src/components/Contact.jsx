import { BriefcaseBusiness, Camera, Code2, Mail } from "lucide-react";
import Reveal from "./Reveal";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arinda-setyo-rini",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    href: "https://github.com/arindasr",
    icon: Code2,
  },
  {
    label: "Email",
    href: "mailto:aaarindasr@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arindastyrn?igsh=MWIxeGtwM2FnYnY3bQ%3D%3D&utm_source=qr",
    icon: Camera,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-black/10 dark:border-white/10"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal as="div" variant="left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s connect and build something meaningful.
          </h2>
          <p className="mt-6 leading-7 text-black/65 dark:text-white/65">
            I'm open to freelance projects, collaborations, and opportunities to
            create impactful digital experiences and meaningful insights.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <Reveal
                as="a"
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                variant="soft"
                delay={index * 90}
                className="group flex flex-col justify-between gap-3 border border-black/15 p-5 transition hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:hover:border-white dark:hover:bg-white dark:hover:text-black sm:flex-row sm:items-center"
              >
                {/* Layout baru: logo di kiri, teks di kanan */}
                <div className="flex w-full items-center justify-between">
                  <Icon className="h-5 w-5 text-black/45 transition group-hover:text-white/70 dark:text-white/45 dark:group-hover:text-black/70" />
                  <span className="font-semibold">{contact.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
