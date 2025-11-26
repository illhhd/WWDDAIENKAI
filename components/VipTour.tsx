import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { Theme } from '../App';

interface VipTourProps {
  theme?: Theme;
}

export const VipTour: React.FC<VipTourProps> = ({ theme }) => {
  return (
    <section id="vip" className="py-24 relative overflow-hidden border-t" 
      style={{ backgroundColor: 'var(--accent-color)', color: theme === 'flux' ? 'black' : 'white', borderColor: 'var(--border-color)' }}
    >
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="border-b-4 pb-8 mb-12 flex flex-col md:flex-row justify-between items-end" style={{ borderColor: theme === 'flux' ? 'black' : 'white' }}>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            VIP<br/>TOUR
          </h2>
          <span className="text-xl font-bold font-mono px-4 py-2" style={{ backgroundColor: theme === 'flux' ? 'black' : 'white', color: 'var(--accent-color)' }}>
            LIMITED 22 SEATS
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-4" style={{ backgroundColor: 'var(--bg-color)', borderColor: theme === 'flux' ? 'black' : 'white' }}>
           <div className="p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r-4" style={{ borderColor: theme === 'flux' ? 'black' : 'white', color: 'var(--text-color)' }}>
              <div className="space-y-6">
                <h3 className="text-4xl font-black uppercase italic leading-tight font-display">
                  Catalyst<br/>(Bus Guide)<br/>Talk Session
                </h3>
                <p className="font-bold leading-relaxed text-lg">
                  世界を代表するゲストが東京のカルチャー史を語りながら案内する特別ツアー。
                  限定22名のプレミアムな「移動する大宴会」。
                </p>
                <div className="space-y-2 font-mono text-sm border-t-2 pt-6" style={{ borderColor: 'var(--border-color)' }}>
                   <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                      <span>ROUTE</span>
                      <span className="font-bold">SHIBUYA - HARAJUKU - AOYAMA</span>
                   </div>
                   <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                      <span>TIME</span>
                      <span className="font-bold">90 MIN</span>
                   </div>
                </div>
              </div>
              <div className="mt-12">
                <Button variant="secondary" fullWidth className="border-black text-black hover:bg-black hover:text-white">
                  Apply for VIP Access
                </Button>
              </div>
           </div>

           <div className="relative h-[400px] md:h-auto overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1600&auto=format&fit=crop" 
               alt="Tokyo Night" 
               className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-[var(--accent-color)] mix-blend-multiply opacity-40"></div>
             <div className="absolute bottom-0 left-0 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
                Tokyo Night Cruise
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};