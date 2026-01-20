import Image from "next/image";
import Link from "next/link";

type ProjectPolaroidProps = {
  href: string;
  src: string;
  alt: string;
  className?: string;       // wrapper positioning
  imgClassName?: string;    // control size here
  rotateClassName?: string; // default slight tilt
};

export function ProjectPolaroid({
  href,
  src,
  alt,
  className = "",
  imgClassName = "w-[520px] max-w-[92vw] h-auto",
  rotateClassName = "-rotate-1",
}: ProjectPolaroidProps) {
  // Safety: never render next/image with empty src
  if (!src) return null;

  return (
    <Link
      href={href}
      className={`group inline-block ${rotateClassName} ${className}`}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        priority={false}
        className={`
          ${imgClassName}
          transition-transform duration-200 ease-out
          group-hover:-translate-y-[6px] group-hover:rotate-[-1deg]
          drop-shadow-[0_3px_3px_rgba(0,0,0,0.18)]
          group-hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
          select-none
        `}
      />
    </Link>
  );
}
