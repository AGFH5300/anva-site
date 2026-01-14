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
      document.querySelectorAll<HTMLElement>("section > div"),
    );

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

  useEffect(() => {
    const nav = document.querySelector(
      '[data-shared-component="primary-navigation"]',
    );

    if (!nav) return;

    const button = nav.querySelector<HTMLElement>("[data-ref=\"mobile-menu-btn\"]");
    const menu = nav.querySelector<HTMLElement>("[data-ref=\"mobile-menu\"]");

    if (!button || !menu) return;

    const toggleMenu = () => {
      const isHidden = getComputedStyle(menu).display === "none";
      menu.style.display = isHidden ? "block" : "none";
    };

    button.addEventListener("click", toggleMenu);

    return () => {
      button.removeEventListener("click", toggleMenu);
    };
  }, []);
}
