import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";
import Before from "./before-footer";

export default function Root() {
  const location = useLocation();

  const hideBeforeOn = ["/videos"];
  const shouldShowBefore = !hideBeforeOn.includes(location.pathname.toLowerCase());

  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>

      {shouldShowBefore && <Before />}
      <Footer />
    </>
  );
}