import React from 'react';
import { Marquee } from './ui/Marquee';
import { Theme } from '../App';

const partners = [
  "KURABO", "JOHNNIE WALKER", "Shift C", "TYPICA", "KUSMI TEA"
];

interface SponsorsProps {
  theme?: Theme;
}

export const Sponsors: React.FC<SponsorsProps> = ({ theme }) => {
  return (
    <section id="sponsors" className="border-t pb-24" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }}>
      <div className="py-4 border-b mb-12" style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)' }}>
         <h4 className="text-center text-xs font-bold uppercase tracking-[0.3em] opacity-50">Supported by Our Partners</h4>
      </div>
      
      <div className="container mx-auto px-6 text-center mb-16">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
           {partners.map((partner, i) => (
             <div key={i} className="text-3xl md:text-5xl font-black transition-colors duration-300 cursor-pointer uppercase select-none opacity-80 hover:opacity-100 hover:text-[var(--accent-color)] font-display">
               {partner}
             </div>
           ))}
        </div>
      </div>

      <div className="border-y py-12" style={{ backgroundColor: 'var(--secondary-bg)', borderColor: 'var(--border-color)' }}>
         <Marquee text="SPONSOR LOGO" className="text-2xl opacity-30" repeat={10} />
         <div className="h-4"></div>
         <Marquee text="SPONSOR LOGO" className="text-2xl opacity-30" reverse repeat={10} />
      </div>
    </section>
  );
};