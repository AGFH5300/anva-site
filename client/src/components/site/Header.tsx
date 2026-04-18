import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";

import { cn } from "../../lib/utils";
import NavLogoLottie from "./NavLogoLottie";
import { Container, primaryButtonClass } from "./SitePrimitives";

type NavLink = {
  href: string;
  label: string;
  description?: string;
};

type NavItem =
  | {
      href: string;
      label: string;
      children?: undefined;
    }
  | {
      href?: undefined;
      label: string;
      children: NavLink[];
    };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "Services overview" },
      { href: "/services#drydocking-ship-repair-support", label: "Drydocking & Ship Repair Support" },
      { href: "/services/riding-squads", label: "Marine Riding Squads & Onboard Repair Teams" },
      { href: "/services#marine-project-management", label: "Marine Project Management" },
      { href: "/services#marine-technical-consultancy", label: "Marine Technical Consultancy" },
      { href: "/services#commercial-procurement-consultancy", label: "Commercial & Procurement Consultancy" },
    ],
  },
  {
    label: "Products / Brands",
    children: [
      { href: "/products-brands", label: "Products / Brands overview" },
      { href: "/spares/engine-room-machinery", label: "Marine Engine Room & Machinery Spares" },
      { href: "/spares/hard-to-source-oem", label: "Hard-to-Source Marine OEM Spares" },
      { href: "/green-shipping-solutions", label: "Green Shipping Solutions" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const normalizePath = (href: string) => href.split("#")[0];

const isActiveRoute = (location: string, href: string) => {
  const activePath = normalizePath(location);
  const itemPath = normalizePath(href);
  if (itemPath === "/") return activePath === "/";
  return activePath === itemPath || activePath.startsWith(`${itemPath}/`);
};

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const activePaths = useMemo(() => {
    const path = normalizePath(location);
    return {
      services: path.startsWith("/services"),
      products: path.startsWith("/products-brands") || path.startsWith("/spares") || path.startsWith("/green-shipping-solutions"),
    };
  }, [location]);

  useEffect(() => {
    setIsOpen(false);
    setOpenDesktopMenu(null);
  }, [location]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDesktopMenu(null);
      }
    };

    const onOutsideClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!headerRef.current?.contains(target)) {
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onOutsideClick);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, []);

  const toggleMobileSection = (label: string) => {
    setOpenMobileSection((current) => (current === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-marine-900-90 backdrop-blur-lg"
      data-shared-component="primary-navigation"
    >
      <Container className="flex h-[4.75rem] items-center gap-3 lg:gap-5">
        <a className="flex shrink-0 items-center gap-2" href="/" aria-label="ANVA home">
          <NavLogoLottie />
          <span className="hidden text-left text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-200 sm:block">
            ANVA Marine
          </span>
        </a>

        <nav className="ml-2 hidden min-w-0 flex-1 items-center justify-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-0.5 text-sm font-medium text-gray-200 xl:gap-1.5 2xl:gap-2">
            {navItems.map((item) => {
              if (!("children" in item)) {
                const active = isActiveRoute(location, item.href);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex rounded-md px-2.5 py-2 text-center leading-tight transition-colors duration-150 xl:px-3",
                        active
                          ? "bg-white/8 text-white ring-1 ring-white/15"
                          : "hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              const children = item.children ?? [];
              const isServices = item.label === "Services";
              const isActive = isServices ? activePaths.services : activePaths.products;
              const isMenuOpen = openDesktopMenu === item.label;
              const menuId = `desktop-menu-${item.label.toLowerCase().replace(/\W+/g, "-")}`;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopMenu(item.label)}
                  onMouseLeave={() => setOpenDesktopMenu(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-center leading-tight transition-colors duration-150 xl:px-3",
                      isActive || isMenuOpen
                        ? "bg-white/8 text-white ring-1 ring-white/15"
                        : "hover:bg-white/5 hover:text-white",
                    )}
                    aria-expanded={isMenuOpen}
                    aria-haspopup="menu"
                    aria-controls={menuId}
                    onClick={() => setOpenDesktopMenu((current) => (current === item.label ? null : item.label))}
                    onFocus={() => setOpenDesktopMenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isMenuOpen && "rotate-180")} />
                  </button>

                  <div
                    id={menuId}
                    role="menu"
                    className={cn(
                      "absolute left-0 top-[calc(100%+0.55rem)] min-w-[19rem] rounded-lg border border-white/15 bg-marine-900 shadow-2xl shadow-black/30 transition",
                      isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                    )}
                    onFocusCapture={() => setOpenDesktopMenu(item.label)}
                  >
                    <ul className="p-2">
                      {children.map((child) => {
                        const active = isActiveRoute(location, child.href);
                        return (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              role="menuitem"
                              className={cn(
                                "block rounded-md px-3 py-2.5 text-sm transition-colors",
                                active ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/5 hover:text-white",
                              )}
                            >
                              <span className="font-medium">{child.label}</span>
                              {child.description ? <span className="mt-0.5 block text-xs text-gray-400">{child.description}</span> : null}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
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
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div className={cn("border-t border-white/10 bg-marine-900 lg:hidden", isOpen ? "block" : "hidden")} data-ref="mobile-menu">
        <Container className="py-4">
          <nav aria-label="Mobile primary">
            <ul className="space-y-1">
              {navItems.map((item) => {
                if (!("children" in item)) {
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
                }

                const expanded = openMobileSection === item.label;
                const menuId = `mobile-menu-${item.label.toLowerCase().replace(/\W+/g, "-")}`;
                const children = item.children ?? [];

                return (
                  <li key={`${item.label}-mobile`} className="rounded-md border border-white/10">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm font-medium text-gray-100 transition hover:bg-white/5"
                      aria-expanded={expanded}
                      aria-controls={menuId}
                      onClick={() => toggleMobileSection(item.label)}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
                    </button>
                    <ul id={menuId} className={cn("overflow-hidden px-2 pb-2", expanded ? "block" : "hidden")}>
                      {children.map((child) => {
                        const active = isActiveRoute(location, child.href);
                        return (
                          <li key={`${child.href}-mobile-link`}>
                            <a
                              href={child.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm transition-colors",
                                active ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white",
                              )}
                            >
                              {child.label}
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
