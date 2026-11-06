import { useEffect } from "react";

const SCROLLBAR_STYLE_ID = "legacy-scrollbar-styles";

const SCROLLBAR_STYLES = `
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #0B1221;
}
::-webkit-scrollbar-thumb {
    background: #2A3F66;
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: #F59E0B;
}
`;

const defaultObserverOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

export function useLegacyPageEffects() {

  // These sections are rendered by React after the browser's initial hash-scroll.
  // Retry once after mount and whenever the hash changes.
  useEffect(() => {
    const scrollToHash = () => {
      let id = window.location.hash.slice(1);
      if (!id) return;
      try {
        id = decodeURIComponent(id);
      } catch {
        return;
      }
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
  useEffect(() => {
    if (document.getElementById(SCROLLBAR_STYLE_ID)) {
      return;
    }

    const styleSheet = document.createElement("style");
    styleSheet.id = SCROLLBAR_STYLE_ID;
    styleSheet.textContent = SCROLLBAR_STYLES;
    document.head.appendChild(styleSheet);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, defaultObserverOptions);

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-legacy-reveal]"),
    );

    if (!targets.length) {
      observer.disconnect();
      return;
    }

    targets.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const scrolled = window.pageYOffset;
      const bg = hero.querySelector<HTMLImageElement>("img");

      if (bg && scrolled < hero.offsetHeight) {
        bg.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
