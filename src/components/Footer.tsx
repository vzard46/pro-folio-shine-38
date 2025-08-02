import { Heart } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500" /> by Your Name
        </p>
      </div>
    </footer>
  );
};
export default Footer;