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
              <span className="text-[#E8510A] ml-2">LANDWORKS</span>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Cincinnati's trusted commercial & industrial concrete contractor serving OH, KY & IN. No residential — 100% commercial focus.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/cincinnatilandworks/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E8510A] transition-colors">
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/kyle-johnson-b0a5b02b0/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E8510A] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-[#E8510A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-[#E8510A] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-400 hover:text-[#E8510A] transition-colors">Markets We Serve</Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-[#E8510A] transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-[#E8510A] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Industrial Warehouse Flooring</li>
              <li>Commercial Concrete Footings</li>
              <li>Parking Lots & Pavement</li>
              <li>Loading Dock Installation</li>
              <li>Concrete Crack Repair</li>
              <li>Commercial Drainage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:5136144190" className="text-zinc-400 hover:text-[#E8510A] transition-colors">
                  (513) 614-4190
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:michele@cincinnatilandworks.com" className="text-zinc-400 hover:text-[#E8510A] transition-colors">
                  michele@cincinnatilandworks.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400">24 Landy Lane, Unit 4A<br />Reading, OH 45215</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400">Mon-Fri: 8AM-4PM<br />Sat-Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Cincinnati Landworks LLC. All rights reserved.</p><p className="mt-2">Built by <a href="https://www.bestwebsites.tech" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8510A] transition-colors">Best Websites LLC</a></p>
        </div>
      </div>
    </footer>
  );
}
