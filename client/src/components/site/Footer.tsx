const Footer = () => (
  <footer className="border-t border-white/10 bg-marine-900" data-shared-component="site-footer">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <h3 className="mb-4 font-display text-2xl font-bold tracking-wide">ANVA.MARINE</h3>
        <p className="max-w-md leading-7 text-gray-400">
          Practical marine support for shipowners, managers, yards, and technical teams.
          Service, supply, and technical expertise for urgent and planned requirements.
        </p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-gray-300">Quick Links</h4>
        <ul className="space-y-3 text-gray-400">
          <li><a className="hover:text-white" href="/services">Services</a></li>
          <li><a className="hover:text-white" href="/products-brands">Products / Brands</a></li>
          <li><a className="hover:text-white" href="/green-shipping-solutions">Green Shipping Solutions</a></li>
          <li><a className="hover:text-white" href="/contact">Contact</a></li>
          <li><a className="hover:text-white" href="/about">About</a></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-gray-300">Contact</h4>
        <ul className="space-y-3 text-gray-400">
          <li>F1B-W228, Dubai Maritime City, Dubai, UAE</li>
          <li>+971 52 356 7890 | +971 58 535 3890</li>
          <li>info@anva-group.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-gray-500">
      © 2026 ANVA Marine. All rights reserved.
    </div>
  </footer>
);

export default Footer;
