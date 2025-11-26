import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloorInfo } from '../types';
import { SectionTitle } from './ui/SectionTitle';
import { Theme } from '../App';

interface FloorGuideProps {
  theme?: Theme;
}

const floors: FloorInfo[] = [
  {
    floor: "6F",
    title: "MAIN STAGE",
    description: "トークセッションやパフォーマンスをメインに、学び、語り合うメインの大宴会場。業界のトップランナーたちが集結し、未来を語り尽くします。",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop",
    tags: ["Talk Session", "Performance", "Conference"]
  },
  {
    floor: "5F",
    title: "RADIO BOOTH + PLAY LOUNGE",
    description: "公開ラジオ収録やアーティストトーク、卓球台やビリヤードなどを備えた、交流と遊びのための空間。カジュアルな出会いがここから生まれます。",
    image: "https://images.unsplash.com/photo-1571266028243-371695063176?q=80&w=1600&auto=format&fit=crop",
    tags: ["Radio", "DJ", "Bar", "Ping Pong"]
  },
  {
    floor: "4F",
    title: "ART BOOK FAIR + SPONSOR BOOTH",
    description: "アートブックやZINE、ブランド展示が並ぶマーケットエリア。来場者が偶然の出会いや新しい感性に触れられる場所です。",
    image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=1600&auto=format&fit=crop",
    tags: ["Market", "Exhibition", "Networking"]
  }
];

export const FloorGuide: React.FC<FloorGuideProps> = () => {
  const [activeFloor, setActiveFloor] = useState<FloorInfo>(floors[0]);

  return (
    <section id="floorguide" className="py-24 border-t relative" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        
        <div className="flex flex-col justify-center">
          <div className="mb-12">
             <SectionTitle title="Floor Guide" subtitle="Venue Map" align="left" />
          </div>
          
          <div className="flex flex-col border-t" style={{ borderColor: 'var(--border-color)' }}>
            {floors.map((floor) => (
              <div 
                key={floor.floor}
                onMouseEnter={() => setActiveFloor(floor)}
                className={`group border-b py-8 cursor-pointer transition-colors duration-300 ${activeFloor.floor === floor.floor ? 'text-[var(--bg-color)]' : 'hover:opacity-50'}`}
                style={{ 
                   borderColor: 'var(--border-color)',
                   backgroundColor: activeFloor.floor === floor.floor ? 'var(--accent-color)' : 'transparent'
                }}
              >
                <div className="px-4 flex items-baseline gap-6">
                  <span className="text-5xl font-black italic tracking-tighter font-display">
                    {floor.floor}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">
                      {floor.title}
                    </h3>
                    <p className={`text-sm ${activeFloor.floor === floor.floor ? 'opacity-90' : 'opacity-50'}`}>
                      {floor.tags.join(" / ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] w-full border p-2 overflow-hidden bg-[var(--secondary-bg)]" style={{ borderColor: 'var(--border-color)' }}>
          <AnimatePresence mode="wait">
             <motion.div
               key={activeFloor.floor}
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
               className="h-full w-full relative"
             >
               <img 
                 src={activeFloor.image} 
                 alt={activeFloor.title} 
                 className="w-full h-full object-cover grayscale contrast-125"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="font-black text-6xl opacity-20 absolute -top-12 -left-4 z-0 text-[var(--accent-color)] font-display">
                   {activeFloor.floor}
                 </div>
                 <p className="relative z-10 font-medium leading-relaxed drop-shadow-md text-white">
                   {activeFloor.description}
                 </p>
               </div>
             </motion.div>
          </AnimatePresence>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-color)]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-color)]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-color)]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-color)]"></div>
        </div>
      </div>
    </section>
  );
};