import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, FileTextIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import { AgentChat } from "@/components/agent-chat";
import { ContactForm, CopyEmail } from "@/components/site/contact-form";
import { Nav } from "@/components/site/nav";
import { Button } from "@/components/ui/button";
import { experiences, profile, projects, skillGroups } from "@/lib/info";
import portrait from "../../public/profile-squared.png";

function SectionHeading({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="eyebrow flex items-center justify-between border-b pb-2.5">
        <span>{eyebrow}</span>
      </div>
      <h2 id={id} className="max-w-2xl text-[1.9rem] leading-tight font-normal tracking-[-0.02em] md:text-[2.2rem]">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-4 pt-10 pb-24 md:gap-36 md:px-6 md:pt-16">
        {/* Hero */}
        <section aria-labelledby="intro" className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
          <div className="flex flex-col gap-6 lg:pt-6">
            <Link
              href="https://clear.ai"
              target="_blank"
              className="group flex w-fit items-center gap-2 rounded-full border bg-card py-1 pr-3 pl-1 text-[13px] text-text-secondary transition-colors hover:text-foreground"
            >
              <span className="rounded-full bg-cobalt-soft px-2 py-0.5 font-mono text-[10.5px] tracking-wider text-cobalt uppercase">Now</span>
              <span className="sm:hidden">Engineer & Product Owner, Clear.ai</span>
              <span className="hidden sm:inline">Engineer & Technical Product Owner at Clear.ai</span>
              <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <h1 id="intro" className="text-[2.35rem] leading-[1.08] font-light tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">
              I build AI software that does real work in{" "}
              <em className="font-serif font-normal italic">freight and customs.</em>
            </h1>

            <p className="max-w-[54ch] text-[17px] leading-relaxed text-text-secondary">
              I&apos;m Patrick, an early engineer and technical product owner at Clear.ai in Sydney. I ship full-stack logistics products and the AI agents
              inside them. Lately: TariffChat™, used by 400+ customs brokers at 100+ organisations across APAC.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Button asChild variant="outline" className="h-9 rounded-full bg-card px-4">
                <Link href={profile.resume} target="_blank">
                  <FileTextIcon /> Résumé
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
                <Link href={profile.github} target="_blank" aria-label="GitHub">
                  <FaGithub />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
                <Link href={profile.linkedin} target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
                <Link href={profile.youtube} target="_blank" aria-label="YouTube">
                  <FaYoutube />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
              <Image src={portrait} alt="Portrait of Patrick Nguyen" width={44} height={44} className="size-11 rounded-full border object-cover" priority />
              <span>
                CS (Advanced) with distinction, Western Sydney University.
                <br className="hidden sm:block" /> Writing code since 2017, starting with Pascal in Vietnam.
              </span>
            </div>
          </div>

          <AgentChat className="h-[480px] sm:h-[520px] lg:h-[560px]" />
        </section>

        {/* Selected work */}
        <section aria-labelledby="work" className="flex flex-col gap-8 scroll-mt-20">
          <SectionHeading id="work" eyebrow="Selected work" title="Things I've built, at work and on weekends" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const body = (
                <>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-surface-sunk">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full flex-col justify-end gap-1 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:14px_14px] p-4">
                        <span className="font-serif text-2xl text-foreground italic">{project.title}</span>
                        <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">{project.label}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 px-1 pb-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-medium">{project.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">{project.year}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">{project.summary}</p>
                    {project.stack.length > 0 && <p className="pt-1 font-mono text-xs text-muted-foreground">{project.stack.join(" · ")}</p>}
                  </div>
                </>
              );
              return (
                <li key={project.title}>
                  {project.link ? (
                    <Link
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      className="group flex h-full flex-col gap-3 rounded-lg border bg-card p-2 transition-colors hover:border-input focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="group flex h-full flex-col gap-3 rounded-lg border bg-card p-2">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience" className="flex flex-col gap-8 scroll-mt-20">
          <SectionHeading id="experience" eyebrow="Experience" title="From retail floors to an AI-native logistics startup" />
          <ol className="flex flex-col">
            {experiences.map((job) => (
              <li key={`${job.company}-${job.role}`} className="grid gap-2 border-b py-6 first:pt-0 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
                <div className="flex flex-col gap-0.5 font-mono text-xs text-muted-foreground tabular-nums">
                  <span>{job.date}</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[17px] font-medium">
                    {job.role} <span className="font-normal text-muted-foreground">· {job.company}</span>
                  </h3>
                  <ul className="flex max-w-[68ch] flex-col gap-1.5 text-[15px] leading-relaxed text-text-secondary">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((s) => (
                      <span key={s} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            <li className="grid gap-2 py-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
              <span className="font-mono text-xs text-muted-foreground tabular-nums">2020 – 2024</span>
              <p className="max-w-[68ch] text-[15px] leading-relaxed text-text-secondary">
                Before software, I sold fragrance at Myer and David Jones and worked at Swarovski while studying, and ran statistics study
                sessions at WSU. Those jobs taught me to listen to the person in front of me first.
              </p>
            </li>
          </ol>
        </section>

        {/* Stack */}
        <section aria-labelledby="stack" className="flex flex-col gap-8 scroll-mt-20">
          <SectionHeading id="stack" eyebrow="Stack" title="Tools I reach for" />
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-2.5">
                <dt className="eyebrow">{group.label}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border bg-card px-2.5 py-1 text-sm">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact" className="grid gap-10 scroll-mt-20 lg:grid-cols-2 lg:gap-14">
          <SectionHeading id="contact" eyebrow="Contact" title="Building something in logistics or AI? Let's talk.">
            <p className="max-w-[48ch] text-[15px] leading-relaxed text-text-secondary">
              Send a note here or email me directly. I&apos;m also happy to chat with students and new grads breaking into software.
            </p>
            <div className="pt-2">
              <CopyEmail />
            </div>
          </SectionHeading>
          <div className="rounded-xl border bg-surface-sunk p-5 md:p-6 lg:mt-10">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:px-6">
          <span>© {new Date().getFullYear()} Patrick Nguyen · Sydney</span>
        </div>
      </footer>
    </>
  );
}
