import Link from "next/link";
import type { Project } from "@/data/projects";
import { TagPill } from "@/components/TagPill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600">{project.description}</p>
        </div>
        <div className="shrink-0 text-xs text-zinc-500">{project.timeframe}</div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>

      <div className="mt-4 text-sm text-zinc-600">
        <span className="text-zinc-900">Role:</span> {project.role}
      </div>

      <div className="mt-4 text-sm text-zinc-500 group-hover:text-zinc-700">
        View case study →
      </div>
    </Link>
  );
}
