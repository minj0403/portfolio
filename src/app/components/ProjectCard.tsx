import type { Project } from "@/data/projects";
import { TagPill } from "@/components/TagPill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="cardHover rounded-2xl border border-zinc-300/70 bg-white/70 p-4 shadow-sm">
      <div className="rounded-2xl border border-zinc-300/70 bg-white/70 p-4 shadow-sm">
        {/* Image slot */}
        <div className="h-44 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover"
      />
    )}
  </div>
        <div className="mt-4">
          <h3 className="mt-1 text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          {/* View more link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline"
            >
              View project →
            </a>
          )}
          
        </div>
      </div>
    </div>
  );
}
