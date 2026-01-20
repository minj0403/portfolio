import Image from "next/image";
import Link from "next/link";

type PolaroidCardProps = {
  href: string;
  src: string;
  alt: string;
};

export default function PolaroidCard({
  href,
  src,
  alt,
}: PolaroidCardProps) {
  return (
    <Link href={href} className="group relative inline-block -rotate-1">
      {/* paperclip */}
      <div
        className="
          absolute left-[20px] -top-20 z-20 -rotate-12
          drop-shadow-sm scale-70
          transition-transform duration-200 ease-out
          group-hover:-translate-y-[6px] group-hover:-rotate-[13deg]
        "
      >
        <Image
          src="/decor/clip.png"
          alt=""
          width={64}
          height={64}
          priority
        />
      </div>

      {/* polaroid */}
      <div className="polaroid relative z-10">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={700}
          className="h-auto w-[420px] rounded-sm object-cover"
          priority
        />
      </div>
    </Link>
  );
}