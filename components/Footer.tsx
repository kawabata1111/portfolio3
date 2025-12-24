import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-champagne-100 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6 text-champagne-400">
                <div className="w-6 h-6 border border-current rotate-45 flex items-center justify-center">
                  <div className="w-3 h-3 bg-current" />
                </div>
                <span className="font-serif text-xl tracking-wide">LUMINA</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">
               デザインと戦略を通じて<br/>
               ブランドの価値を高める。
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#philosophy" className="hover:text-champagne-400 transition-colors">Philosophy</a></li>
              <li><a href="#services" className="hover:text-champagne-400 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-champagne-400 transition-colors">Process</a></li>
              <li><a href="#news" className="hover:text-champagne-400 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-champagne-400 transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-serif text-lg mb-6">Social</h4>
             <div className="flex gap-4">
               <a href="#" className="text-slate-400 hover:text-champagne-400 transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-champagne-400 transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-champagne-400 transition-colors"><Twitter size={20} /></a>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Lumina Prestige Corp. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Tokyo &middot; New York &middot; Paris</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;