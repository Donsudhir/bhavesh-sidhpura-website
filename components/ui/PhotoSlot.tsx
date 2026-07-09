import Image from "next/image";

/* A clearly-marked photo gap. When `src` is empty, it shows a tasteful
   placeholder telling the client exactly which shot belongs here.
   Drop the real path in and the placeholder disappears — no markup changes. */
export function PhotoSlot({
  src,
  alt,
  label,
  ratio = "4/5",
  priority = false,
  sizes = "(max-width: 1024px) 90vw, 40vw",
}: {
  src?: string;
  alt: string;
  label: string;
  ratio?: "4/5" | "5/4" | "1/1" | "7/5" | "3/4";
  priority?: boolean;
  sizes?: string;
}) {
  const ratioClass =
    ratio === "5/4"
      ? "aspect-[5/4]"
      : ratio === "1/1"
        ? "aspect-square"
        : ratio === "7/5"
          ? "aspect-[7/5]"
          : ratio === "3/4"
            ? "aspect-[3/4]"
            : "aspect-4/5";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-card bg-surface ${ratioClass}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top img-editorial"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6">
          <div className="text-center">
            <span className="mx-auto block h-px w-10 bg-accent/50" aria-hidden />
            <p className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-text-muted">
              Photo to come
            </p>
            <p className="mx-auto mt-2 max-w-[18ch] text-[0.85rem] leading-snug text-text-muted/80">
              {label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
