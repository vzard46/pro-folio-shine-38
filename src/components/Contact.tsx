import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect There</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">abhimanyu.mudaliyar@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">Name</label>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Subject</label>
                    <Input 
                      placeholder="Project Discussion" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                    />
                  </div>
                  
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none"
                    />
                  </div>
                  
                  <Button className="hero-button w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;