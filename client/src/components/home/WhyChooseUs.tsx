import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind"
  },
  {
    icon: Clock,
    title: "25+ Years Experience",
    description: "Decades of trusted service in Mountain Pine"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Satisfaction guaranteed on all our work"
  },
  {
    icon: ThumbsUp,
    title: "Fair Pricing",
    description: "Competitive rates with no hidden fees"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Demand Electric?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on delivering exceptional electrical services with a focus on safety, 
              reliability, and customer satisfaction. Our experienced team ensures every job is done right 
              the first time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-none bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-[#003087]/10">
                          <reason.icon className="w-6 h-6 text-[#003087]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                          <p className="text-gray-600">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#003087]/10 rounded-lg transform translate-x-4 translate-y-4" />
              <div className="relative bg-[#003087] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF9933] rounded-full" />
                    <span>Same-day service for emergencies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF9933] rounded-full" />
                    <span>Upfront, honest pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF9933] rounded-full" />
                    <span>Clean, professional service</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF9933] rounded-full" />
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
