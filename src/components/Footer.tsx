import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Abhimanyu Mudaliyar. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Abhimanyu Mudaliyar</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About</a>
            <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;