import { PropsWithChildren } from "react";

import { useLegacyPageEffects } from "../../hooks/useLegacyPageEffects";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  useLegacyPageEffects();

  return (
    <div className="overflow-x-hidden bg-[var(--colors-marine-900)] font-[var(--fontFamily-body)] text-[var(--colors-white)] selection:bg-[var(--colors-signal-500)] selection:text-[var(--colors-marine-900)]">
      <svg
        width="32"
        height="26"
        viewBox="0 0 85 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="35" cy="13" r="13" fill="#00FF22"></circle>
        <path
          d="M0 2.82843C0 1.04662 2.15428 0.154284 3.41421 1.41421L23.5858 21.5858C24.8457 22.8457 23.9534 25 22.1716 25H2C0.895431 25 0 24.1046 0 23V2.82843Z"
          fill="#00FF22"
        ></path>
        <path
          d="M49 3C49 1.89543 49.8954 1 51 1H68.4535C70.1937 1 71.1037 3.06865 69.9278 4.35145L62.6194 12.3243C62.269 12.7066 62.269 13.2934 62.6194 13.6757L69.9278 21.6485C71.1037 22.9314 70.1937 25 68.4535 25H51C49.8954 25 49 24.1046 49 23V3Z"
          fill="#00FF22"
        ></path>
        <path
          d="M72 3C72 1.89543 72.8954 1 74 1H83C84.1046 1 85 1.89543 85 3V23C85 24.1046 84.1046 25 83 25H74C72.8954 25 72 24.1046 72 23V3Z"
          fill="#00FF22"
        ></path>
      </svg>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
