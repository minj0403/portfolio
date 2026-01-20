import Link from "next/link";
import Image from "next/image";

export default function GridPage() {
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
              <div className="relative h-10 w-[300px]">
                <Image
                  src="/projects/shapelablogo.png"
                  alt="Pill Pal"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title */}
              <h1 className="mt-4 text-center text-3xl font-semibold tracking-tight md:text-4xl">
                Multimodal iPadOS Development
              </h1>
            </div>
          </div>

          {/* Pill Pal hero image */}
          <LongSlide
            src="/projects/shapelab-page-0.png"
            alt="shape lab project page (slide 0)"
          />

          {/* insert video clip here */}

          {/* 1st long PNG */}
          <LongSlide
            src="/projects/shapelab-page-1.png"
            alt="shape lab project page (slide 1)"
          />

          {/* Research paper PDF link */}
          <p className="mt-6 text-center text-sm text-zinc-800">
            <a
              href="/projects/pillpal-poster.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900"
            >
              View Research Paper (PDF)
            </a>
          </p>

          {/* 2nd long PNG */}
          <LongSlide
            src="/projects/shapelab-page-2.png"
            alt="shape lab project page (slide 2)"
          />

          {/* 3rd long PNG */}
          <LongSlide
            src="/projects/shapelab-page-3.png"
            alt="Pill Pal project page (slide 3)"
          />
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