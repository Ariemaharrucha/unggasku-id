import { Footer } from "../components/shared/Footer.jsx";
import { Navbar } from "../components/shared/Navbar.jsx";

export const Layout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-grow">{children}</main>
      <Footer></Footer>
    </section>
  );
};
