import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-champagne-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
             <RevealOnScroll>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://picsum.photos/id/338/800/1000" 
                    alt="Philosophy" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Decorative Border */}
                  <div className="absolute top-6 -right-6 w-full h-full border border-champagne-400 -z-10 hidden md:block" />
                </div>
             </RevealOnScroll>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <RevealOnScroll delay={200}>
              <h2 className="text-champagne-600 text-sm tracking-widest uppercase mb-4 font-semibold">Our Philosophy</h2>
              <h3 className="font-serif text-3xl md:text-4xl text-slate-850 mb-8 leading-tight">
                真の豊かさは、<br/>簡潔さの中に宿る。
              </h3>
              <div className="w-16 h-[1px] bg-champagne-400 mb-8" />
              <p className="text-slate-600 leading-loose mb-6 font-light">
                ノイズの多い現代において、私たちは「明快さ」を選びます。
                真のラグジュアリーとは、目立たない細部にこそ宿るという信念に基づき、
                非本質的なものを削ぎ落とし、ブランドの核となる本質を明らかにします。
              </p>
              <p className="text-slate-600 leading-loose mb-6 font-light">
                デザインの美しさだけでなく、機能としての合理性。
                一瞬の驚きだけでなく、永続的な信頼。
                すべてのピクセル、すべてのインタラクションが、
                洗練された調和を奏でるよう緻密に設計されています。
              </p>
              <blockquote className="border-l-2 border-champagne-300 pl-6 italic text-slate-500 font-serif">
                "Simplicity is the ultimate sophistication."
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;