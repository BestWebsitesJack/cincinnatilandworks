content = '''import { Link, useLocation } from "react-router";
import { Phone, Menu, X, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Markets We Serve" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header style={{borderBottom: "3px solid #E8510A"}} className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Cincinnati Landworks LLC" className="h-14 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base transition-colors ${isActive(link.path) ? "font-semibold" : "text-zinc-600 hover:text-zinc-900"}`}
                  style={isActive(link.path) ? {color: "#E8510A"} : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:5136732888" className="flex items-center gap-2 text-base text-zinc-600 hover:text-zinc-900 transition-colors">
                <Phone className="w-5 h-5" />
                (513) 673-2888
              </a>
              <a href="tel:5136732888" className="text-white text-base px-5 py-2.5 rounded transition-colors font-medium" style={{background: "#E8510A"}}>
                Get Quote
              </a>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-base text-zinc-700 hover:text-zinc-900 py-1"
                  style={isActive(link.path) ? {color: "#E8510A", fontWeight: "600"} : {}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:5136732888" className="flex items-center gap-2 text-base text-zinc-600 py-1">
                <Phone className="w-5 h-5" />
                (513) 673-2888
              </a>
            </div>
          </div>
        )}
      </header>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          style={{background: "#E8510A"}}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
'''
with open('src/app/components/Header.tsx', 'w') as f:
    f.write(content)
print("Done")
