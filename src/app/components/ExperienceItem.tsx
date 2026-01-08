import type { Experience } from "@/data/experience";
import { TagPill } from "@/components/TagPill";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-base font-medium tracking-tight">{item.org}</div>
          <div className="mt-1 text-sm text-zinc-600">{item.role}</div>
        </div>
        <div className="text-xs text-zinc-500">{item.timeframe}</div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.location ? <TagPill>{item.location}</TagPill> : null}

        {item.link ? (
          <a
            className="text-xs text-zinc-600 hover:text-zinc-900 underline underline-offset-4"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        ) : null}
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
