import { Container, primaryButtonClass } from "./SitePrimitives";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/products-brands", label: "Products / Brands" },
  { href: "/green-shipping-solutions", label: "Green Shipping Solutions" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-marine-900" data-shared-component="site-footer">
    <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500">ANVA Marine</p>
        <h3 className="mt-3 font-display text-3xl font-bold text-white">Service. Supply. Technical support.</h3>
        <p className="mt-4 max-w-md leading-7 text-gray-300">
          Practical support for shipowners, managers, yards, and technical teams across urgent and planned requirements.
        </p>
        <a href="/contact" className={`${primaryButtonClass} mt-6`}>Start an enquiry</a>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-gray-200">Quick Links</h4>
        <ul className="mt-4 space-y-3 text-gray-300">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a className="transition-colors hover:text-white" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-gray-200">Contact</h4>
        <ul className="mt-4 space-y-3 text-gray-300">
          <li>F1B-W228, Dubai Maritime City, Dubai, UAE</li>
          <li>
            <a className="transition-colors hover:text-white" href="tel:+971523567890">+971 52 356 7890</a> · {" "}
            <a className="transition-colors hover:text-white" href="tel:+971585353890">+971 58 535 3890</a>
          </li>
          <li>
            <a className="transition-colors hover:text-white" href="mailto:info@anva-group.com">info@anva-group.com</a>
          </li>
        </ul>
      </div>
    </Container>

    <div className="border-t border-white/10 py-5">
      <Container className="text-sm text-gray-400">© 2026 ANVA Marine. All rights reserved.</Container>
    </div>
  </footer>
);

export default Footer;
