import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default Layout;
