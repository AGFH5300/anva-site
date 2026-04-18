import { PropsWithChildren } from "react";

import { useLegacyPageEffects } from "../../hooks/useLegacyPageEffects";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  useLegacyPageEffects();

  return (
    <div className="min-h-screen overflow-x-clip bg-marine-900 font-body text-white selection:bg-signal-500 selection:text-marine-900">
      <Header />
      <main className="pt-[4.75rem] lg:pt-[5rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
