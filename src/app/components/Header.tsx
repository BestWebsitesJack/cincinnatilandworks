import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-zinc-900 text-white sticky top-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-zinc-800 py-2 hidden md:block">
          <div className="flex justify-between items-center text-sm">
            <div className="text-zinc-400">
              Serving the Cincinnati Tri-State Area
            </div>
            <a 
              href="tel:513-673-2888" 
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (513) 673-2888
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl tracking-tight">
            <span className="font-semibold">Cincinnati</span>
            <span className="text-orange-500 ml-2">Landworks LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-orange-500"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:513-673-2888"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 transition-colors ${
                  isActive(link.path)
                    ? "text-orange-500"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:513-673-2888"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 py-3"
            >
              <Phone className="w-4 h-4" />
              (513) 673-2888
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
