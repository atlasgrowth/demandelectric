import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-[#003087] relative overflow-hidden">
      {/* Animated circuit pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0h-2.827L40.857 11.715 42.272 10.3 32 0zm5.657 0l9.9 9.9 1.414-1.415L40.485 0h-2.828zm-9.657 0L39.9 11.8 41.314 10.385 30.828 0h-2.83zM22.344 0L40.485 18.14 41.9 16.726 24.172 0h-2.83zM32 0h-2.827L47.314 18.14 48.728 16.726 32 0zm5.657 0L56.8 19.142l1.414-1.414L40.485 0h-2.828zm-9.657 0L45.142 22.485 46.556 21.07 30.828 0h-2.83zm9.657 0L48.728 16.07 50.142 14.656 40.485 0h-2.828zM18.686 0L42.9 24.214 44.314 22.8 20.515 0h-2.83zM3.314 0L0 3.314l1.414 1.413L5.657 0H3.314z' fill='white' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Need Electrical Service?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              From emergency repairs to installations, we're here to help 24/7.
              Contact us for a free quote today!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white min-w-[200px]"
                onClick={() => window.location.href = "/contact"}
              >
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#003087] min-w-[200px]"
                onClick={() => window.location.href = "tel:+15555555555"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-200 text-sm"
            >
              Available 24/7 for Emergency Services
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
