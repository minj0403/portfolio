import Link from "next/link";
import { Project } from "@/data/projects";
import { ProjectPolaroid } from "@/components/ProjectPolaroid";
import { TagPill } from "@/components/TagPill";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const href = `/projects/${project.slug}`;
  const cover = project.image && project.image.trim() ? project.image : "/projects/placeholder.png";

  return (
    <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-[520px_minmax(0,1fr)] md:items-center">
      {/* LEFT */}
      <div className="flex justify-center md:justify-start md:-ml-[-30px] md:shrink-0">
        <ProjectPolaroid
          href={href}
          src={cover}
          alt={project.title}
          imgClassName="w-[420px] md:w-[400px] max-w-[90vw] h-auto"
          rotateClassName="-rotate-0"
        />
      </div>

      {/* RIGHT */}
      <div className="min-w-0 md:-ml-20 max-w-xl">
        <Link href={href} className="group inline-block">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
            {project.title}
          </h3>
        </Link>

        {project.role ? (
          <p className="mt-3 text-lg font-semibold text-zinc-900">
            {project.role}
          </p>
        ) : null}

        {project.description ? (
          <p className="mt-4 text-[16px] leading-7 text-zinc-700 whitespace-normal break-words">
            {project.description}
          </p>
        ) : null}

        {project.tags?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <TagPill key={tag} color={project.tagColor}>
                {tag}
              </TagPill>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
