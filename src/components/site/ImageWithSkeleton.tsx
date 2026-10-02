"use client";

import NextImage, { type ImageProps } from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MIN_SKELETON_MS = 500;

type Variant = "portrait" | "card";

type Props = ImageProps & {
  skeletonVariant?: Variant;
  skeletonClassName?: string;
};

export function ImageWithSkeleton({
  skeletonVariant = "card",
  skeletonClassName,
  className,
  onLoad,
  ...imageProps
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const mountedAt = useRef<number>(
    typeof performance !== "undefined" ? performance.now() : Date.now(),
  );

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100",
          skeletonClassName,
        )}
      >
        {skeletonVariant === "portrait" ? <PortraitSkeleton /> : <CardSkeleton />}
      </div>

      <NextImage
        {...imageProps}
        className={className}
        onLoad={(event) => {
          const now =
            typeof performance !== "undefined" ? performance.now() : Date.now();
          const remaining = MIN_SKELETON_MS - (now - mountedAt.current);
          if (remaining > 0) {
            setTimeout(() => setLoaded(true), remaining);
          } else {
            setLoaded(true);
          }
          onLoad?.(event);
        }}
      />
    </>
  );
}

function CardSkeleton() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-white/[0.015] to-red/[0.04] skeleton-pulse" />
      <div className="absolute inset-0 skeleton-shimmer" />
    </>
  );
}

function PortraitSkeleton() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-white/[0.03] skeleton-pulse" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 top-[12%] [mask-image:radial-gradient(ellipse_55%_70%_at_50%_60%,black_55%,transparent_80%)]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-red/[0.06]" />
      </div>
      <div className="absolute inset-0 skeleton-shimmer" />
    </>
  );
}
