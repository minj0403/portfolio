import Link from "next/link";
import { Container } from "@/components/Container";
import { Polaroid } from "@/components/Polaroid";
import { site } from "@/data/site";
import { Linkedin, Mail, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--warm-bg)]">
      <main className="py-10 md:py-16">
        <Container>
          {/* Back to home */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span className="transition-transform group-hover:-translate-x-0.5">Home</span>
          </Link>

          {/* ABOUT */}
          <section className="mt-6 pb-16 min-h-[calc(100vh-120px)] flex items-start md:items-center">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[500px_1fr] md:items-center pt-6">
              {/* Left: Polaroid + links */}
              <div className="flex flex-col items-start">
                <Polaroid
                  src="/aboutme.jpg"
                  alt="Portrait of Min Jung"
                  className="ml-1"
                  rotateClassName="-rotate-2"
                />

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
                    <Mail
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                    <span className="transition-transform group-hover:translate-x-0.5">
                      Email
                    </span>
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
                    aria-label="Resume"
                  >
                    <FileText
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                    <span className="transition-transform group-hover:translate-x-0.5">
                      Resume
                    </span>
                  </a>
                </div>
              </div>

              {/* Right: text hierarchy */}
              <div className="flex flex-col justify-center md:-translate-y-10">
                <p className="text-[18px] font-bold text-zinc-800 md:text-[24px]">
                  Hi, I&apos;m Min Jung! 👋
                </p>
                <p className="mt-8 max-w-2xl text-[15px] leading-7 text-zinc-700 md:text-[17px] md:leading-8">
  I’m a designer and developer passionate about creating{" "}
  <strong className="font-semibold text-zinc-900">
    thoughtful, human-centered digital experiences
  </strong>
  . I care about building technology that feels intuitive, accessible, and meaningful.
</p>

<p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-700 md:text-[17px] md:leading-8">
  I’m currently studying{" "}
  <strong className="font-semibold text-zinc-900">
    Symbolic Systems
  </strong>{" "}
   with a concentration in {" "}
  <strong className="font-semibold text-zinc-900">Human-Computer Interaction</strong>{" "}
   at Stanford University. In my free time, I enjoy painting animals and shooting with film. 📷
</p>

<p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-700 md:text-[17px] md:leading-8">
  Feel free to reach out to me for collaborations, project ideas, or just to say
  hello ☺︎
</p>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
