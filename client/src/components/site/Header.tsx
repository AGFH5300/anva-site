import NavLogoLottie from "./NavLogoLottie";

const Header = () => (
  <nav
    className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--colors-white-10)] bg-[var(--colors-marine-900-90)] backdrop-blur-[12px]"
    data-shared-component="primary-navigation"
  >
    <div className="mx-auto flex h-[var(--spacing-20)] items-center justify-between px-[var(--spacing-6)]">
      <div className="flex items-center gap-[var(--spacing-3)]">
        <a
          className="flex items-center font-[var(--fontFamily-display)] text-[var(--fontSize-2xl)] font-[var(--fontWeight-bold)] leading-[32px] tracking-[-0.025em]"
          href="/"
          aria-label="ANVA home"
        >
          <NavLogoLottie />
        </a>
      </div>
      <div className="hidden items-center gap-[var(--spacing-8)] text-[var(--fontSize-sm)] font-[var(--fontWeight-medium)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-300)] md:flex">
        <a
          className="transition-colors duration-150 hover:text-[var(--colors-white)] hover:underline hover:underline-offset-4"
          href="/brands"
        >
          Services &amp; Brands
        </a>
        <a
          className="transition-colors duration-150 hover:text-[var(--colors-white)] hover:underline hover:underline-offset-4"
          href="/#about"
        >
          About
        </a>
        <a
          className="transition-colors duration-150 hover:text-[var(--colors-white)] hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-[var(--spacing-4)]">
        <a
          className="hidden items-center gap-[var(--spacing-2)] rounded-[var(--borderRadius-sm)] bg-[var(--colors-signal-500)] px-[var(--spacing-5)] py-[var(--spacing-2-5)] text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)] text-[var(--colors-marine-900)] transition-colors duration-150 hover:bg-[var(--colors-signal-600)] md:flex"
          href="/#rfq"
        >
          <span>Request Quote</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[var(--spacing-4)] w-[var(--spacing-4)]"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
        <button
          className="block text-[var(--colors-white)] md:hidden"
          data-ref="mobile-menu-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[var(--spacing-6)] w-[var(--spacing-6)]"
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      className="hidden border-t border-[var(--colors-white-10)] bg-[var(--colors-marine-900)]"
      data-ref="mobile-menu"
    >
      <div className="flex flex-col gap-[var(--spacing-4)] p-[var(--spacing-6)]">
        <a
          className="text-[var(--fontSize-lg)] font-[var(--fontWeight-medium)] leading-[28px] hover:underline hover:underline-offset-4"
          href="/brands"
        >
          Services &amp; Brands
        </a>
        <a
          className="text-[var(--fontSize-lg)] font-[var(--fontWeight-medium)] leading-[28px] hover:underline hover:underline-offset-4"
          href="/#about"
        >
          About
        </a>
        <a
          className="text-[var(--fontSize-lg)] font-[var(--fontWeight-medium)] leading-[28px] hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
