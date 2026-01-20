type TagPillProps = {
  children: React.ReactNode;
  color?: "mint" | "green" | "blue" | "purple";
};

const colorMap = {
  mint: "bg-[#C4EBBD] text-black border-[#C4EBBD]",
  green: "bg-green-50 text-green-700 border-green-200",
  blue: "bg-[#F5B1B2] text-black border-[#F5B1B2]",
  purple: "bg-[#BDE6EB] text-black border-[#BDE6EB]",
};

export function TagPill({ children, color = "green" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium
      ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
