import Image from "next/image";

type HeroFrontProps = {
  photoA: string; // e.g. "/hero/photo-a.jpg"
  photoB: string; // e.g. "/hero/photo-b.jpg"
  memo: string;   // e.g. "/hero/memo.jpg"
};

export function HeroFront({ photoA, photoB, memo }: HeroFrontProps) {
  return (
    <section id="home" className="pt-6 md:pt-10">
      <div className="relative mx-auto max-w-6xl">
        {/* Collage canvas */}
        <div className="relative h-[360px] w-full md:h-[520px]">
          {/* Bottom photo */}
            <div className="absolute left-[50px] top-14 rotate-[-1deg] md:top-[-40px]">
            <Image
                src={photoB}
                alt=""
                width={1800}
                height={1200}
                className="h-auto w-[800px] max-w-[92vw] rounded-sm shadow-lg"
                priority
            />
            </div>

            {/* Top overlapping photo */}
            <div className="absolute left-6 top-6 rotate-[2deg] md:left-8 md:top-[-70px]">
            <Image
                src={photoA}
                alt=""
                width={1800}
                height={1200}
                className="h-auto w-[800px] max-w-[96vw] rounded-sm shadow-xl"
                priority
            />
            </div>

          {/* Memo card */}
            <div className="absolute right-2 top-6 rotate-[-3deg] md:right-15 md:top-[-65px]">
            <div className="group memoHover relative inline-block w-fit">
                <Image
                src="/hero/frontcard.png"
                alt="Memo card"
                width={1200}
                height={900}
                className="block h-auto w-[400px] max-w-[70vw] object-cover"
                priority
                />

                {/* Paperclip */}
                <div
                className="
                    absolute left-[160px] top-[-40px] z-20 -rotate-5
                    drop-shadow-sm pointer-events-none
                    transition-transform duration-200 ease-out
                    group-hover:-translate-y-[4px] group-hover:-rotate-6
                "
                >
                <Image
                    src="/decor/clip.png"
                    alt=""
                    width={120}
                    height={120}
                    priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}