import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronRight, Lightbulb, Home, Power, Shield } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Electrical Repairs",
    description: "Expert diagnostics and repairs for all electrical issues, big or small."
  },
  {
    icon: Home,
    title: "Residential Services",
    description: "Complete electrical solutions for your home, from installation to maintenance."
  },
  {
    icon: Power,
    title: "Emergency Services",
    description: "24/7 emergency electrical services when you need them most."
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections and upgrades."
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#FF9933] mx-auto"/>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-[#003087]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-[#003087]" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href="/services" 
                    className="inline-flex items-center text-[#FF9933] hover:text-[#FF9933]/80 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
