export function SectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-800">
        {title}
      </h2>
    </div>
  );
}

