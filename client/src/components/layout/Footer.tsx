import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003087] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Demand Electric LLC</h3>
            <p className="text-gray-300">
              Over 25 years of trusted electrical service in Mountain Pine, AR
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#FF9933]" />
                <a href="tel:+15016936229" className="text-gray-300 hover:text-[#FF9933]">
                  (501) 693-6229
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#FF9933]" />
                <a href="mailto:info@demandelectric.com" className="text-gray-300 hover:text-[#FF9933]">
                  info@demandelectric.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#FF9933]" />
                <span className="text-gray-300">Mountain Pine, AR</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-[#FF9933]" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-300">8:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Demand Electric LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}