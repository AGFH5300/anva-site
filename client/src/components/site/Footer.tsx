const Footer = () => (
  <footer
    className="border-t border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] pb-[var(--spacing-10)] pt-[var(--spacing-20)] text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]"
    data-shared-component="site-footer"
  >
    <div className="mx-auto px-[var(--spacing-6)]">
      <div className="mb-[var(--spacing-16)] grid grid-cols-1 gap-[var(--spacing-12)] md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-[var(--spacing-6)] flex items-center gap-[var(--spacing-2)]">
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
              className="h-[var(--spacing-6)] w-[var(--spacing-6)] text-[var(--colors-signal-500)]"
            >
              <path d="M12 6v16"></path>
              <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path>
              <path d="M9 11h6"></path>
              <circle cx="12" cy="4" r="2"></circle>
            </svg>
            <span className="font-[var(--fontFamily-display)] text-[var(--fontSize-2xl)] font-[var(--fontWeight-bold)] leading-[32px] tracking-[-0.025em] text-[var(--colors-white)]">
              <span>ANVA</span>
              <span className="text-[var(--colors-signal-500)]">.</span>
              <span>MARINE</span>
            </span>
          </div>
          <p className="mb-[var(--spacing-6)] max-w-[384px]">
            Advanced Nautical Ventures. Delivering end-to-end marine solutions, ship
            repairs, and global OEM support from the heart of Dubai Maritime City.
          </p>
          <div className="flex gap-[var(--spacing-4)]">
            <a
              className="flex h-[var(--spacing-10)] w-[var(--spacing-10)] items-center justify-center rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-marine-800)] transition-colors duration-150 hover:bg-[var(--colors-signal-500)] hover:text-[var(--colors-marine-900)]"
              href="#"
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
                className="h-[var(--spacing-5)] w-[var(--spacing-5)]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              className="flex h-[var(--spacing-10)] w-[var(--spacing-10)] items-center justify-center rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-marine-800)] transition-colors duration-150 hover:bg-[var(--colors-signal-500)] hover:text-[var(--colors-marine-900)]"
              href="#"
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
                className="h-[var(--spacing-5)] w-[var(--spacing-5)]"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-[var(--spacing-6)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
            Quick Links
          </h4>
          <ul className="space-y-[16px]">
            <li>
              <a
                className="transition-colors duration-150 hover:text-[var(--colors-white)]"
                href="/#about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-150 hover:text-[var(--colors-white)]"
                href="/brands"
              >
                Services &amp; Brands
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-150 hover:text-[var(--colors-white)]"
                href="/#quality"
              >
                ISO &amp; Quality
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-150 hover:text-[var(--colors-white)]"
                href="#"
              >
                Vendor Portal
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-150 hover:text-[var(--colors-white)]"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-[var(--spacing-6)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
            Contact
          </h4>
          <ul className="space-y-[16px]">
            <li className="flex gap-[var(--spacing-3)]">
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
                className="h-[var(--spacing-5)] w-[var(--spacing-5)] shrink-0 text-[var(--colors-signal-500)]"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Dubai Maritime City, Industrial Precinct, UAE</span>
            </li>
            <li className="flex gap-[var(--spacing-3)]">
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
                className="h-[var(--spacing-5)] w-[var(--spacing-5)] shrink-0 text-[var(--colors-signal-500)]"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span>+971 4 000 0000</span>
            </li>
            <li className="flex gap-[var(--spacing-3)]">
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
                className="h-[var(--spacing-5)] w-[var(--spacing-5)] shrink-0 text-[var(--colors-signal-500)]"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span>info@anvamarine.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-[var(--spacing-4)] border-t border-[var(--colors-white-10)] pt-[var(--spacing-8)] md:flex-row">
        <p>© 2024 Advanced Nautical Ventures. All rights reserved.</p>
        <div className="flex items-center gap-[var(--spacing-6)]">
          <a
            className="transition-colors duration-150 hover:text-[var(--colors-white)]"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="transition-colors duration-150 hover:text-[var(--colors-white)]"
            href="#"
          >
            Terms of Service
          </a>
          <span className="opacity-50"></span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
