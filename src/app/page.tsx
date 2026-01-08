import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      <Nav />

      <main className="py-14 md:py-20">
        <Container>
          {/* Hero */}
          <div className="space-y-4">
            <p className="text-sm text-zinc-600">{site.location}</p>
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              {site.title}
            </h1>
            <p className="max-w-2xl text-base text-zinc-700 md:text-lg">
              {site.about.headline}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:border-zinc-300"
                href="#projects"
              >
                View projects
              </a>
              <a
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:border-zinc-300"
                href={`mailto:${site.email}`}
              >
                Contact
              </a>
              <a
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:border-zinc-300"
                href={site.links.resume}
              >
                Resume
              </a>
            </div>
          </div>

          {/* About */}
          <section id="about" className="mt-16 md:mt-20">
            <SectionHeader title="About" />
            <div className="max-w-3xl space-y-3 text-sm text-zinc-700 md:text-base">
              {site.about.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-16 md:mt-20">
            <SectionHeader
              title="Projects"
              description="Selected work across product design, prototyping, and interactive systems."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>

            <div className="mt-6">
              <a
                className="text-sm text-zinc-600 hover:text-zinc-900 underline underline-offset-4"
                href="/projects"
              >
                View all projects →
              </a>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mt-16 md:mt-20">
            <SectionHeader
              title="Experience"
              description="Research, leadership, and shipping real work."
            />
            <div className="grid grid-cols-1 gap-4">
              {experience.map((e) => (
                <ExperienceItem key={`${e.org}-${e.role}`} item={e} />
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 border-t border-zinc-100 pt-8 text-sm text-zinc-600">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>© {new Date().getFullYear()} {site.name}</div>
              <div className="flex gap-4">
                <a className="hover:text-zinc-900" href={site.links.linkedin}>
                  LinkedIn
                </a>
                <a className="hover:text-zinc-900" href={site.links.github}>
                  GitHub
                </a>
                <a className="hover:text-zinc-900" href={`mailto:${site.email}`}>
                  Email
                </a>
              </div>
            </div>
          </footer>
        </Container>
      </main>
    </div>
  );
}
