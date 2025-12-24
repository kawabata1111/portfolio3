import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const steps = [
  {
    num: '01',
    title: 'Hearing & Analysis',
    jpTitle: 'ヒアリング・現状分析',
    desc: 'お客様のビジョン、課題、そして潜在的な可能性を深く理解することから始まります。徹底的な対話を通じて、プロジェクトの核となる価値を見出します。'
  },
  {
    num: '02',
    title: 'Strategic Planning',
    jpTitle: '戦略策定',
    desc: '市場調査と競合分析に基づき、最適なロードマップを描きます。短期的な成果だけでなく、長期的なブランド価値の向上を見据えたプランをご提案します。'
  },
  {
    num: '03',
    title: 'Creative Execution',
    jpTitle: '制作・開発',
    desc: '洗練されたデザインと堅牢なテクノロジーを融合。細部に至るまで美意識を貫き、ユーザーの心を動かす体験を形にします。'
  },
  {
    num: '04',
    title: 'Growth & Support',
    jpTitle: '運用・グロース',
    desc: 'リリースはゴールではありません。データに基づいた継続的な改善とサポートにより、ビジネスの持続的な成長を伴走支援します。'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-champagne-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
           <RevealOnScroll>
            <h2 className="text-champagne-600 text-sm tracking-widest uppercase mb-4 font-semibold">Process</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-slate-850">導入フロー</h3>
           </RevealOnScroll>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.num} delay={index * 100}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-champagne-200 pt-12 hover:bg-white/50 transition-colors duration-500 p-6 md:p-8 rounded-lg">
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-serif text-champagne-300 font-light">{step.num}</span>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-xl md:text-2xl font-serif text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-champagne-600 font-medium tracking-wide">{step.jpTitle}</p>
                </div>
                <div className="md:w-1/2">
                  <p className="text-slate-600 leading-loose font-light">{step.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;