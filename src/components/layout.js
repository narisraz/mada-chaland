import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function Layout() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
