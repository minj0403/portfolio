export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium tracking-tight">{title}</h2>
      {description ? (
        <p className="mt-1 text-sm text-zinc-600">{description}</p>
      ) : null}
    </div>
  );
}
