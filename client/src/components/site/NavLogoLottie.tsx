import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

const SCROLL_THRESHOLD = 20;
const SVG_CONTENT_SELECTOR = "svg > g";
const VIEWBOX_X_PADDING_RATIO = 0.035;
const VIEWBOX_Y_PADDING_RATIO = 0.08;
const VIEWBOX_SCALE_DAMPENING = 1.5;
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

  return { bbox, fittedViewBox };
};

export default function NavLogoLottie() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  const isScrolledRef = useRef(false);
  const isPlayingRef = useRef(false);
  const tickingRef = useRef(false);
  const frameBoundsRef = useRef({ start: 0, end: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    let mounted = true;
    let cleanupResize: (() => void) | null = null;
    let cleanupAnimListeners: (() => void) | null = null;
    let fitFrame: number | null = null;

    const init = async () => {
      const response = await fetch(animationDataUrl, { cache: "force-cache" });
      const animationData = await response.json();
      const restingStartFrame = Math.max(0, Math.round(animationData.ip ?? 0));
      const restingEndFrame = Math.max(restingStartFrame, Math.round((animationData.op ?? animationData.ip ?? 0) - 1));
      frameBoundsRef.current = { start: restingStartFrame, end: restingEndFrame };

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
        anim.goToAndStop(scrolledNow ? restingEndFrame : restingStartFrame, true);
        anim.resize();
        fitArtwork();
      };

      const onDomLoaded = () => {
        snapToState();
        fitArtwork();
      };

      const onComplete = () => {
        anim.goToAndStop(isScrolledRef.current ? restingEndFrame : restingStartFrame, true);
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

      const { start: startFrame, end: endFrame } = frameBoundsRef.current;

      isPlayingRef.current = true;
      isScrolledRef.current = scrolled;

      if (scrolled) {
        anim.goToAndStop(startFrame, true);
        anim.playSegments([startFrame, endFrame], true);
      } else {
        anim.goToAndStop(endFrame, true);
        anim.playSegments([endFrame, startFrame], true);
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
    <div className="nav-logo-lottie w-[142px] sm:w-[152px] lg:w-[164px] xl:w-[172px]" aria-hidden="true">
      <div ref={containerRef} className="nav-logo-lottie__viewport h-8 w-full sm:h-9 lg:h-9.5 xl:h-10" />
    </div>
  );
}
