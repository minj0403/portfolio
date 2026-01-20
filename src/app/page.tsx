import Image from "next/image";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { Linkedin, Mail, FileText } from "lucide-react";
import { ExperienceRow } from "@/components/ExperienceRow";
import { Polaroid } from "@/components/Polaroid";
import { HeroFront } from "@/components/HeroFront";
import PolaroidCard from "@/components/PolaroidCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Background wrapper (everything except footer) */}
      <div className="pb-24 md:pb-32">
        <Nav />

        <main className="py-10 md:py-16">
          <Container>
            <HeroFront
              photoA="/hero/photo-a.jpg"
              photoB="/hero/photo-b.jpg"
              memo="/hero/memo.jpg"
            />
            
            {/* PROJECTS */}
            <section id="projects" className="mt-6 md:mt-10">
              <SectionHeader title="Projects"/>
              <div className="mt-[-0px] space-y-[-50px]">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
             <section id="experience" className="mt-20 md:mt-28">
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
              <div className="mt-10 rounded-xl bg-white/60">
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