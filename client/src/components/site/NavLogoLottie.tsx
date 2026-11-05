import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

import { cn } from "../../lib/utils";

const SVG_CONTENT_SELECTOR = "svg > g";
const VIEWBOX_X_PADDING_RATIO = 0.03;
const VIEWBOX_Y_PADDING_RATIO = 0.07;
const VIEWBOX_SCALE_DAMPENING = 1.28;
const animationDataUrl = new URL("../../assets/nav-logo-lottie.json", import.meta.url).href;
// The original animation morphs a colored ANVA wordmark out of view.
// Hold its readable opening frame between occasional morphing replays.
const WORDMARK_HOLD_MS = 5800;
const WORDMARK_MORPH_END_FRAME = 21;

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

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    let mounted = true;
    let cleanupResize: (() => void) | null = null;
    let cleanupAnimListeners: (() => void) | null = null;
    let fitFrame: number | null = null;
    let replayTimer: number | null = null;

    const init = async () => {
      const response = await fetch(animationDataUrl, { cache: "force-cache" });
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

      const holdReadableWordmark = () => {
        if (!mounted || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        replayTimer = window.setTimeout(() => {
          replayTimer = null;
          if (!mounted) return;
          anim.playSegments([0, WORDMARK_MORPH_END_FRAME], true);
        }, WORDMARK_HOLD_MS);
      };

      const onMorphComplete = () => {
        // The final animation frame is effectively blank. Restore the brand
        // immediately so the navbar does not spend time displaying fragments.
        anim.goToAndStop(0, true);
        holdReadableWordmark();
      };

      const onDomLoaded = () => {
        anim.goToAndStop(0, true);
        anim.resize();
        fitArtwork();
        holdReadableWordmark();
      };

      anim.addEventListener("DOMLoaded", onDomLoaded);
      anim.addEventListener("complete", onMorphComplete);

      cleanupAnimListeners = () => {
        anim.removeEventListener("DOMLoaded", onDomLoaded);
        anim.removeEventListener("complete", onMorphComplete);
      };

      const onResize = () => {
        anim.resize();
        fitArtwork();
      };

      window.addEventListener("resize", onResize);
      cleanupResize = () => window.removeEventListener("resize", onResize);
      fitArtwork();
    };

    const initPromise = init();

    return () => {
      mounted = false;
      initPromise.catch(() => null);
      if (fitFrame !== null) window.cancelAnimationFrame(fitFrame);
      if (replayTimer !== null) window.clearTimeout(replayTimer);
      cleanupAnimListeners?.();
      cleanupResize?.();
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [speed]);

  return (
    <div className={cn("nav-logo-lottie w-[112px] min-[360px]:w-[132px] sm:w-[162px] lg:w-[176px]", className)} aria-hidden="true">
      <div ref={containerRef} className="nav-logo-lottie__viewport h-[2.15rem] w-full sm:h-[2.65rem] lg:h-[2.85rem]" />
    </div>
  );
}
