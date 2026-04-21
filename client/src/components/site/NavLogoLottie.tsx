import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

import { cn } from "../../lib/utils";

const SVG_CONTENT_SELECTOR = "svg > g";
const VIEWBOX_X_PADDING_RATIO = 0.035;
const VIEWBOX_Y_PADDING_RATIO = 0.08;
const VIEWBOX_SCALE_DAMPENING = 1.5;
const animationDataUrl = new URL("../../assets/nav-logo-lottie.json", import.meta.url).href;

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

    const init = async () => {
      const response = await fetch(animationDataUrl, { cache: "force-cache" });
      const animationData = await response.json();

      if (!mounted || !containerRef.current) return;

      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
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

      const onDomLoaded = () => {
        anim.resize();
        fitArtwork();
      };

      anim.addEventListener("DOMLoaded", onDomLoaded);

      cleanupAnimListeners = () => {
        anim.removeEventListener("DOMLoaded", onDomLoaded);
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
      cleanupAnimListeners?.();
      cleanupResize?.();
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [speed]);

  return (
    <div className={cn("nav-logo-lottie w-[52px] sm:w-[58px] lg:w-[64px]", className)} aria-hidden="true">
      <div ref={containerRef} className="nav-logo-lottie__viewport h-7 w-full sm:h-8 lg:h-8.5" />
    </div>
  );
}
