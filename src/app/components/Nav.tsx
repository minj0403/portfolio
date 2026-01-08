import Link from "next/link";
import { site } from "@/data/site";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="text-sm font-medium tracking-tight">
          {site.name}
        </Link>

        <div className="flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}

          <a
            href={site.links.resume}
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
