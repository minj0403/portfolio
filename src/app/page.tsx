import Image from "next/image";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { Linkedin, Mail, Github } from "lucide-react";

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
                  <div className="rounded-md border border-zinc-300/70 bg-white p-3 shadow-sm">
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
                      className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                      <span>Email</span>
                    </a>

                    <a
                      href={site.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
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
                    <span className="highlight">
                      designer and developer
                      <svg
                        className="underline"
                        viewBox="0 0 200 20"
                        preserveAspectRatio="none"
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
              <SectionHeader title="Projects" />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {featuredProjects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="mt-20 md:mt-36">
              <SectionHeader title="Experience" />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {experience.map((e) => (
                  <ExperienceCard key={`${e.org}-${e.role}`} item={e} />
                ))}
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