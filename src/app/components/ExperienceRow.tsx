type ExperienceRowProps = {
  role: string;
  timeframe: string;
  org: string;
  orgLink?: string;
};

export function ExperienceRow({
  role,
  timeframe,
  org,
  orgLink,
}: ExperienceRowProps) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-zinc-300/70 py-6 md:grid-cols-3 md:items-center">
      {/* Role */}
      <p className="font-semibold text-zinc-900">
        {role}
      </p>

      {/* Timeframe */}
      <p className="text-sm text-zinc-600 md:text-center">
        {timeframe}
      </p>

      {/* Organization (clickable with arrow) */}
      <div className="text-sm text-zinc-600 md:text-right">
        {orgLink ? (
          <a
            href={orgLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 font-medium text-zinc-700 underline underline-offset-4 transition-colors hover:text-zinc-900"
          >
            <span>{org}</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        ) : (
          <span className="font-medium text-zinc-700">{org}</span>
        )}
      </div>
    </div>
  );
}