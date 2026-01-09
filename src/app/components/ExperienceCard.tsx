import type { Experience } from "@/data/experience";
import { TagPill } from "@/components/TagPill";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-zinc-300/70 bg-white/70 p-4 shadow-sm">
      {/* Image slot */}
      <div className="h-44 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        {item.image && (
          <img
            src={item.image}
            alt={`${item.org} preview`}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="mt-4">
        <p className="text-xs text-zinc-500">{item.timeframe}</p>

        <h3 className="mt-1 text-base font-semibold tracking-tight">
          {item.org}
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.location && <TagPill>{item.location}</TagPill>}
        </div>

        {/* View more link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline"
          >
            View more →
          </a>
        )}
      </div>
    </div>
  );
}
