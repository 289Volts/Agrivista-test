import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="space-y-10 md:space-y-[calc(150rem/16)]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
