import { Card, CardContent } from "@/components/ui/card";
import { Palette, Globe, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UX/UX Design",
      icon: Palette,
      description: "Creating intuitive and user-centered designs that enhance digital experiences",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Web Design",
      icon: Globe,
      description: "Responsive and modern web designs that work seamlessly across all devices",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Mobile App Design",
      icon: Smartphone,
      description: "Native and cross-platform mobile app designs optimized for user engagement",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-white/10">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-purple-600/20 flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-white/30" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;