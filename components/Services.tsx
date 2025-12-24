import React from 'react';
import { Diamond, TrendingUp, Globe, Shield } from 'lucide-react';
import { ServiceItem } from '../types';
import RevealOnScroll from './RevealOnScroll';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Brand Strategy',
    description: '市場をリードする洞察力で、ビジネスの魂となるブランドアイデンティティを定義します。',
    iconName: 'Diamond',
    image: 'https://picsum.photos/id/449/600/400'
  },
  {
    id: '2',
    title: 'Digital Growth',
    description: 'データ駆動型のパフォーマンスマーケティングにより、プレゼンスを加速させます。',
    iconName: 'TrendingUp',
    image: 'https://picsum.photos/id/180/600/400'
  },
  {
    id: '3',
    title: 'Global Expansion',
    description: '文化の架け橋となり、あなたのビジョンを国際的なステージへと展開します。',
    iconName: 'Globe',
    image: 'https://picsum.photos/id/137/600/400'
  },
  {
    id: '4',
    title: 'Risk Management',
    description: '高度な分析的予見により、企業のレガシーと未来を強固に守り抜きます。',
    iconName: 'Shield',
    image: 'https://picsum.photos/id/1059/600/400'
  }
];

const IconMap = {
  Diamond,
  TrendingUp,
  Globe,
  Shield
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-850 mb-4">Our Expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">ビジネスのあらゆる側面において、卓越した価値を提供します。</p>
           </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <RevealOnScroll key={service.id} delay={index * 100}>
                <div className="group h-full p-8 border border-slate-100 bg-champagne-50/20 hover:bg-white hover:shadow-xl hover:shadow-champagne-100 transition-all duration-500 cursor-default">
                  <div className="mb-6 text-champagne-500 group-hover:text-champagne-600 transition-colors">
                    <Icon size={32} strokeWidth={1} />
                  </div>
                  <h3 className="font-serif text-xl text-slate-800 mb-4 group-hover:text-champagne-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="w-8 h-[1px] bg-slate-300 group-hover:w-full group-hover:bg-champagne-400 transition-all duration-500" />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;