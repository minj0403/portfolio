import Image from "next/image";

type PolaroidProps = {
  src?: string;              // allow undefined safely
  alt: string;
  className?: string;
  rotateClassName?: string;

  // Optional fine-tuning
  imgClassName?: string;     // control image size (projects vs about)
  clipClassName?: string;    // control clip position/size per usage
  clipSrc?: string;          // allow different clip asset
};

export function Polaroid({
  src,
  alt,
  className = "",
  rotateClassName = "-rotate-1",
  imgClassName = "w-[420px] md:w-[460px]",
  clipClassName = "left-[20px] -top-20 -rotate-12 scale-70",
  clipSrc = "/decor/clip.png",
}: PolaroidProps) {
  // NEVER let Next/Image receive "" or undefined
  const safeSrc =
    src && src.trim().length > 0 ? src : "/projects/placeholder.png";

  return (
    <figure className={`group relative inline-block ${rotateClassName} ${className}`}>
      {/* Paperclip */}
      <div
        className={[
          "absolute z-20 drop-shadow-sm pointer-events-none",
          "transition-transform duration-200 ease-out",
          "group-hover:-translate-y-[6px] group-hover:-rotate-[13deg]",
          clipClassName,
        ].join(" ")}
      >
        <Image src={clipSrc} alt="" width={150} height={64} priority className="mt-6"
/>
      </div>

      {/* Polaroid frame */}
      <div className="polaroid relative z-10">
        <Image
          src={safeSrc}
          alt={alt}
          width={900}
          height={700}
          className={`h-auto rounded-sm object-cover ${imgClassName}`}
          priority
        />
      </div>
    </figure>
  );
}
