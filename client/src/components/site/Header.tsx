import NavLogoLottie from "./NavLogoLottie";

const Header = () => (
  <nav

    className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-marine-900-90 backdrop-blur-md"
    data-shared-component="primary-navigation"
  >
    <div

      className="mx-auto flex h-20 items-center justify-between px-6"
    >
      <div className="flex items-center gap-3">
        <a

          className="font-display text-2xl font-bold leading-8 tracking-[-0.025em]"
          href="/"
          aria-label="ANVA home"
        >
          <NavLogoLottie />
        </a>
      </div>
      <div

        className="hidden items-center gap-8 text-sm font-medium leading-5 text-gray-300 md:flex"
      >
        <a

          className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
          href="/brands"
        >
          Services &amp; Brands
        </a>
        <a

          className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
          href="/#about"
        >
          About
        </a>
        <a

          className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Contact
        </a>
      </div>
      <div className="">
        <a

          className="hidden items-center gap-2 rounded-sm bg-signal-500 px-5 py-2.5 text-sm font-bold leading-5 text-marine-900 transition-colors duration-150 hover:bg-signal-600 md:flex"
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
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
        <button className="" data-ref="mobile-menu-btn">
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
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="" data-ref="mobile-menu">
      <div className="">
        <a className="nav-link" href="/brands">
          Services &amp; Brands
        </a>
        <a className="nav-link" href="/#about">
          About
        </a>
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
