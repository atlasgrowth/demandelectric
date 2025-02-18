import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Check, Zap, Home, Settings, Shield } from "lucide-react";

const services = {
  residential: [
    {
      title: "Electrical Repairs",
      description: "Expert troubleshooting and repair of electrical issues",
      features: ["Same-day service", "Upfront pricing", "Licensed technicians"]
    },
    {
      title: "Panel Upgrades",
      description: "Modern electrical panel installations and upgrades",
      features: ["Safety inspections", "Code compliance", "Warranty included"]
    }
  ],
  commercial: [
    {
      title: "Commercial Wiring",
      description: "Complete commercial electrical installations",
      features: ["Custom solutions", "Energy efficient", "Minimal disruption"]
    },
    {
      title: "Safety Systems",
      description: "Emergency lighting and safety system installations",
      features: ["Regular maintenance", "Code compliant", "Professional installation"]
    }
  ],
  industrial: [
    {
      title: "Industrial Services",
      description: "Specialized electrical solutions for industrial facilities",
      features: ["Equipment installation", "Preventive maintenance", "System upgrades"]
    }
  ]
};

const ServiceCard = ({ title, description, features }: {
  title: string;
  description: string;
  features: string[];
}) => (
  <Card className="h-full">
    <CardHeader>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#FF9933]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative py-20 bg-[#003087]">
        <div 
          className="absolute inset-0 bg-black/60"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Professional Electrical Services
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Comprehensive electrical solutions for residential and commercial needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="residential" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="residential">
                <Home className="w-4 h-4 mr-2" />
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial">
                <Settings className="w-4 h-4 mr-2" />
                Commercial
              </TabsTrigger>
              <TabsTrigger value="industrial">
                <Shield className="w-4 h-4 mr-2" />
                Industrial
              </TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ServiceCard {...service} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF9933] hover:bg-[#FF9933]/90"
              onClick={() => window.location.href = "/contact"}
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#003087] text-[#003087]"
              onClick={() => window.location.href = "tel:+15016936229"}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}