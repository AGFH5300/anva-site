import NavLogoLottie from "./NavLogoLottie";

const Header = () => (
  <nav
    data-node-id="gmyxkPFhSakx"
    className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-marine-900-90 backdrop-blur-md"
    data-shared-component="primary-navigation"
  >
    <div
      data-node-id="JiWOfPBWaCWm"
      className="mx-auto flex h-20 items-center justify-between px-6"
    >
      <div data-node-id="eJwWIABxuAxw" className="flex items-center gap-3">
        <a
          data-node-id="jQYXkwrxjwtX"
          className="font-display text-2xl font-bold leading-8 tracking-[-0.025em]"
          href="/"
          aria-label="ANVA home"
        >
          <NavLogoLottie />
        </a>
      </div>
      <div
        data-node-id="pipWZEBYfTCy"
        className="hidden items-center gap-8 text-sm font-medium leading-5 text-gray-300 md:flex"
      >
        <a
          data-node-id="CXdDrucOJkEv"
          className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
          href="/brands"
        >
          Services &amp; Brands
        </a>
        <a
          data-node-id="nTZRDbcQFzLD"
          className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
          href="/#about"
        >
          About
        </a>
        <a
          data-node-id="bZSXFJRMUxfp"
          className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Contact
        </a>
      </div>
      <div data-node-id="VeelMFZSuzvJ" className="">
        <a
          data-node-id="vhDLiXdGQysI"
          className="hidden items-center gap-2 rounded-sm bg-signal-500 px-5 py-2.5 text-sm font-bold leading-5 text-marine-900 transition-colors duration-150 hover:bg-signal-600 md:flex"
          href="/#rfq"
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
        <button data-node-id="UoJLhTfkQGbz" className="" data-ref="mobile-menu-btn">
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
    <div data-node-id="oTTDuwXjUfdw" className="" data-ref="mobile-menu">
      <div data-node-id="npQqhWgbIdgw" className="">
        <a data-node-id="SeBbHpOwptqN" className="nav-link" href="/brands">
          Services &amp; Brands
        </a>
        <a data-node-id="lMzPyPeHOFOr" className="nav-link" href="/#about">
          About
        </a>
        <a data-node-id="gyVctdlfbCCP" className="nav-link" href="/contact">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
