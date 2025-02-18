import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0039A6] to-[#004dc9] text-white py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipNFmOsJLykXM446QtXZfekgPHgVRJ6F7qFjFw-t=s680-w680-h510")'
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Your Trusted Electrical Partner
            </h1>
            <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
              With 25+ years of excellence serving Mountain Pine, AR and surrounding areas,
              we deliver professional electrical solutions you can count on.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white min-w-[200px] transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "tel:+15016936229"}
              >
                <Phone className="mr-2 h-4 w-4" />
                (501) 693-6229
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white min-w-[200px] transform hover:scale-105 transition-all"
                onClick={() => window.location.href = "/services"}
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510"
              alt="Professional Electrical Services"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}