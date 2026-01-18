import Link from "next/link";
import { Container } from "@/components/Container";

export default function AboutPage() {
  return (
    <div className="bg-[var(--warm-bg)] min-h-screen">
      <main className="py-10 md:py-16">
        <Container>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span className="transition-transform group-hover:-translate-x-0.5">Home</span>
          </Link>

          <h1 className="mt-10 text-4xl font-semibold tracking-tight md:text-5xl">
            About
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-700 md:text-[17px] md:leading-8">
            {/* Replace this with your About copy */}
            I’m Min Jung, a designer and developer studying Symbolic Systems (HCI) at Stanford.
            I care about building products that feel calm, accessible, and intentional.
          </p>
        </Container>
      </main>
    </div>
  );
}