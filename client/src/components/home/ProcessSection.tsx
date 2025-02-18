import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Wrench, ClipboardCheck, Zap } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Reach out via phone or our contact form for a free consultation"
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description: "We'll evaluate your electrical needs and provide a detailed quote"
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description: "Our licensed technicians complete the work to the highest standards"
  },
  {
    icon: Zap,
    title: "Satisfaction",
    description: "Enjoy peace of mind with our satisfaction guarantee"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#003087] relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0h-2.827L40.857 11.715 42.272 10.3 32 0zm5.657 0l9.9 9.9 1.414-1.415L40.485 0h-2.828zm-9.657 0L39.9 11.8 41.314 10.385 30.828 0h-2.83zM22.344 0L40.485 18.14 41.9 16.726 24.172 0h-2.83zM32 0h-2.827L47.314 18.14 48.728 16.726 32 0zm5.657 0L56.8 19.142l1.414-1.414L40.485 0h-2.828zm-9.657 0L45.142 22.485 46.556 21.07 30.828 0h-2.83zm9.657 0L48.728 16.07 50.142 14.656 40.485 0h-2.828zM18.686 0L42.9 24.214 44.314 22.8 20.515 0h-2.83zM3.314 0L0 3.314l1.414 1.413L5.657 0H3.314z' fill='white' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Simple, efficient, and professional electrical services in four easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-white/10 border-none text-white">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-[#FF9933] to-transparent" />
                )}
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#FF9933]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
