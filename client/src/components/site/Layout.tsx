import { PropsWithChildren } from "react";

import { useLegacyPageEffects } from "../../hooks/useLegacyPageEffects";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  useLegacyPageEffects();

  return (
    <div className="min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#edf2f9_0%,#f8fafd_36%,#eef3f9_100%)] font-body text-white selection:bg-signal-500 selection:text-marine-900">
      <Header />
      <main className="pt-[5.75rem] lg:pt-[6.2rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
