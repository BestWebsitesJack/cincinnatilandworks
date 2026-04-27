import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-xl mb-4">
              <span className="font-semibold text-white">CINCINNATI</span>
              <span className="text-orange-500 ml-2">CONCRETE</span>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Your trusted partner for commercial concrete solutions in the Cincinnati Tri-State area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-400 hover:text-orange-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Commercial Flooring</li>
              <li>Foundation Work</li>
              <li>Parking Lots</li>
              <li>Warehouse Floors</li>
              <li>Concrete Repair</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:513-555-0100" className="text-zinc-400 hover:text-orange-500 transition-colors">
                  (513) 555-0100
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@cincinnaticoncrete.com" className="text-zinc-400 hover:text-orange-500 transition-colors">
                  info@cincinnaticoncrete.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400">
                  Cincinnati, OH Tri-State Area
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400">
                  Mon-Fri: 7AM-6PM<br />Sat: 8AM-4PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Cincinnati Concrete. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
