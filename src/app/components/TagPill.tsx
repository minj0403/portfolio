type TagPillProps = {
  children: React.ReactNode;
  color?: "mint" | "green" | "blue" | "purple";
};

const colorMap = {
  mint: "bg-emerald-50 text-emerald-700 border-emerald-200",
  green: "bg-green-50 text-green-700 border-green-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
};

export function TagPill({ children, color = "green" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium
      ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
