"use client";

type HoverVideoProps = {
  src: string;
  className?: string;
};

export default function HoverVideo({ src, className }: HoverVideoProps) {
  return (
    <video
      src={src}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className={className}
      onMouseEnter={(e) => {
        const v = e.currentTarget;
        v.currentTime = 0;
        v.play();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.pause();
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
}
