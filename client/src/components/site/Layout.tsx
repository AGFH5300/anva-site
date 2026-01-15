import { PropsWithChildren } from "react";

import { useLegacyPageEffects } from "../../hooks/useLegacyPageEffects";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  useLegacyPageEffects();

  return (
    <div data-node-id="aYtCzgLuEOHT" className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
