import { Link, useLocation } from "react-router";
import { Phone, Menu, X, ArrowUp, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive =
    location.pathname === "/services" || location.pathname === "/residential";

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header style={{ borderBottom: "3px solid #E8510A" }} className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Cincinnati Landworks LLC" className="h-14 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-base transition-colors ${isActive("/") ? "font-semibold" : "text-zinc-600 hover:text-zinc-900"}`}
                style={isActive("/") ? { color: "#E8510A" } : {}}
              >
                Home
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((o) => !o)}
                  className={`flex items-center gap-1 text-base transition-colors focus:outline-none ${
                    isServicesActive ? "font-semibold" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                  style={isServicesActive ? { color: "#E8510A" } : {}}
                >
                  Services
                  <ChevronDown
                    className="w-4 h-4 transition-transform"
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full bg-white rounded-b-md shadow-lg min-w-[190px] z-50"
                    style={{ borderTop: "3px solid #E8510A", marginTop: "17px" }}
                  >
                    <Link
                      to="/services"
                      className="block px-5 py-3 text-sm border-b border-zinc-100 transition-colors hover:bg-orange-50"
                      style={isActive("/services") ? { color: "#E8510A", fontWeight: "600" } : { color: "#444" }}
                      onClick={() => setServicesOpen(false)}
                    >
                      Commercial
                    </Link>
                    <Link
                      to="/residential"
                      className="block px-5 py-3 text-sm transition-colors hover:bg-orange-50"
                      style={isActive("/residential") ? { color: "#E8510A", fontWeight: "600" } : { color: "#444" }}
                      onClick={() => setServicesOpen(false)}
                    >
                      Residential
                    </Link>
                  </div>
                )}
              </div>

              {[
                { path: "/projects", label: "Industries" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
                { path: "/careers", label: "Careers" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base transition-colors ${isActive(link.path) ? "font-semibold" : "text-zinc-600 hover:text-zinc-900"}`}
                  style={isActive(link.path) ? { color: "#E8510A" } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:5136144190" className="flex items-center gap-2 text-base text-zinc-600 hover:text-zinc-900 transition-colors">
                <Phone className="w-5 h-5" />
                (513) 614-4190
              </a>
              <a
                href="tel:5136144190"
                className="text-white text-base px-5 py-2.5 rounded transition-colors font-medium"
                style={{ background: "#E8510A" }}
              >
                Get Quote
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block text-base text-zinc-700 hover:text-zinc-900 py-1"
                style={isActive("/") ? { color: "#E8510A", fontWeight: "600" } : {}}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="pl-0">
                <div className="text-base text-zinc-500 py-1 font-medium">Services</div>
                <Link
                  to="/services"
                  className="block text-base text-zinc-700 hover:text-zinc-900 py-1 pl-4"
                  style={isActive("/services") ? { color: "#E8510A", fontWeight: "600" } : {}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Commercial
                </Link>
                <Link
                  to="/residential"
                  className="block text-base text-zinc-700 hover:text-zinc-900 py-1 pl-4"
                  style={isActive("/residential") ? { color: "#E8510A", fontWeight: "600" } : {}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Residential
                </Link>
              </div>

              {[
                { path: "/projects", label: "Industries" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
                { path: "/careers", label: "Careers" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-base text-zinc-700 hover:text-zinc-900 py-1"
                  style={isActive(link.path) ? { color: "#E8510A", fontWeight: "600" } : {}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a href="tel:5136144190" className="flex items-center gap-2 text-base text-zinc-600 py-1">
                <Phone className="w-5 h-5" />
                (513) 614-4190
              </a>
            </div>
          </div>
        )}
      </header>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          style={{ background: "#E8510A" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
