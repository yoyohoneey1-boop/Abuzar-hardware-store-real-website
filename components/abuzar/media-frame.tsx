import Image from "next/image"
import { cn } from "@/lib/utils"
import type { MediaSlot } from "@/lib/abuzar-content"

type MediaFrameProps = {
  media: MediaSlot
  sizes: string
  className?: string
  imageClassName?: string
  priority?: boolean
  placeholderLabel?: string
}

export function MediaFrame({
  media,
  sizes,
  className,
  imageClassName,
  priority,
  placeholderLabel = "Image pending",
}: MediaFrameProps) {
  return (
    <div className={cn("relative overflow-hidden bg-card", className)}>
      {media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <AssetPlaceholder label={placeholderLabel} assetPath={media.assetPath} />
      )}
    </div>
  )
}

function AssetPlaceholder({ label, assetPath }: { label: string; assetPath: string }) {
  return (
    <div
      className="tech-grid absolute inset-0 flex flex-col justify-between p-5"
      role="img"
      aria-label={`${label}: ${assetPath}`}
    >
      <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>Placeholder</span>
        <span aria-hidden="true">+</span>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="relative size-24">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/15" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-foreground/15" />
          <span className="absolute inset-6 rounded-full border border-foreground/15" />
        </div>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em]">
        <p className="text-accent">{label}</p>
        <p className="mt-1 text-muted-foreground">{assetPath}</p>
      </div>
    </div>
  )
}
