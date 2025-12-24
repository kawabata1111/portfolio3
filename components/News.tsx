import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: '2024.03.15',
    category: 'Press Release',
    title: 'アジア太平洋地域における事業拡大と、シンガポールオフィスの開設について'
  },
  {
    date: '2024.02.28',
    category: 'Award',
    title: '国際デザインアワード「Design Excellence 2024」にて金賞を受賞しました'
  },
  {
    date: '2024.01.10',
    category: 'Media',
    title: '経済誌「Business Visionary」1月号に、CEOインタビューが掲載されました'
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <RevealOnScroll>
            <h2 className="text-champagne-600 text-sm tracking-widest uppercase mb-4 font-semibold">Latest News</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-slate-850">ニュース</h3>
           </RevealOnScroll>
           <RevealOnScroll delay={100}>
             <a href="#" className="hidden md:flex items-center gap-2 text-sm text-slate-500 hover:text-champagne-600 transition-colors mt-4 md:mt-0">
               View All <ArrowRight size={16} />
             </a>
           </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-0 border-t border-slate-100">
          {newsItems.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <a href="#" className="group block border-b border-slate-100 py-8 hover:bg-champagne-50/30 transition-colors px-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <div className="flex items-center gap-6 md:w-1/4">
                    <span className="text-sm text-slate-400 font-sans">{item.date}</span>
                    <span className="text-xs px-3 py-1 border border-champagne-300 text-champagne-700 rounded-full">{item.category}</span>
                  </div>
                  <div className="md:w-3/4 flex justify-between items-center">
                    <h4 className="text-base md:text-lg text-slate-800 group-hover:text-champagne-800 transition-colors font-medium">
                      {item.title}
                    </h4>
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-champagne-500">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-champagne-600 transition-colors">
            View All <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;