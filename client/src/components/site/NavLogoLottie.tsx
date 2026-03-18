import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

const SCROLL_THRESHOLD = 20;
const animationDataUrl = new URL("../../assets/nav-logo-lottie.json", import.meta.url).href;

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

      const snapToState = () => {
        const scrolledNow = window.scrollY > SCROLL_THRESHOLD;
        isScrolledRef.current = scrolledNow;
        anim.goToAndStop(scrolledNow ? lastFrame() : 0, true);
        anim.resize();
      };

      const onDomLoaded = () => {
        snapToState();
      };

      const onComplete = () => {
        anim.goToAndStop(isScrolledRef.current ? lastFrame() : 0, true);
        isPlayingRef.current = false;
      };

      anim.addEventListener("DOMLoaded", onDomLoaded);
      anim.addEventListener("complete", onComplete);

      cleanupAnimListeners = () => {
        anim.removeEventListener("DOMLoaded", onDomLoaded);
        anim.removeEventListener("complete", onComplete);
      };

      snapToState();

      const onResize = () => anim.resize();
      window.addEventListener("resize", onResize);
      cleanupResize = () => window.removeEventListener("resize", onResize);
    };

    const initPromise = init();

    return () => {
      mounted = false;
      initPromise.catch(() => null);
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
