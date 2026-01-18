import HoverVideo from "@/components/HoverVideo";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const isPillPal = slug === "pillpal";

  return (
    <>
      {/* HEADER */}
      <header className="bg-[var(--warm-bg)]">
        <div className="px-6 py-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            <span className="transition-transform group-hover:-translate-x-0.5">
              Home
            </span>
          </Link>
        </div>
      </header>

      <main className="bg-[var(--warm-bg)]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* HERO */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              {/* Logo */}
              <div className="relative h-10 w-[200px]">
                <Image
                  src="/projects/pillpal-logo.png"
                  alt="Pill Pal"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title */}
              <h1 className="mt-4 text-center text-3xl font-semibold tracking-tight md:text-4xl">
                Voice-Enabled Medication Tracker App
              </h1>
            </div>
          </div>

          {/* Pill Pal hero image */}
          <div className="mt-10 overflow-hidden rounded-xl bg-white/60">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/projects/pillpal.png"
                alt="Pill Pal app mockup"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* PILLPAL: replace entire body with long PNG + video */}
          {isPillPal ? (
            <>
              {/* Long PNG 1 */}
              <LongSlide
                src="/projects/pillpal-page-1.png"
                alt="Pill Pal project page (slide 1)"
              />

              {/* Video */}
              <div className="mt-10 overflow-hidden rounded-xl bg-black">
                <HoverVideo
                  src="/projects/pillpal-demo.mp4"
                  className="w-full aspect-video cursor-pointer"
                />
              </div>
            </>
          ) : (
            <>
              {/* For other projects: keep whatever written Sections you want */}
              <Section title="Overview">
                <p className="max-w-3xl leading-7">
                  {/* placeholder — you can keep your existing content here */}
                  {project.description ?? "Project overview coming soon."}
                </p>
              </Section>
            </>
          )}
          {/* Second long PNG */}
          <LongSlide
            src="/projects/pillpal-page-2.png"
            alt="Pill Pal project page (slide 2)"
          />

          {/* Poster PDF link */}
          <p className="mt-6 text-center text-sm text-zinc-800">
            <a
              href="/projects/pillpal-poster.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900"
            >
              View project poster (PDF)
            </a>
          </p>

          {/* Third long PNG */}
          <LongSlide
            src="/projects/pillpal-page-3.png"
            alt="Pill Pal project page (slide 3)"
          />

          {/* Fourth long PNG */}
          <LongSlide
            src="/projects/pillpal-page-4.png"
            alt="Pill Pal project page (slide 4)"
          />

          {/* Fifth long PNG */}
          <LongSlide
            src="/projects/pillpal-page-5.png"
            alt="Pill Pal project page (slide 5)"
          />

          {/* spreadsheet link */}
          <p className="mt-6 text-center text-sm text-zinc-800">
            <a
              href="https://docs.google.com/spreadsheets/d/1p1itdZh_1XpBbNxaY_1LlPAIanpug1Gu8nHDKWLyU8Y/edit?gid=1916536935#gid=1916536935"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900"
            >
              View how I synthesized user testing results!
            </a>
          </p>

          {/* 6th long PNG */}
          <LongSlide
            src="/projects/pillpal-page-6.png"
            alt="Pill Pal project page (slide 6)"
          />

          {/* 7th long PNG */}
          <LongSlide
            src="/projects/pillpal-page-7.png"
            alt="Pill Pal project page (slide 7)"
          />

          {/* Github repo link */}
          <p className="mt-6 text-center text-sm text-zinc-800">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900"
            >
              View github repo
            </a>
          </p>

          {/* 8th long PNG */}
          <LongSlide
            src="/projects/pillpal-page-8.png"
            alt="Pill Pal project page (slide 8)"
          />

          {/* expogo link */}
          <p className="mt-6 text-center text-sm text-zinc-800">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900"
            >
              Try Pill Pal on Expo!
            </a>
          </p>

          {/* 9th long PNG */}
          <LongSlide
            src="/projects/pillpal-page-9.png"
            alt="Pill Pal project page (slide 9)"
          />

          {/* final report link */}
          <p className="mt-6 text-center text-sm text-zinc-800">
            <a
              href="/projects/pillpal-final-report.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900"
            >
              View final report
            </a>
          </p>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-20 text-center">
        <p className="text-lg font-medium">Thank you for your interest in my work!</p>
        <p className="mt-2 text-sm">Made with Figma & React. © 2025 Min Jung</p>
      </footer>
    </>
  );
}

function LongSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl bg-white/60">
      {/* <img> is best for extremely tall “scroll page” PNGs */}
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 space-y-6 text-zinc-700">{children}</div>
    </section>
  );
}