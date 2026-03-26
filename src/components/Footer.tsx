import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-heading font-bold mb-4">
            Gaba <span className="text-primary">Dental</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Premium dental & skin cosmetology clinic offering advanced painless treatments in Ludhiana.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
            <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
            <Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <span>Dental Implants</span>
            <span>Root Canal</span>
            <span>Braces & Invisalign</span>
            <span>Botox & Fillers</span>
            <span>Laser Hair Removal</span>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              Model Town, Ludhiana, Punjab
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              098726 22231
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-primary" />
              Mon–Sat: 10AM – 7PM
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Gaba Dental & Skin Cosmetology Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
