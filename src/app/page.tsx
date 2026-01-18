import Image from "next/image";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { Linkedin, Mail, FileText } from "lucide-react";
import { ExperienceRow } from "@/components/ExperienceRow";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Background wrapper (everything except footer) */}
      <div className="bg-[var(--warm-bg)] pb-24 md:pb-32">
        <Nav />

        <main className="py-10 md:py-16">
          <Container>
            {/* ABOUT */}
            <section className="mt-1 pb-16 min-h-[calc(100vh-64px)] flex items-start md:items-center">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:items-center pt-6 -translate-y-10">
                {/* Left: Polaroid + links */}
                <div className="flex flex-col items-start">
                  <div className="polaroid rounded-md border border-zinc-300/70 bg-white p-3 shadow-sm">
                    <div className="relative h-[240px] w-[220px] overflow-hidden rounded-sm bg-zinc-100">
                      <Image
                        src="/me.jpg"
                        alt="Portrait of Min Jung"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="mt-3 h-6" />
                  </div>

                  {/* icon links */}
                  <div className="mt-6 flex flex-col gap-3 translate-x-20">
                    <a
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
                      aria-label="LinkedIn"
                    >
                      <Linkedin
                        size={18}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                      <span className="transition-transform group-hover:translate-x-0.5">
                        LinkedIn
                      </span>
                    </a>

                    <a
                      href={`mailto:${site.email}`}
                      className="group flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
                      aria-label="Email"
                    >
                      <Mail size={18} className="transition-transform group-hover:translate-x-0.5" />
                      <span className="transition-transform group-hover:translate-x-0.5">Email</span>
                    </a>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
                      aria-label="Resume"
                    >
                      <FileText size={18} className="transition-transform group-hover:translate-x-0.5" />
                      <span className="transition-transform group-hover:translate-x-0.5">Resume</span>
                    </a>
                  </div>
                </div>

                {/* Right: text hierarchy */}
                <div className="flex flex-col justify-center -translate-y-10">
                  <p className="text-[18px] font-bold text-zinc-800 md:text-[24px]">
                    Hello! I&apos;m
                  </p>
                  <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                    Min Jung
                  </h1>
                  <p className="mt-8 max-w-2xl text-[15px] leading-7 text-zinc-700 md:text-[17px] md:leading-8">
                    I&apos;m a{" "}
                    <span className="highlight relative inline-block">
                        designer and developer
                        <svg
                          className="absolute left-0 -bottom-1 w-full h-4"
                          viewBox="0 0 200 20"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                        <path
                          d="
                            M0 10
                            Q10 3, 20 10
                            T40 10
                            T60 10
                            T80 10
                            T100 10
                            T120 10
                            T140 10
                            T160 10
                            T180 10
                            T200 10
                          "
                          fill="none"
                          stroke="#e63946"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="
                            M0 10
                            Q10 3, 20 10
                            T40 10
                            T60 10
                            T80 10
                            T100 10
                            T120 10
                            T140 10
                            T160 10
                            T180 10
                            T200 10
                          "
                          fill="none"
                          stroke="#e63946"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* subtle “ink wobble” overlay */}
                        <path
                          d="
                            M0 11
                            Q10 4, 20 11
                            T40 11
                            T60 11
                            T80 11
                            T100 11
                            T120 11
                            T140 11
                            T160 11
                            T180 11
                            T200 11
                          "
                          fill="none"
                          stroke="#e63946"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.35"
                        />
                      </svg>
                    </span>{" "}
                    studying{" "}
                    <span className="font-semibold text-zinc-900">
                      Symbolic Systems (Human-Computer Interaction)
                    </span>{" "}
                    at Stanford University.
                  </p>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="mt-6 md:mt-10">
              <SectionHeader title="Projects"/>
              <div className="grid grid-cols-1 gap-5">
                {featuredProjects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
             <section id="experience" className="mt-60">
              <SectionHeader title="Experience" />

              <div className="mt-8 border-b border-zinc-300/70">
                <ExperienceRow
                  role="Product Designer"
                  org="Stanford Carta"
                  orgLink="https://carta-dev-trailblazer.stanford.edu"
                  timeframe="Jan 2025 – Present"
                />

                <ExperienceRow
                  role="Web Designer & Developer"
                  org="Stanford MINT Magazine"
                  orgLink="https://www.stanford-mint.com"
                  timeframe="Oct 2025 – Present"
                />

                <ExperienceRow
                  role="Software Engineer (Data & ML Systems)"
                  org="Poldrack Lab @ Stanford"
                  orgLink="https://www.poldracklab.org"
                  timeframe="Sep 2025 – Jan 2026"
                />
              </div>

              {/* Tools image */}
              <div className="mt-10 overflow-hidden rounded-xl bg-white/60">
                <img
                  src="/tools.png"
                  alt="Tools and technologies"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </section>
          </Container>
        </main>
      </div>

      {/* FOOTER (outside warm background) */}
      <footer className="bg-white py-20 text-center">
        <p className="text-lg font-medium text-black">
          Thank you for your interest in my work!
        </p>
        <p className="mt-2 text-sm text-black">
          Made with Figma & React. © 2025 Min Jung
        </p>
      </footer>
    </div>
  );
}