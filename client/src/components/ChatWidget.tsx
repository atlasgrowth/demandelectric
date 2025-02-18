import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, X } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const isBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    return day >= 1 && day <= 5 && hour >= 8 && hour < 17;
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Card className="w-[320px] shadow-lg">
              <CardHeader className="bg-[#003087] text-white rounded-t-xl">
                <div className="flex items-center justify-between">
                  <img
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/ZjE2kYNlTmPlZl_W27JVUg/o.jpg"
                    alt="Demand Electric"
                    className="h-10 w-auto object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm mb-4">
                  Thanks for visiting Demand Electric! How can we help with your electrical needs today?
                </p>
                <p className="text-sm mb-4 font-semibold">
                  We're currently {isBusinessHours() ? "open" : "closed"}. 
                  <br />Business hours: Mon-Fri 8AM-5PM
                </p>
                <form className="space-y-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </form>
              </CardContent>
              <CardFooter className="bg-gray-50 rounded-b-xl">
                <Button 
                  className="w-full bg-[#FF9933] hover:bg-[#FF9933]/90"
                  onClick={() => {
                    // Handle form submission
                    setIsOpen(false);
                    setFormData({ name: "", phone: "", email: "", message: "" });
                  }}
                >
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-15 h-15 rounded-full bg-[#003087] text-white shadow-lg z-50 p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    </>
  );
}
