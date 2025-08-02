import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float blur-md" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-white/15 rounded-full animate-float blur-sm" style={{
      animationDelay: '2s'
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in-up">
          <div className="text-white/90 text-sm font-medium tracking-wider uppercase mb-2">UX/UI DESIGNER</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Abhimanyu Mudaliyar
          </h1>
        </div>
        
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            with a passion for creating thoughtful and 
            visually stunning digital experiences.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="mb-16 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <Button className="hero-button text-lg px-8 py-6 rounded-full shadow-glow" onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            <div className="flex items-center gap-3">
              <span>VIEW PROJECTS</span>
              <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in-up" style={{
        animationDelay: '0.6s'
      }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-20">
        <div className="flex gap-8 text-white/80">
          <a href="#about" className="hover:text-white transition-colors duration-300 font-medium">About Me</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300 font-medium">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300 font-medium">Contact</a>
        </div>
      </nav>
    </section>;
};
export default Hero;