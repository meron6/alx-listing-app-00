import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

