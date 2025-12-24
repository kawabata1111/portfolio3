import React from 'react';
import { ArrowDown } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-champagne-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/433/2500/1600" // Architecture/Light abstract
          alt="Lumina Architecture" 
          className="w-full h-full object-cover opacity-80 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-champagne-50/50 via-transparent to-champagne-50/90" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll>
          <span className="block text-champagne-600 tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-6">
            Refining the Future
          </span>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.2] mb-8 font-medium">
            革新に、<br /> 
            <span className="italic text-slate-800">優雅さを。</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className="max-w-xl mx-auto text-slate-600 text-base md:text-lg leading-loose font-light mb-12">
            私たちは、ありふれた体験を超越するデジタルエクスペリエンスを創造します。<br/>
            時代を超えた美学と最先端のテクノロジーを融合させ、<br className="hidden md:inline"/>
            あなたのブランドを新たな次元へと導きます。
          </p>
        </RevealOnScroll>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;