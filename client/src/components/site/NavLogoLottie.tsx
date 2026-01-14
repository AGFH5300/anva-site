import { useEffect, useRef } from "react";

type AnimationItem = {
  addEventListener: (event: string, callback: () => void) => void;
  destroy: () => void;
  goToAndStop: (value: number, isFrame: boolean) => void;
  play: () => void;
  setDirection: (direction: number) => void;
  totalFrames: number;
};

type LottiePlayer = {
  loadAnimation: (config: {
    container: HTMLElement;
    renderer: "svg";
    loop: boolean;
    autoplay: boolean;
    animationData: unknown;
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
    if (typeof window === "undefined") {
      reject(new Error("Lottie can only load in the browser."));
      return;
    }

    if (window.lottie) {
      resolve(window.lottie);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[data-lottie-web]",
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.lottie) {
          resolve(window.lottie);
        } else {
          reject(new Error("Lottie failed to initialize."));
        }
      });
      return;
    }

    const script = document.createElement("script");
    script.src = LOTTIE_SCRIPT_SRC;
    script.async = true;
    script.dataset.lottieWeb = "true";
    script.addEventListener("load", () => {
      if (window.lottie) {
        resolve(window.lottie);
      } else {
        reject(new Error("Lottie failed to initialize."));
      }
    });
    script.addEventListener("error", () => {
      reject(new Error("Failed to load Lottie script."));
    });
    document.body.appendChild(script);
  });

const NavLogoLottie = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const isScrolledRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    let isMounted = true;

    const loadAnimation = async () => {
      const [player, response] = await Promise.all([
        loadLottiePlayer(),
        fetch("/lottie.json"),
      ]);
      const animationData = await response.json();

      if (!isMounted || !containerRef.current) return;

      const animation = player.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      animationRef.current = animation;

      animation.addEventListener("DOMLoaded", () => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        isScrolledRef.current = scrolled;
        const targetFrame = scrolled ? animation.totalFrames : 0;
        animation.goToAndStop(targetFrame, true);
      });
    };

    loadAnimation();

    return () => {
      isMounted = false;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;

        if (scrolled !== isScrolledRef.current && animationRef.current) {
          animationRef.current.setDirection(scrolled ? 1 : -1);
          animationRef.current.play();
          isScrolledRef.current = scrolled;
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="nav-logo-lottie" ref={containerRef} />;
};

export default NavLogoLottie;
