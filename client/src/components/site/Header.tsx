import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import { cn } from "../../lib/utils";
import NavLogoLottie from "./NavLogoLottie";
import { Container, primaryButtonClass } from "./SitePrimitives";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products-brands", label: "Products / Brands" },
  { href: "/green-shipping-solutions", label: "Green Shipping Solutions" },
  { href: "/contact", label: "Contact" },
];

const isActiveRoute = (location: string, href: string) => {
  if (href === "/") return location === "/";
  return location === href || location.startsWith(`${href}/`);
};

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-marine-900-90 backdrop-blur-lg"
      data-shared-component="primary-navigation"
    >
      <Container className="flex h-20 items-center gap-4">
        <a className="shrink-0" href="/" aria-label="ANVA home">
          <NavLogoLottie />
        </a>

        <nav className="ml-4 hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <ul className="flex items-center gap-1 text-sm font-medium text-gray-200 2xl:gap-2">
            {navItems.map((item) => {
              const active = isActiveRoute(location, item.href);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex rounded-md px-3 py-2 text-center leading-tight transition-colors duration-150",
                      active ? "bg-white/10 text-white" : "hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="/contact" className={cn(primaryButtonClass, "hidden shrink-0 xl:inline-flex")}>
          Request Quote
        </a>

        <button
          type="button"
          className="ml-auto inline-flex rounded-md border border-white/20 p-2 text-white transition hover:bg-white/10 xl:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          data-ref="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div className={cn("border-t border-white/10 bg-marine-900 xl:hidden", isOpen ? "block" : "hidden")} data-ref="mobile-menu">
        <Container className="py-4">
          <nav>
            <ul className="space-y-1">
              {navItems.map((item) => {
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
            </ul>
          </nav>
          <a href="/contact" className={cn(primaryButtonClass, "mt-4 w-full")}>Request Quote</a>
        </Container>
      </div>
    </header>
  );
};

export default Header;
