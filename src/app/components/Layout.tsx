import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#E8510A] p-3 flex items-center justify-center gap-3">
        <a href="tel:5136732888" className="text-white font-semibold text-base flex items-center gap-2" id="sticky-call-bar">
          📞 Call Now — (513) 673-2888
        </a>
      </div>
    </div>
  );
}
