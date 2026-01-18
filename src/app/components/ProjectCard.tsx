import Link from "next/link";
import type { Project } from "../data/projects";
import { TagPill } from "../components/TagPill";

export function ProjectCard({ project }: { project: Project }) {
  const isPillPal = project.slug === "pillpal";

  return (
    <div className="rounded-2xl border border-zinc-300/70 bg-white/70 p-6 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* LEFT: Image */}
        <div className="w-full sm:w-100">
          <div className="h-70 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 sm:h-[340px]">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        {/* RIGHT: Content (centered vertically) */}
        <div className="flex flex-1 flex-col justify-center">

          {/* Title */}
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-1xl">
            {project.title}
          </h3>

          {/* Role (subheading) */}
          <p className="mt-2 text-sm font-semibold text-zinc-800 sm:text-md">
            UI Designer &amp; Mobile App Developer
          </p>

          {/* Description */}
          <p className="mt-4 inline-black text-sm font-medium text-zinc-700">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag} color={project.tagColor}>
                {tag}
              </TagPill>
            ))}
          </div>
          {/* Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="mt-6 inline-block text-base font-medium text-zinc-900 hover:underline"
          >
            View project →
          </Link>
        </div>
      </div>
    </div>
  );
}