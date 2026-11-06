import { useEffect, useRef, useState } from "react";
import lottie, { type AnimationItem } from "lottie-web";

import { cn } from "../../lib/utils";

const SVG_CONTENT_SELECTOR = "svg > g";
const VIEWBOX_X_PADDING_RATIO = 0.03;
const VIEWBOX_Y_PADDING_RATIO = 0.07;
const VIEWBOX_SCALE_DAMPENING = 1.28;
const animationDataUrl = new URL("../../assets/nav-logo-lottie.json", import.meta.url).href;
// Frame 0 is the complete, proportionate colored ANVA wordmark.
 // Play the animation backwards once so the pieces assemble into the finished logo.
 // Keep frame 0 visible afterward rather than disappearing or shrinking repeatedly.
const WORDMARK_START_FRAME = 21;
const WORDMARK_FINISH_FRAME = 0;

const fitArtworkViewBox = (container: HTMLDivElement | null) => {
  if (!container) return;

  const svg = container.querySelector("svg");
  const artworkRoot = container.querySelector<SVGGElement>(SVG_CONTENT_SELECTOR);

  if (!svg || !artworkRoot) return;

  const originalViewBox = svg.dataset.originalViewBox ?? svg.getAttribute("viewBox") ?? "0 0 512 512";
  svg.dataset.originalViewBox = originalViewBox;
  svg.setAttribute("viewBox", originalViewBox);

  const bbox = artworkRoot.getBBox();
  if (!Number.isFinite(bbox.width) || !Number.isFinite(bbox.height) || bbox.width <= 0 || bbox.height <= 0) {
    return;
  }

  const padX = Math.max(2, bbox.width * VIEWBOX_X_PADDING_RATIO);
  const padY = Math.max(2, bbox.height * VIEWBOX_Y_PADDING_RATIO);
  const fittedWidth = (bbox.width + padX * 2) * VIEWBOX_SCALE_DAMPENING;
  const fittedHeight = (bbox.height + padY * 2) * VIEWBOX_SCALE_DAMPENING;
  const fittedViewBox = [
    bbox.x - padX,
    bbox.y - padY - (fittedHeight - (bbox.height + padY * 2)) / 2,
    fittedWidth,
    fittedHeight,
  ];

  svg.setAttribute("viewBox", fittedViewBox.join(" "));
  svg.setAttribute("preserveAspectRatio", "xMinYMid meet");
  svg.style.overflow = "visible";
};

type NavLogoLottieProps = {
  className?: string;
  speed?: number;
};

export default function NavLogoLottie({ className, speed = 0.7 }: NavLogoLottieProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    let mounted = true;
    let cleanupResize: (() => void) | null = null;
    let cleanupAnimListeners: (() => void) | null = null;
    let fitFrame: number | null = null;

    const init = async () => {
      const response = await fetch(animationDataUrl, { cache: "force-cache" });
      if (!response.ok) throw new Error(`Logo asset failed with status ${response.status}`);
      const animationData = await response.json();

      if (!mounted || !containerRef.current) return;

      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
          hideOnTransparent: false,
        },
      });

      animRef.current = anim;
      anim.setSubframe(false);
      anim.setSpeed(speed);

      const fitArtwork = () => {
        if (fitFrame !== null) window.cancelAnimationFrame(fitFrame);

        fitFrame = window.requestAnimationFrame(() => {
          fitFrame = null;
          fitArtworkViewBox(containerRef.current);
        });
      };

      const onAssembleComplete = () => {
        // Lock to the full-sized finished artwork.
        anim.goToAndStop(WORDMARK_FINISH_FRAME, true);
        fitArtwork();
      };

      const onDomLoaded = () => {
        anim.resize();
        // Calculate artwork viewBox at the full-size frame, not the tiny
        // initial fragments. This avoids stretching or shrinking the final logo.
        anim.goToAndStop(WORDMARK_FINISH_FRAME, true);
        fitArtwork();
        if (mounted) setLogoReady(true);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        anim.playSegments([WORDMARK_START_FRAME, WORDMARK_FINISH_FRAME], true);
      };

      anim.addEventListener("DOMLoaded", onDomLoaded);
      anim.addEventListener("complete", onAssembleComplete);

      cleanupAnimListeners = () => {
        anim.removeEventListener("DOMLoaded", onDomLoaded);
        anim.removeEventListener("complete", onAssembleComplete);
      };

      const onResize = () => {
        anim.resize();
        fitArtwork();
      };

      window.addEventListener("resize", onResize);
      cleanupResize = () => window.removeEventListener("resize", onResize);
      fitArtwork();
    };

    // Never let an unavailable animation asset remove ANVA's visible name.
    void init().catch((error) => {
      console.error("ANVA navigation animation unavailable; showing static wordmark.", error);
      if (mounted) setLogoReady(false);
    });

    return () => {
      mounted = false;
      if (fitFrame !== null) window.cancelAnimationFrame(fitFrame);
      cleanupAnimListeners?.();
      cleanupResize?.();
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [speed]);

  return (
    <div className={cn("nav-logo-lottie relative w-[112px] min-[360px]:w-[132px] sm:w-[162px] lg:w-[176px]", className)} aria-hidden="true">
      {!logoReady && (
        <span className="absolute inset-0 flex items-center whitespace-nowrap font-display text-[1.55rem] font-bold tracking-tight sm:text-[1.9rem] lg:text-[2rem]">
          <span className="text-signal-500">AN</span><span className="text-marine-900">VA</span>
        </span>
      )}
      <div ref={containerRef} className={cn("nav-logo-lottie__viewport h-[2.15rem] w-full sm:h-[2.65rem] lg:h-[2.85rem]", !logoReady && "opacity-0")} />
    </div>
  );
}
