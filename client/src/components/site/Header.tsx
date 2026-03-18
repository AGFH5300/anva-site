import { useLocation } from "wouter";

import NavLogoLottie from "./NavLogoLottie";

const navItems = [
  { href: "/brands", label: "Services & Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const linkClassName = (isActive: boolean) =>
  [
    "transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4",
    isActive ? "text-white underline underline-offset-4" : "text-gray-300",
  ].join(" ");

const mobileLinkClassName = (isActive: boolean) =>
  ["nav-link", isActive ? "text-white" : ""].join(" ").trim();

const Header = () => {
  const [location] = useLocation();

  return (
    <nav
      data-node-id="gmyxkPFhSakx"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-marine-900-90 backdrop-blur-md"
      data-shared-component="primary-navigation"
    >
      <div
        data-node-id="JiWOfPBWaCWm"
        className="mx-auto flex h-20 items-center justify-between px-6"
      >
        <div data-node-id="eJwWIABxuAxw" className="flex items-center gap-4 md:gap-5">
          <a
            data-node-id="jQYXkwrxjwtX"
            className="flex items-center font-display text-2xl font-bold leading-8 tracking-[-0.025em]"
            href="/"
            aria-label="ANVA home"
          >
            <NavLogoLottie />
          </a>
        </div>
        <div
          data-node-id="pipWZEBYfTCy"
          className="hidden items-center gap-7 text-sm font-medium leading-5 text-gray-300 md:flex lg:gap-8"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              data-node-id={item.href}
              className={linkClassName(location === item.href)}
              href={item.href}
              aria-current={location === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div data-node-id="VeelMFZSuzvJ" className="">
          <a
            data-node-id="vhDLiXdGQysI"
            className="hidden items-center gap-2 rounded-sm bg-signal-500 px-5 py-2.5 text-sm font-bold leading-5 text-marine-900 transition-colors duration-150 hover:bg-signal-600 md:flex"
            href="/contact"
          >
            <span data-node-id="gLPzXAqECaix">Request Quote</span>
            <svg
              data-node-id="oayjLCHsRVqI"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <button data-node-id="UoJLhTfkQGbz" className="md:hidden" data-ref="mobile-menu-btn">
            <svg
              data-node-id="CqqCVwvnShkm"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div data-node-id="oTTDuwXjUfdw" className="hidden border-t border-white/10 bg-marine-900 md:hidden" data-ref="mobile-menu">
        <div data-node-id="npQqhWgbIdgw" className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              data-node-id={`${item.href}-mobile`}
              className={mobileLinkClassName(location === item.href)}
              href={item.href}
              aria-current={location === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-link text-signal-500" href="/contact">
            Request Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
