import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

const SCROLL_THRESHOLD = 20;
const SVG_CONTENT_SELECTOR = "svg > g";
const VIEWBOX_X_PADDING_RATIO = 0.035;
const VIEWBOX_Y_PADDING_RATIO = 0.08;
const animationDataUrl = new URL("../../assets/nav-logo-lottie.json", import.meta.url).href;

const fitArtworkViewBox = (container: HTMLDivElement | null) => {
  if (!container) return null;

  const svg = container.querySelector("svg");
  const artworkRoot = container.querySelector<SVGGElement>(SVG_CONTENT_SELECTOR);

  if (!svg || !artworkRoot) return null;

  const originalViewBox = svg.dataset.originalViewBox ?? svg.getAttribute("viewBox") ?? "0 0 512 512";
  svg.dataset.originalViewBox = originalViewBox;
  svg.setAttribute("viewBox", originalViewBox);

  const bbox = artworkRoot.getBBox();
  if (!Number.isFinite(bbox.width) || !Number.isFinite(bbox.height) || bbox.width <= 0 || bbox.height <= 0) {
    return null;
  }

  const padX = Math.max(2, bbox.width * VIEWBOX_X_PADDING_RATIO);
  const padY = Math.max(2, bbox.height * VIEWBOX_Y_PADDING_RATIO);
  const fittedViewBox = [
    bbox.x - padX,
    bbox.y - padY,
    bbox.width + padX * 2,
    bbox.height + padY * 2,
  ];

  svg.setAttribute("viewBox", fittedViewBox.join(" "));
  svg.setAttribute("preserveAspectRatio", "xMinYMid meet");
  svg.style.overflow = "visible";

  return { bbox, fittedViewBox };
};

export default function NavLogoLottie() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  const isScrolledRef = useRef(false);
  const isPlayingRef = useRef(false);
  const tickingRef = useRef(false);

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

      const lastFrame = () =>
        anim.totalFrames ? Math.max(0, Math.floor(anim.totalFrames - 1)) : 0;

      const fitArtwork = () => {
        if (fitFrame !== null) window.cancelAnimationFrame(fitFrame);

        fitFrame = window.requestAnimationFrame(() => {
          fitFrame = null;
          fitArtworkViewBox(containerRef.current);
        });
      };

      const snapToState = () => {
        const scrolledNow = window.scrollY > SCROLL_THRESHOLD;
        isScrolledRef.current = scrolledNow;
        anim.goToAndStop(scrolledNow ? lastFrame() : 0, true);
        anim.resize();
        fitArtwork();
      };

      const onDomLoaded = () => {
        snapToState();
        fitArtwork();
      };

      const onComplete = () => {
        anim.goToAndStop(isScrolledRef.current ? lastFrame() : 0, true);
        isPlayingRef.current = false;
        fitArtwork();
      };

      anim.addEventListener("DOMLoaded", onDomLoaded);
      anim.addEventListener("complete", onComplete);

      cleanupAnimListeners = () => {
        anim.removeEventListener("DOMLoaded", onDomLoaded);
        anim.removeEventListener("complete", onComplete);
      };

      snapToState();

      const onResize = () => {
        anim.resize();
        fitArtwork();
      };
      window.addEventListener("resize", onResize);
      cleanupResize = () => window.removeEventListener("resize", onResize);
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
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const playTo = (scrolled: boolean) => {
      const anim = animRef.current;
      if (!anim || isPlayingRef.current) return;

      const last = anim.totalFrames ? Math.max(0, Math.floor(anim.totalFrames - 1)) : 0;

      isPlayingRef.current = true;
      isScrolledRef.current = scrolled;

      if (scrolled) {
        anim.playSegments([0, last], true);
      } else {
        anim.playSegments([last, 0], true);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        if (scrolled !== isScrolledRef.current) playTo(scrolled);
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav-logo-lottie" aria-hidden="true">
      <div ref={containerRef} className="nav-logo-lottie__viewport" />
    </div>
  );
}
