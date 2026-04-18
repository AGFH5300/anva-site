import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

import { cn } from "../../lib/utils";
import NavLogoLottie from "./NavLogoLottie";
import { Container, primaryButtonClass } from "./SitePrimitives";

type SimpleNavItem = {
  href: string;
  label: string;
};

type NavGroup = {
  key: string;
  label: string;
  items: SimpleNavItem[];
};

const topLevelItems: SimpleNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/green-shipping-solutions", label: "Green Shipping Solutions" },
  { href: "/contact", label: "Contact" },
];

const navGroups: NavGroup[] = [
  {
    key: "services",
    label: "Services",
    items: [
      { href: "/services", label: "Services overview" },
      { href: "/services#drydocking-ship-repair-support", label: "Drydocking & Ship Repair Support" },
      { href: "/services/riding-squads", label: "Marine Riding Squads & Onboard Repair Teams" },
      { href: "/services#marine-project-management", label: "Marine Project Management" },
      { href: "/services#marine-technical-consultancy", label: "Marine Technical Consultancy" },
      { href: "/services#commercial-procurement-consultancy", label: "Commercial & Procurement Consultancy" },
    ],
  },
  {
    key: "products-brands",
    label: "Products / Brands",
    items: [
      { href: "/products-brands", label: "Products / Brands overview" },
      { href: "/spares/engine-room-machinery", label: "Marine Engine Room & Machinery Spares" },
      { href: "/spares/hard-to-source-oem", label: "Hard-to-Source Marine OEM Spares" },
      { href: "/green-shipping-solutions", label: "Green Shipping Solutions" },
    ],
  },
];

const toBasePath = (href: string) => href.split("#")[0];

const isActiveRoute = (location: string, href: string) => {
  const baseHref = toBasePath(href);
  if (baseHref === "/") return location === "/";
  return location === baseHref || location.startsWith(`${baseHref}/`);
};

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState<Record<string, boolean>>({
    services: false,
    "products-brands": false,
  });
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenDesktopMenu(null);
  }, [location]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const queueCloseDesktopMenu = () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setOpenDesktopMenu(null);
      closeTimerRef.current = null;
    }, 110);
  };

  const openDesktopGroup = (groupKey: string) => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setOpenDesktopMenu(groupKey);
  };

  const toggleMobileSection = (groupKey: string) => {
    setMobileExpandedSections((prev) => ({ ...prev, [groupKey]: !prev[groupKey] }));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-200",
        isScrolled ? "bg-marine-900/97 shadow-[0_12px_30px_rgba(3,8,19,0.4)]" : "bg-marine-900-90",
      )}
      data-shared-component="primary-navigation"
    >
      <Container className="flex h-[4.75rem] items-center gap-3 lg:h-[5rem] lg:gap-5">
        <a className="flex shrink-0 items-center gap-2" href="/" aria-label="ANVA home">
          <NavLogoLottie />
          <span className="hidden text-left sm:block">
            <strong className="block text-sm font-semibold tracking-wide text-white">ANVA</strong>
            <span className="block text-[0.675rem] uppercase tracking-[0.16em] text-gray-300">Marine & Commercial</span>
          </span>
        </a>

        <nav className="ml-1 hidden min-w-0 flex-1 items-center justify-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm font-medium text-gray-200 xl:gap-1.5">
            {topLevelItems.map((item) => {
              const active = isActiveRoute(location, item.href);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex rounded-md px-2.5 py-2 leading-tight transition-colors duration-150 xl:px-3",
                      active
                        ? "bg-white/8 text-white ring-1 ring-white/15"
                        : "hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            {navGroups.map((group) => {
              const active = group.items.some((item) => isActiveRoute(location, item.href));
              const expanded = openDesktopMenu === group.key;

              return (
                <li
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => openDesktopGroup(group.key)}
                  onMouseLeave={queueCloseDesktopMenu}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center rounded-md px-2.5 py-2 leading-tight transition-colors duration-150 xl:px-3",
                      active || expanded
                        ? "bg-white/8 text-white ring-1 ring-white/15"
                        : "text-gray-200 hover:bg-white/5 hover:text-white",
                    )}
                    aria-expanded={expanded}
                    aria-haspopup="menu"
                    onClick={() => setOpenDesktopMenu((prev) => (prev === group.key ? null : group.key))}
                    onFocus={() => openDesktopGroup(group.key)}
                  >
                    {group.label}
                    <ChevronDown className={cn("ml-1 h-3.5 w-3.5 transition-transform", expanded ? "rotate-180" : "")}/>
                  </button>

                  <div
                    className={cn(
                      "absolute left-0 top-full mt-1 w-[21rem] rounded-xl border border-white/15 bg-marine-900/98 p-2 shadow-2xl backdrop-blur-lg transition",
                      expanded ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0",
                    )}
                    role="menu"
                    aria-label={`${group.label} submenu`}
                    onMouseEnter={() => openDesktopGroup(group.key)}
                    onMouseLeave={queueCloseDesktopMenu}
                  >
                    {group.items.map((item) => {
                      const activeItem = isActiveRoute(location, item.href);
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-gray-200 transition-colors",
                            activeItem ? "bg-white/12 text-white" : "hover:bg-white/8 hover:text-white",
                          )}
                        >
                          {item.label}
                          <ChevronRight className="h-3.5 w-3.5 opacity-70" />
                        </a>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="/contact" className={cn(primaryButtonClass, "hidden shrink-0 lg:inline-flex")}>
          Request a Quote
        </a>

        <button
          type="button"
          className="ml-auto inline-flex rounded-md border border-white/20 p-2 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          data-ref="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-primary-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn("border-t border-white/10 bg-marine-900/98 lg:hidden", isOpen ? "block" : "hidden")}
        data-ref="mobile-menu"
        id="mobile-primary-menu"
      >
        <Container className="py-4">
          <nav aria-label="Mobile primary">
            <ul className="space-y-1">
              {topLevelItems.map((item) => {
                const active = isActiveRoute(location, item.href);
                return (
                  <li key={`${item.href}-mobile`}>
                    <a
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-4 py-3 text-sm font-medium transition-colors",
                        active ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}

              {navGroups.map((group) => {
                const expanded = mobileExpandedSections[group.key];
                const groupActive = group.items.some((item) => isActiveRoute(location, item.href));

                return (
                  <li key={`${group.key}-mobile`} className="rounded-md border border-white/10 bg-white/[0.02]">
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm font-medium transition-colors",
                        groupActive ? "text-white" : "text-gray-200 hover:text-white",
                      )}
                      onClick={() => toggleMobileSection(group.key)}
                      aria-expanded={expanded}
                      aria-controls={`mobile-${group.key}-submenu`}
                    >
                      {group.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", expanded ? "rotate-180" : "")} />
                    </button>
                    <ul
                      id={`mobile-${group.key}-submenu`}
                      className={cn("overflow-hidden px-2 pb-2", expanded ? "block" : "hidden")}
                    >
                      {group.items.map((item) => {
                        const active = isActiveRoute(location, item.href);
                        return (
                          <li key={`${item.href}-sub-mobile`}>
                            <a
                              href={item.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block rounded-md px-3 py-2.5 text-sm transition-colors",
                                active ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white",
                              )}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a href="/contact" className={cn(primaryButtonClass, "mt-4 w-full")}>Request a Quote</a>
        </Container>
      </div>
    </header>
  );
};

export default Header;
