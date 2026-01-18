type SectionHeaderProps = {
  title: string;
  variant?: "plain" | "circle";
};

export function SectionHeader({ title, variant = "plain" }: SectionHeaderProps) {
  return (
    <div className="mb-8 text-center">
      {variant === "circle" ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          <span className="relative inline-block px-3 py-2">
            {title}

            {/* Pen circle animation */}
            <svg
              className="heading-circle pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 220 70"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M18 35
                   C18 12, 202 12, 202 35
                   C202 58, 18 58, 18 35 Z"
                fill="none"
                stroke="#e63946"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* subtle ink wobble overlay */}
              <path
                d="M20 36
                   C22 14, 200 14, 200 36
                   C198 56, 22 56, 20 36 Z"
                fill="none"
                stroke="#e63946"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
              />
            </svg>
          </span>
        </h2>
      ) : (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          {title}
        </h2>
      )}
    </div>
  );
}
