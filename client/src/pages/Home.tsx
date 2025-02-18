import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CallToAction />
      <ChatWidget />
    </motion.div>
  );
}