import { PropsWithChildren } from "react";

import { useLegacyPageEffects } from "../../hooks/useLegacyPageEffects";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  useLegacyPageEffects();

  return (
    <div
      data-node-id="aYtCzgLuEOHT"
      className="bg-marine-900 font-body text-white selection:bg-signal-500 selection:text-marine-900 overflow-x-hidden"
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
