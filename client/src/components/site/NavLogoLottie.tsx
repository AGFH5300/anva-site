import { useEffect, useRef } from "react";

type AnimationItem = {
  addEventListener: (event: string, callback: () => void) => void;
  removeEventListener: (event: string, callback: () => void) => void;
  destroy: () => void;
  goToAndStop: (value: number, isFrame: boolean) => void;
  playSegments: (segments: [number, number], forceFlag?: boolean) => void;
  resize: () => void;
  totalFrames: number;
};

type LottiePlayer = {
  loadAnimation: (config: {
    container: HTMLElement;
    renderer: "svg";
    loop: boolean;
    autoplay: boolean;
    animationData: unknown;
    rendererSettings?: {
      preserveAspectRatio?: string;
      progressiveLoad?: boolean;
      hideOnTransparent?: boolean;
    };
  }) => AnimationItem;
};

declare global {
  interface Window {
    lottie?: LottiePlayer;
  }
}

const SCROLL_THRESHOLD = 20;
const LOTTIE_SCRIPT_SRC =
  "https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js";

const loadLottiePlayer = () =>
  new Promise<LottiePlayer>((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("Browser only"));

    if (window.lottie) return resolve(window.lottie);

    const existing = document.querySelector<HTMLScriptElement>(
      "script[data-lottie-web]"
    );

    const onReady = () => {
      if (window.lottie) resolve(window.lottie);
      else reject(new Error("Lottie failed to initialize"));
    };

    if (existing) {
      // If it's already there but still loading, wait for it.
      existing.addEventListener("load", onReady);
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Lottie script"))
      );
      return;
    }

    const script = document.createElement("script");
    script.src = LOTTIE_SCRIPT_SRC;
    script.async = true;
    script.dataset.lottieWeb = "true";
    script.addEventListener("load", onReady);
    script.addEventListener("error", () =>
      reject(new Error("Failed to load Lottie script"))
    );
    document.body.appendChild(script);
  });

export default function NavLogoLottie() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  const isScrolledRef = useRef(false);
  const isPlayingRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!containerRef.current) return;

    let mounted = true;
    let cleanupAnimListeners: (() => void) | null = null;

    const init = async () => {
      const [player, response] = await Promise.all([
        loadLottiePlayer(),
        fetch("/lottie.json", { cache: "no-store" }),
      ]);

      const animationData = await response.json();
      if (!mounted || !containerRef.current) return;

      const anim = player.loadAnimation({
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
        // When navbar layout changes, resizing helps prevent “disappear”
        anim.resize();
      };

      const onDomLoaded = () => {
        snapToState();
      };

      const onComplete = () => {
        // Snap exactly to end frame after any play
        anim.goToAndStop(isScrolledRef.current ? lastFrame() : 0, true);
        isPlayingRef.current = false;
      };

      anim.addEventListener("DOMLoaded", onDomLoaded);
      anim.addEventListener("complete", onComplete);

      cleanupAnimListeners = () => {
        anim.removeEventListener("DOMLoaded", onDomLoaded);
        anim.removeEventListener("complete", onComplete);
      };

      // In case DOMLoaded already fired quickly
      snapToState();

      // Also handle resize (nav height changes on scroll can cause weird sizing)
      const onResize = () => anim.resize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    };

    const initPromise = init();

    return () => {
      mounted = false;
      initPromise.catch(() => null);
      cleanupAnimListeners?.();
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const playTo = (scrolled: boolean) => {
      const anim = animRef.current;
      if (!anim) return;

      const last = anim.totalFrames ? Math.max(0, Math.floor(anim.totalFrames - 1)) : 0;

      // prevent spam while already animating
      if (isPlayingRef.current) return;

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
