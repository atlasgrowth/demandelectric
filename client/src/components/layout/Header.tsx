import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#003087]/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="cursor-pointer"
          >
            <img 
              src="https://s3-media0.fl.yelpcdn.com/bphoto/ZjE2kYNlTmPlZl_W27JVUg/o.jpg" 
              alt="Demand Electric LLC Logo" 
              className="h-[200px] w-auto object-contain rounded shadow-lg p-2 transition-transform hover:scale-105" 
            />
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`text-lg font-semibold transition-colors relative ${
                  location === item.href
                    ? "text-[#FF9933]"
                    : "text-white" 
                }`}
              >
                {item.label}
                {location === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-[#FF9933] bottom-0"
                  />
                )}
              </a>
            </Link>
          ))}
          <Button
            variant="ghost"
            className="text-[#FF9933] hover:text-[#FF9933]/80"
            onClick={() => window.location.href = "tel:+15016936229"}
          >
            <Phone className="mr-2 h-4 w-4" />
            (501) 693-6229
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 top-20 bg-[#003087] z-40 md:hidden" 
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <a
                      className={`block py-2 text-xl font-semibold ${
                        location === item.href
                          ? "text-[#FF9933]"
                          : "text-white" 
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  className="w-full text-[#FF9933]"
                  onClick={() => window.location.href = "tel:+15016936229"}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (501) 693-6229
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}